import { showAllNotes } from "./showAllNotes";
import { showSummaryTable } from "./showSummaryTable";
import { addNote } from "./actionsOnNotes/addNote";
import { editNote } from "./actionsOnNotes/editNote";
import { archiveNote } from "./actionsOnNotes/archiveNote";
import { unarchiveNote } from "./actionsOnNotes/unarchiveNote";
import { loadNotesFromLocalStorage } from "./helpers/notesStorage";

const createNoteBtn = document.querySelector(".addNewNote");
const newNoteForm = document.querySelector("#newNoteForm");
const notesTableBody = document.querySelector("#allNotesTable");
let notes = loadNotesFromLocalStorage();

function showAddNewNoteForm() {
  newNoteForm.classList.toggle("show");
  newNoteForm.classList.toggle("hide");
  createNoteBtn.innerText = "Hide new note form";
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
