import { showAllNotes } from "../showAllNotes";
import {
  saveNotesToLocalStorage,
  loadNotesFromLocalStorage,
} from "../helpers/notesStorage";

export function deleteNote(id) {
  let notes = loadNotesFromLocalStorage();
  notes = notes.filter((note) => note.id !== id);

  saveNotesToLocalStorage(notes);
  showAllNotes(notes);
}
