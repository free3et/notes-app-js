import { showAllNotes } from "./showAllNotes";
import { showSummaryTable } from "./showSummaryTable";
import { notes } from "./data/notesData";
import { addNote } from "./actionsOnNotes/addNote";
import { editNote } from "./actionsOnNotes/editNote";
import { deleteNote } from "./actionsOnNotes/deleteNote";
import { archiveNote } from "./actionsOnNotes/archiveNote";
import { unarchiveNote } from "./actionsOnNotes/unarchiveNote";

const createNoteBtn = document.querySelector("#addNewNote");
const newNoteForm = document.querySelector("#newNoteForm");

function showAddNewNoteForm() {
  newNoteForm.classList.toggle("show");
  newNoteForm.classList.toggle("hide");
  createNoteBtn.innerText = "Hide new note form";
}

// Display notes on initial page load
window.addEventListener("load", showAllNotes);
window.addEventListener("load", showSummaryTable);
createNoteBtn.addEventListener("click", showAddNewNoteForm);

// Handle form submission
document.getElementById("newNoteForm").addEventListener("submit", (event) => {
  event.preventDefault();
  addNote();
});
