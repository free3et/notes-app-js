import {
  loadNotesFromLocalStorage,
  loadArchivedNotesFromLocalStorage,
} from "./helpers/notesStorage";

export function showSummaryTable() {
  let activeNotes = loadNotesFromLocalStorage();
  let archiveNotes = loadArchivedNotesFromLocalStorage();

  const categoryElements = {
    Task: {
      active: document.querySelector(".activeTaskCount"),
      archived: document.querySelector(".archivedTaskCount"),
    },
    "Random Thought": {
      active: document.querySelector(".randomThoughtActiveCount"),
      archived: document.querySelector(".randomThoughtArchivedCount"),
    },
    Idea: {
      active: document.querySelector(".ideaActiveCount"),
      archived: document.querySelector(".ideaArchivedCount"),
    },
    Quote: {
      active: document.querySelector(".quoteActiveCount"),
      archived: document.querySelector(".quoteArchivedCount"),
    },
  };

  const categoryCounts = {
    Task: { active: 0, archived: 0 },
    "Random Thought": { active: 0, archived: 0 },
    Idea: { active: 0, archived: 0 },
    Quote: { active: 0, archived: 0 },
  };

  activeNotes.forEach((note) => {
    const { category } = note;
    categoryCounts[category].active++;
  });

  archiveNotes.forEach((note) => {
    const { category, archived } = note;
    if (archived) {
      categoryCounts[category].archived++;
    }
  });

  for (const category in categoryCounts) {
    const { active, archived } = categoryCounts[category];
    const { active: activeElement, archived: archivedElement } =
      categoryElements[category];

    activeElement.textContent = active;
    archivedElement.textContent = archived;
  }
}
