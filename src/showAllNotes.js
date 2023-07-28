import { formatDate } from "./helpers/formatDate";
import { extractDatesFromText } from "./helpers/extractDatesFromText";
import { deleteNote } from "./actionsOnNotes/deleteNote";
import { openEditNotePopup } from "./helpers/openEditNotePopup";
import { archiveNote } from "./actionsOnNotes/archiveNote";

export function showAllNotes(data) {
  const notesTableBody = document.querySelector("#allNotesTable tbody");

  notesTableBody.innerHTML = "";

  data?.forEach((note) => {
    const { id, name, timeOfCreation, category, noteContent } = note;
    const creationDate = formatDate(timeOfCreation);

    const tableRow = `
      <tr>
      <td class='note-title'>${name}</td>
        <td class='note-created'>${creationDate}</td>
        <td class='note-category'>${category}</td>
        <td class='note-description'>${noteContent}</td>
        <td class='note-dates'>${extractDatesFromText(noteContent)}</td>
        <td>
          <button onclick="openEditNotePopup(${id}, '${name}', '${noteContent}')" class="editBtn">Edit</button>
          <button onclick="archiveNote(${id})" class="archiveBtn">Archive</button>
          <button onclick="deleteNote(${id})" class="deleteBtn">Remove</button>
        </td>
      </tr>
    `;

    notesTableBody.innerHTML += tableRow;

    const deleteNoteBtns = document.querySelectorAll(".deleteBtn");
    const editeNoteBtns = document.querySelectorAll(".editBtn");
    const archiveNoteBtns = document.querySelectorAll(".archiveBtn");

    deleteNoteBtns?.forEach((btn) => {
      btn.addEventListener("click", () => {
        const noteId = parseInt(btn.getAttribute("onclick").match(/\d+/)[0]);
        deleteNote(noteId);
      });
    });

    editeNoteBtns?.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const noteId = parseInt(btn.getAttribute("onclick").match(/\d+/)[0]);
        const noteRow = e.target.closest("tr");
        const noteTitle = noteRow.querySelector(".note-title").textContent;
        const noteContent =
          noteRow.querySelector(".note-description").textContent;
        openEditNotePopup(noteId, noteTitle, noteContent);
      });
    });

    archiveNoteBtns?.forEach((btn) => {
      btn.addEventListener("click", () => {
        const noteId = parseInt(btn.getAttribute("onclick").match(/\d+/)[0]);
        archiveNote(noteId);
      });
    });
  });
}
