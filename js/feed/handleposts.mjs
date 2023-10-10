import { getFollowersPosts } from "./filterposts.mjs";
import { getAllPosts } from "./getAllPost.mjs";
import { feedAllPosts } from "../src/utils/domElements.mjs";

export function filterPostsFeed() {
  const dropdownFilter = document.querySelector("#filter-drop-menu");

  dropdownFilter.addEventListener("click", async (e) => {
    e.preventDefault();
    feedAllPosts.innerHTML = "";

    const feedSpinner = createSpinner();
    feedAllPosts.appendChild(feedSpinner);

    const selectOption = e.target.getAttribute("data-option");

    if (selectOption === "allUsers") {
      getAllPosts();
      console.log("Get all post is selected");
    } else if (selectOption === "following") {
      getFollowersPosts();
      console.log("Get followers post selected");
    }

    feedAllPosts.removeChild(feedSpinner);
  });
}

export function createSpinner() {
  const feedSpinner = document.createElement("div");
  feedSpinner.className = "spinner-border text-primary";
  feedSpinner.setAttribute("role", "status");

  const spanElement = document.createElement("span");
  spanElement.className = "visually-hidden";
  spanElement.textContent = "Loading...";

  feedSpinner.appendChild(spanElement);
  return feedSpinner;
}
