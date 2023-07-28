import { showAllNotes } from "../showAllNotes";
import {
  saveArchiveNotesToLocalStorage,
  loadNotesFromLocalStorage,
  saveNotesToLocalStorage,
  loadArchivedNotesFromLocalStorage,
} from "../helpers/notesStorage";
import { showSummaryTable } from "../showSummaryTable";

export function archiveNote(id) {
  let notes = loadNotesFromLocalStorage();
  let archivedNotes = loadArchivedNotesFromLocalStorage();

  let archivedNote = notes.find((note) => note.id === id);
  archivedNote.archived = true;

  if (archivedNote) {
    archivedNotes.push(archivedNote);
    saveArchiveNotesToLocalStorage(archivedNotes);

    notes = notes.filter((note) => note.id !== archivedNote.id);
    saveNotesToLocalStorage(notes);

    showAllNotes(notes);
    showSummaryTable();
  }
}
