import { editNote } from "../actionsOnNotes/editNote";

export function openEditNotePopup(id, name, noteContent) {
  const editNotePopup = document.querySelector("#editNotePopup");
  const editNoteTitleInput = document.querySelector(".editNoteTitle");
  const editNoteDescriptionInput = document.querySelector(
    ".editNoteDescription"
  );
  const saveNoteChangesBtn = document.querySelector(".saveNoteChangesBtn");
  const closeEditNotePopupBtn = document.querySelector(
    ".closeEditNotePopupBtn"
  );

  editNoteTitleInput.value = name;
  editNoteDescriptionInput.value = noteContent;

  editNotePopup.classList.add("show");

  function saveChanges() {
    const updatedTitle = editNoteTitleInput.value;
    const updatedDescription = editNoteDescriptionInput.value;

    editNote(id, updatedTitle, updatedDescription);

    editNotePopup.classList.remove("show");
  }

  saveNoteChangesBtn.addEventListener("click", saveChanges);
  closeEditNotePopupBtn.addEventListener("click", () => {
    editNotePopup.classList.remove("show");
  });
}
