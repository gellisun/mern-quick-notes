import { useEffect, useState } from "react";
import { checkToken } from "../../utilities/users-service";
import { getToken } from "../../utilities/users-service";
import NotesForm from "../../components/NotesForm/NotesForm";
import NoteCard from "../../components/NoteCard/NoteCard";
import * as notesService from "../../utilities/notes-service";

export default function NotesHistoryPage() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    loadNotes();
  }, [sortOrder]);

  async function loadNotes() {
    try {
      const fetchedNotes = await notesService.fetchNotes();
      const sortedNotes =
        sortOrder === "asc" ? fetchedNotes : fetchedNotes.reverse();
      setNotes(sortedNotes);
    } catch (err) {
      console.error("Error fetching notes:", err);
    } finally {
      setLoading(false);
    }
  }

  async function handleCheckToken() {
    const expDate = await checkToken();
    return console.log(expDate);
  }

  async function handleAddNote(newNote) {
    try {
      await notesService.createNote({ text: newNote });
      await loadNotes();
      console.log(notes);
    } catch (err) {
      console.error(err);
    }
  }

  const token = getToken();

  async function handleDeleteNote(noteId) {
    try {
      await notesService.deleteNote(noteId);
      const updatedNotes = notes.filter((note) => note._id !== noteId);
      setNotes(updatedNotes);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
      <NotesForm addNote={handleAddNote} />
      <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
        {sortOrder === "asc" ? "Descending order" : "Ascending order" }
      </button>
      {notes.length > 0 ? (
        <div>
          {notes.map((note) =>
            note.user ? <NoteCard key={note._id} note={note} deleteNote={handleDeleteNote} /> : null
          )}
        </div>
      ) : (
        <p>No Notes Yet!</p>
      )}
    </>
  );
}
