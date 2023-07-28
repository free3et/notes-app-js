import { notes } from "../data/notesData";

function saveNotesToLocalStorage(item) {
  localStorage.setItem("notes", JSON.stringify(item));
}

function loadNotesFromLocalStorage() {
  const savedNotes = localStorage.getItem("notes");
  return savedNotes ? JSON.parse(savedNotes) : notes;
}

export { saveNotesToLocalStorage, loadNotesFromLocalStorage };
