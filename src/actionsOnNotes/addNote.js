import { extractDatesFromText } from "../helpers/extractDatesFromText";
import { notes } from "../data/notesData";
import { showAllNotes } from "../showAllNotes";

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

  notes.push(newNote);
  showAllNotes();
  document.getElementById("newNoteForm").reset();
}
