import { showAllNotes } from "./showAllNotes";
import { showSummaryTable } from "./showSummaryTable";
import { addNote } from "./actionsOnNotes/addNote";
import { loadNotesFromLocalStorage } from "./helpers/notesStorage";
import { showArchivedTable } from "./showArchivedTable";

const newNoteForm = document.querySelector("#addNoteModal");
const archiveNotesTable = document.querySelector(".archivedNotesWrapper");
const archiveNotesBtn = document.querySelector(".hideArchiveNote");
const archiveNotes = document.querySelector(".archiveNotes");

const notes = loadNotesFromLocalStorage();

function showArchiveNotes() {
  archiveNotesTable.classList.toggle("show");
}

// Event listeners
window.addEventListener("load", () => {
  showAllNotes(notes);
  showSummaryTable();
  showArchivedTable();
  archiveNotes.addEventListener("click", showArchiveNotes);
  archiveNotesBtn.addEventListener("click", showArchiveNotes);

  newNoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addNote();
  });
});
