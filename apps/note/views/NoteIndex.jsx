import { NoteList } from "../cmps/NoteList.jsx"
import { NoteAdd } from "../cmps/NoteAdd.jsx"
import { noteService } from '../services/note.service.js'

const { useState, useEffect } = React
const { Link } = ReactRouterDOM

export function NoteIndex() {

    const [notes, setNotes] = useState(null)

    useEffect(() => {
        // console.log('note service',noteService.query)
        noteService.query().then(notes => {
            setNotes(notes)
            console.log(notes)
        })
        
    }, [])

    function onRemoveNote(noteId) {
        noteService
            .remove(noteId)
            .then(() => {
                setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId))
            })
            .catch(err => {
                console.error(err)
            })
    }

    function onAddNote(newNote) {
        noteService
            .save(newNote)
            .then((newNote) => {
                setNotes(prevNotes => [...prevNotes, newNote])
            })
            .catch(err => {
                console.error(err)
            })
    }

    function onChangeNoteColor(noteId) {
        noteService
            .get(noteId)
            .then(updatedNote => {
                // Update the color of the note in the state
                setNotes(prevNotes =>
                    prevNotes.map(note => (note.id === noteId ? { ...note, color: updatedNote.color } : note))
                )
            })
            .catch(err => {
                console.error(err)
            })
    }

    console.log(notes)

    if (!notes) return <div>Loading notes...</div>
    return <section className='note-index'>

        <NoteAdd onAddNote={onAddNote} />
        <NoteList notes={notes} onRemoveNote={onRemoveNote} onChangeNoteColor={onChangeNoteColor} />
    </section>
}