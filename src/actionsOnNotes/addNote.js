import { extractDatesFromText } from "../helpers/extractDatesFromText";
import { showSummaryTable } from "../showSummaryTable";
import { showAllNotes } from "../showAllNotes";
import {
  saveNotesToLocalStorage,
  loadNotesFromLocalStorage,
} from "../helpers/notesStorage";

export function addNote() {
  const noteTitle = document.getElementById("noteTitle").value;
  const noteDescription = document.getElementById("noteDescription").value;
  const category = document.getElementById("category").value;
  const newNote = {
    id: Date.now(),
    name: noteTitle,
    timeOfCreation: new Date().toISOString(),
    category: category,
    noteContent: noteDescription,
    datesMentioned: extractDatesFromText(noteDescription),
    archived: false,
  };

  let notes = loadNotesFromLocalStorage();
  notes.push(newNote);

  saveNotesToLocalStorage(notes);
  showAllNotes(notes);
  showSummaryTable();

  document.getElementById("newNoteForm").reset();
}
