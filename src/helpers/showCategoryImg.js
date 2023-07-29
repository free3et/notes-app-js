import listImg from "../assets/list-icon.png";
import brainImg from "../assets/brain-icon.png";
import lampImg from "../assets/lamp-icon.png";
import quoteImg from "../assets/quote-icon.png";

export function addImgToCategory(category) {
  let imageSrc = "";
  if (category === "Task") {
    imageSrc = `${listImg}`;
  } else if (category === "Random Thought") {
    imageSrc = `${brainImg}`;
  } else if (category === "Idea") {
    imageSrc = `${lampImg}`;
  } else if (category === "Quote") {
    imageSrc = `${quoteImg}`;
  }
  return imageSrc;
}
