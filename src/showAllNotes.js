import { notes } from "./data/notesData";
import { formatDate } from "./helpers/formatDate";
import { extractDatesFromText } from "./helpers/extractDatesFromText";
import { deleteNote } from "./actionsOnNotes/deleteNote";

export function showAllNotes(data) {
  const notesTableBody = document.querySelector("#allNotesTable tbody");

  // Clear the tables
  notesTableBody.innerHTML = "";

  data?.forEach((note) => {
    const {
      id,
      name,
      timeOfCreation,
      category,
      noteContent,
      datesMentioned,
      archived,
    } = note;
    const creationDate = formatDate(timeOfCreation);

    const tableRow = `
      <tr>
      <td>${name}</td>
        <td>${creationDate}</td>
        <td>${category}</td>
        <td>${noteContent}</td>
        <td>${extractDatesFromText(noteContent)}</td>
        <td>
          <button onclick="editNote(${id})">Edit</button>
          <button onclick="archiveNote(${id})">Archive</button>
          <button onclick="${id}" class="deleteBtn">Remove</button>
        </td>
      </tr>
    `;

    notesTableBody.innerHTML += tableRow;
  });

  const deleteNoteBtns = document.querySelectorAll(".deleteBtn");
  deleteNoteBtns?.forEach((button) => {
    button?.addEventListener("click", () => {
      const noteId = parseInt(button.getAttribute("onclick").match(/\d+/)[0]);
      deleteNote(noteId);
    });
  });
}
