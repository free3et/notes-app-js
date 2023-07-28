import { showAllNotes } from "./showAllNotes";
import { showSummaryTable } from "./showSummaryTable";
import { addNote } from "./actionsOnNotes/addNote";
import { loadNotesFromLocalStorage } from "./helpers/notesStorage";
import { showArchivedTable } from "./showArchivedTable";

const createNoteBtn = document.querySelector(".addNewNote");
const newNoteForm = document.querySelector("#newNoteForm");
const archiveNotesTable = document.querySelector("#archivedNotesTable");
const archiveNotes = document.querySelector(".archiveNotes");

const notes = loadNotesFromLocalStorage();

function showAddNewNoteForm() {
  newNoteForm.classList.toggle("show");
  newNoteForm.classList.toggle("hide");
  createNoteBtn.innerText = "Create note";
}

function showArchiveNotes() {
  archiveNotesTable.classList.toggle("show");
}

// Event listeners
window.addEventListener("load", () => {
  showAllNotes(notes);
  showSummaryTable();
  showArchivedTable();
  createNoteBtn.addEventListener("click", showAddNewNoteForm);
  archiveNotes.addEventListener("click", showArchiveNotes);

  newNoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addNote();
  });
});
