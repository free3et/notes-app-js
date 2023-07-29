import { formatDate } from "./helpers/formatDate";
import { extractDatesFromText } from "./helpers/extractDatesFromText";
import { deleteNote } from "./actionsOnNotes/deleteNote";
import { editNoteModal } from "./helpers/editNoteModal";
import { archiveNote } from "./actionsOnNotes/archiveNote";
import { addImgToCategory } from "./helpers/showCategoryImg";

export function showAllNotes(data) {
  const notesTableBody = document.querySelector("#allNotesTable tbody");

  notesTableBody.innerHTML = "";

  const sortedData = data.sort((a, b) => {
    return new Date(a.timeOfCreation) > new Date(b.timeOfCreation) ? -1 : 1;
  });

  sortedData?.forEach((note) => {
    const { id, name, timeOfCreation, category, noteContent } = note;
    const creationDate = formatDate(timeOfCreation);

    const tableRow = `
      <tr>
      <td><img src="${addImgToCategory(
        category
      )}" alt="${category}" class="category-icon"></td>
      <td class='note-title'>${name}</td>
        <td class='note-created'>${creationDate}</td>
        <td class='note-category'>${category}</td>
        <td class='note-description'>${noteContent}</td>
        <td class='note-dates'><span>${extractDatesFromText(
          noteContent
        )}</span></td>
        <td class='actions'>
          <button onclick="${id}" class="editBtn btn btn-outline-success btn-sm m-1">Edit</button>
          <button onclick="${id}" class="archiveBtn btn btn-outline-primary btn-sm m-1">Archive</button>
          <button onclick="${id}" class="deleteBtn btn btn-outline-dark btn-sm m-1">Remove</button>
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
        const noteCategory =
          noteRow.querySelector(".note-category").textContent;
        editNoteModal(noteId, noteTitle, noteContent, noteCategory);
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
