export default function NoteCard({ note }) {
  return (
    <>
      <p key={note._id}>{note.text}</p>
      <p>{new Date(note.createdAt).toLocaleString()}</p>
    </>
  );
}
