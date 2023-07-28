// Function to archive a note
export function archiveNote(id) {
  const note = notes.find((note) => note.id === id);
  if (note) {
    note.archived = true;
    showAllNotes();
  }
}
