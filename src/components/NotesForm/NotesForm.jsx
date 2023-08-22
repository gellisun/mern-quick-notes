import { useState } from "react";

export default function NotesForm({addNote}) {
    const [newNote, setNewNote] = useState('');
    function handleChange (e) {
        setNewNote(e.target.value);
    };
    function handleSubmit (e) {
        e.preventDefault();
        addNote(newNote);
        setNewNote('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="text"
            onChange={handleChange}
            placeholder="Enter new note..."
             />
             <button type="submit" onChange={handleSubmit}>Add Note</button>
        </form>
    );
}