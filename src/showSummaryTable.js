import { notes } from "./data/notesData";

export function showSummaryTable() {
  const archivedNotesTableBody = document.querySelector(
    "#archivedNotesTable tbody"
  );
  const activeTaskCount = document.getElementById("activeTaskCount");
  const archivedTaskCount = document.getElementById("archivedTaskCount");
  const randomThoughtActiveCount = document.getElementById(
    "randomThoughtActiveCount"
  );
  const randomThoughtArchivedCount = document.getElementById(
    "randomThoughtArchivedCount"
  );
  const ideaActiveCount = document.getElementById("ideaActiveCount");
  const ideaArchivedCount = document.getElementById("ideaArchivedCount");

  // Clear the tables
  archivedNotesTableBody.innerHTML = "";

  // Initialize category counts
  let taskActive = 0;
  let taskArchived = 0;
  let randomThoughtActive = 0;
  let randomThoughtArchived = 0;
  let ideaActive = 0;
  let ideaArchived = 0;

  notes.forEach((note) => {
    const { category, archived } = note;

    if (archived) {
      if (category === "Task") {
        taskArchived++;
      } else if (category === "Random Thought") {
        randomThoughtArchived++;
      } else if (category === "Idea") {
        ideaArchived++;
      }
    } else {
      if (category === "Task") {
        taskActive++;
      } else if (category === "Random Thought") {
        randomThoughtActive++;
      } else if (category === "Idea") {
        ideaActive++;
      }
    }
  });

  // Update summary table
  activeTaskCount.textContent = taskActive;
  archivedTaskCount.textContent = taskArchived;
  randomThoughtActiveCount.textContent = randomThoughtActive;
  randomThoughtArchivedCount.textContent = randomThoughtArchived;
  ideaActiveCount.textContent = ideaActive;
  ideaArchivedCount.textContent = ideaArchived;
}
