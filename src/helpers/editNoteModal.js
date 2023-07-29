import { editNote } from "../actionsOnNotes/editNote";

export function editNoteModal(id, name, noteContent, category) {
  const editNotePopup = document.querySelector("#editNotePopup");
  const editNoteTitleInput = document.querySelector(".editNoteTitle");
  const editNoteDescriptionInput = document.querySelector(
    ".editNoteDescription"
  );
  const saveNoteChangesBtn = document.querySelector(".saveNoteChangesBtn");
  const closeEditNotePopupBtn = document.querySelector(
    ".closeEditNotePopupBtn"
  );
  const editNoteCategory = document.querySelector("#editNoteCategory");
  editNotePopup.classList.add("show");

  editNoteTitleInput.value = name;
  editNoteDescriptionInput.value = noteContent;
  editNoteCategory.value = category;

  function saveChanges() {
    const updatedTitle = editNoteTitleInput.value;
    const updatedDescription = editNoteDescriptionInput.value;
    const updatedCategory = editNoteCategory.value;

    editNote(id, updatedTitle, updatedDescription, updatedCategory);
  }

  saveNoteChangesBtn.addEventListener("click", saveChanges);
  closeEditNotePopupBtn.addEventListener("click", () => {
    editNotePopup.classList.remove("show");
  });
}
