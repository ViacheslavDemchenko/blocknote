import './Notes.css';
import { Note } from './../Note/Note';

const Notes = ({filteredNotes = [], removeNote, setEditId, setEditing, editNote}) => {
    return(
        <div className="notes">
            <div className="notes__list">
                {   filteredNotes.length ? filteredNotes.map(note => (
                        <Note 
                            key={note.id} 
                            id={note.id} 
                            text={note.text} 
                            removeNote={removeNote} 
                            setEditId={setEditId}
                            setEditing={setEditing}
                            editNote={editNote}
                        />
                    )) : <p className="notes__warning">Записей нет</p>
                }
            </div>
        </div>
    );
}

export { Notes };