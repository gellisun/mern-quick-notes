export default function NoteCard({ note, deleteNote }) {
  return (
    <>
      <p key={note._id}>{note.text}</p>
      <p>{new Date(note.createdAt).toLocaleString()}</p>
      <button onClick={() => deleteNote(note._id)}>Delete</button>
    </>
  );
}
