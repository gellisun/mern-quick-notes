import { useState } from 'react';

export default function NoteCard({ note, deleteNote, updateNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    await updateNote(note._id, editedText);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>{note.text}</p>
          <p>{new Date(note.createdAt).toLocaleString()}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteNote(note._id)}>Delete</button>
        </>
      )}
    </div>
  );
}


