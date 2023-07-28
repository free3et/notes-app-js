import { notes } from "../data/notesData";

function saveNotesToLocalStorage(item) {
  localStorage.setItem("active-notes", JSON.stringify(item));
}

function saveArchiveNotesToLocalStorage(item) {
  localStorage.setItem("archive-notes", JSON.stringify(item));
}

function loadNotesFromLocalStorage() {
  const savedNotes = localStorage.getItem("active-notes");
  return savedNotes ? JSON.parse(savedNotes) : notes;
}

function loadArchivedNotesFromLocalStorage() {
  const archivedNotes = localStorage.getItem("archive-notes");
  return archivedNotes ? JSON.parse(archivedNotes) : [];
}

export {
  saveNotesToLocalStorage,
  loadNotesFromLocalStorage,
  saveArchiveNotesToLocalStorage,
  loadArchivedNotesFromLocalStorage,
};
