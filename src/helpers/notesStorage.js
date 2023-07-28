import { notes } from "../data/notesData";

function saveNotesToLocalStorage(item) {
  localStorage.setItem("active-notes", JSON.stringify(item));
}

function saveArchiveNotesToLocalStorage(item) {
  localStorage.setItem("archive-notes", JSON.stringify(item));
}

function loadNotesFromLocalStorage() {
  try {
    const savedNotes = localStorage.getItem("active-notes");
    return savedNotes ? JSON.parse(savedNotes) : notes;
  } catch (error) {
    console.error("Error parsing notes from Local Storage:", error);
    return [];
  }
}

function loadArchivedNotesFromLocalStorage() {
  try {
    const archivedNotes = localStorage.getItem("archive-notes");
    return archivedNotes ? JSON.parse(archivedNotes) : [];
  } catch (error) {
    console.error("Error parsing archive notes from Local Storage:", error);
    return [];
  }
}

export {
  saveNotesToLocalStorage,
  loadNotesFromLocalStorage,
  saveArchiveNotesToLocalStorage,
  loadArchivedNotesFromLocalStorage,
};
