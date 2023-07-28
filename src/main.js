import { showAllNotes } from "./showAllNotes";
import { showSummaryTable } from "./showSummaryTable";
import { addNote } from "./actionsOnNotes/addNote";
import { loadNotesFromLocalStorage } from "./helpers/notesStorage";

const createNoteBtn = document.querySelector(".addNewNote");
const newNoteForm = document.querySelector("#newNoteForm");
const notes = loadNotesFromLocalStorage();

function showAddNewNoteForm() {
  newNoteForm.classList.toggle("show");
  newNoteForm.classList.toggle("hide");
  createNoteBtn.innerText = "Create note";
}

// Event listeners
window.addEventListener("load", () => {
  showAllNotes(notes);
  showSummaryTable();
  createNoteBtn.addEventListener("click", showAddNewNoteForm);
  newNoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addNote();
  });
});
