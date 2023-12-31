import * as notesAPI from './notes-api';

export async function createNote(noteData) {
  return notesAPI.createNote(noteData);
}

export async function fetchNotes() {
  return notesAPI.getNotes();
}

export async function deleteNote(noteId) {
  return notesAPI.deleteNote(noteId);
}

export async function updateNote(noteId, newText) {
  return notesAPI.updateNote(noteId, {text: newText});
}