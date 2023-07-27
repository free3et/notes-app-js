import { notes } from "./data/notesData";
import { formatDate } from "./helpers/formatDate";
import { extractDatesFromText } from "./helpers/extractDatesFromText";

export function showAllNotes() {
  const notesTableBody = document.querySelector("#allNotesTable tbody");

  // Clear the tables
  notesTableBody.innerHTML = "";

  notes.forEach((note) => {
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
          <button onclick="removeNote(${id})">Remove</button>
        </td>
      </tr>
    `;

    notesTableBody.innerHTML += tableRow;
  });
}
