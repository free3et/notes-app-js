import { loadArchivedNotesFromLocalStorage } from "./helpers/notesStorage";
import { formatDate } from "./helpers/formatDate";
import { extractDatesFromText } from "./helpers/extractDatesFromText";
import { unarchiveNote } from "./actionsOnNotes/unarchiveNote";
import { addImgToCategory } from "./helpers/showCategoryImg";

export function showArchivedTable() {
  let archiveNotes = loadArchivedNotesFromLocalStorage();
  const archiveNotesTableBody = document.querySelector(
    "#archivedNotesTable tbody"
  );

  archiveNotesTableBody.innerHTML = "";

  const sortedData = archiveNotes.sort((a, b) => {
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
        <td class='note-dates'>${extractDatesFromText(noteContent)}</td>
        <td>
          <button onclick="unarchiveNote(${id})" class="unarchiveBtn btn btn-outline-secondary">Unarchive</button>
        </td>
      </tr>
    `;

    if (archiveNotes.length) {
      archiveNotesTableBody.innerHTML += tableRow;
    }

    const unarchiveBtns = document.querySelectorAll(".unarchiveBtn");

    unarchiveBtns?.forEach((btn) => {
      btn.addEventListener("click", () => {
        const noteId = parseInt(btn.getAttribute("onclick").match(/\d+/)[0]);
        unarchiveNote(noteId);
      });
    });
  });
}
