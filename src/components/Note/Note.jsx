import './Note.css';

const Note = ({text, removeNote, id, setEditId, setEditing, editNote}) => {

    const notesHandler = (id) => {
        setEditing(id);
        setEditId(id);
        editNote(id);
    }

    return(
        <li className="notes__list-item">
            <span onClick={() => notesHandler(id)}>
                {
                    text.length > 10 ? text.substring(0, 10) + '...' : text
                }
            </span>
            <button className="notes__list-item__delete" onClick={() => removeNote(id)}>X</button>
        </li>
    );
}

export { Note };