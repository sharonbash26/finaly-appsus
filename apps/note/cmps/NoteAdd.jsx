import { noteService } from '../services/note.service.js'

const { useState, useEffect } = React
const { useNavigate, useParams } = ReactRouterDOM

export function NoteAdd({ onAddNote }) {
  const [noteToAdd, setNoteToAdd] = useState(noteService.getEmptyNote())
  const [formSubmitted, setFormSubmitted] = useState(false);
  const params = useParams()

  useEffect(() => {
    if (params.noteId) loadNote()
  }, [])

  function loadNote() {
    noteService
      .get(params.noteId)
      .then(setNoteToAdd)
      .catch(err => console.log('err:', err))
  }

  function handleChange({ target }) {
    const field = target.name
    let value = target.value

    if (target.type === 'text') {
      setNoteToAdd(prevNoteToAdd => ({
        ...prevNoteToAdd,
        info: {
          ...prevNoteToAdd.info,
          [field]: value
        }
      }))
    } else {
      switch (target.type) {
        case 'number':
        case 'range':
          value = +value || ''
          break

        case 'checkbox':
          value = target.checked
          break

        default:
          break
      }
      setNoteToAdd(prevNoteToAdd => ({
        ...prevNoteToAdd,
        [field]: value
      }))
    }
  }

  function onSubmitNote(ev) {
    ev.preventDefault()
    onAddNote(noteToAdd)
    setFormSubmitted(!formSubmitted)
    resetForm()
  }

  function resetForm() {
    setNoteToAdd(noteService.getEmptyNote())
    setFormSubmitted(!formSubmitted)
  }

  return (
    <section className='add-note'>

      <h2>Your note</h2>
      <form onSubmit={onSubmitNote}>
        <label htmlFor='title'></label>
        <input
          value={noteToAdd.info.title}
          onChange={handleChange}
          type='text'
          placeholder='Title'
          id='title'
          name='title'
          className='title-input'
        />

        <label htmlFor='txt'></label>
        {noteToAdd.type !== 'NoteTodos' && <input
          value={noteToAdd.info.txt}
          onChange={handleChange}
          type='text'
          placeholder='Take a note...'
          id='txt'
          name='txt'
        />}

        <button className="save-btn" ><img src="./assets/icons/check_FILL0_wght400_GRAD0_opsz24.svg" alt="Save" /></button>
      </form>
    </section>
  )
}
