import sendRequest from './send-request';

const BASE_URL = '/api/notes';

export async function createNote(noteData) {
  return sendRequest(BASE_URL, 'POST', noteData);
}

export async function getNotes() {
  return sendRequest(BASE_URL);
}

export async function deleteNote(noteId) {
  return sendRequest(`${BASE_URL}/${noteId}`, 'DELETE');
}