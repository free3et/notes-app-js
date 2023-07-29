import { showAllNotes } from "../showAllNotes";
import {
  saveNotesToLocalStorage,
  loadNotesFromLocalStorage,
} from "../helpers/notesStorage";

export function editNote(
  id,
  updatedTitle,
  updatedDescription,
  updatedCategory
) {
  let notes = loadNotesFromLocalStorage();
  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes[index].name = updatedTitle;
    notes[index].noteContent = updatedDescription;
    notes[index].category = updatedCategory;
    (notes[index].timeOfCreation = new Date().toISOString()),
      saveNotesToLocalStorage(notes);
  }

  showAllNotes(notes);
}
