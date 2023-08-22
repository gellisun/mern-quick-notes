import * as notesAPI from './notes-api';

export async function createNote(noteData) {
  return notesAPI.createNote(noteData);
}

export async function fetchNotes() {
  return notesAPI.getNotes();
}