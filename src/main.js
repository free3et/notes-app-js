import { showAllNotes } from "./showAllNotes";
import { showSummaryTable } from "./showSummaryTable";
import { notes } from "./data/notesData";
import { addNote } from "./actionsOnNotes/addNote";
import { editNote } from "./actionsOnNotes/editNote";
import { deleteNote } from "./actionsOnNotes/deleteNote";
import { archiveNote } from "./actionsOnNotes/archiveNote";
import { unarchiveNote } from "./actionsOnNotes/unarchiveNote";

// Display notes on initial page load
window.addEventListener("load", showAllNotes);
window.addEventListener("load", showSummaryTable);

// Handle form submission
document.getElementById("newNoteForm").addEventListener("submit", (event) => {
  event.preventDefault();
  addNote();
  editNote();
});
