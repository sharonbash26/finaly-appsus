import { NotePreview } from './NotePreview.jsx'
const { Link } = ReactRouterDOM

export function NoteList({ notes, onRemoveNote }) {

    return <ul className='note-list'>
        {notes.map(note => (
            <li key={note.id} className='note-card' >
                <NotePreview note={note} />
                <div className='note-footer'>
                    <button className='btn-note-remove' onClick={() => onRemoveNote(note.id)}><img src="./assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg" alt="Delete"></img></button>
                    <button className='btn-note-edit'>
                        <Link to={`/note/edit/${note.id}`}><img src="./assets/icons/edit_FILL0_wght400_GRAD0_opsz24.svg" alt="Edit" /></Link>
                    </button>
                </div>
            </li>
        ))}
    </ul>
}


