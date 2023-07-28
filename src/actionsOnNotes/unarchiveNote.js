import { showAllNotes } from "../showAllNotes";
import {
  saveArchiveNotesToLocalStorage,
  loadNotesFromLocalStorage,
  saveNotesToLocalStorage,
  loadArchivedNotesFromLocalStorage,
} from "../helpers/notesStorage";
import { showSummaryTable } from "../showSummaryTable";
import { showArchivedTable } from "../showArchivedTable";

export function unarchiveNote(id) {
  let activeNotes = loadNotesFromLocalStorage();
  let archivedNotes = loadArchivedNotesFromLocalStorage();

  let archivedNote = archivedNotes.find((note) => note.id === id);
  archivedNote.archived = false;

  archivedNotes = archivedNotes.filter((note) => note.id !== archivedNote.id);

  if (!archivedNote.archived) {
    activeNotes.push(archivedNote);
    saveNotesToLocalStorage(activeNotes);

    saveArchiveNotesToLocalStorage(archivedNotes);

    showAllNotes(activeNotes);
    showSummaryTable();
    showArchivedTable();
  }
}
