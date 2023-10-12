import { getFollowersPosts } from "./filterposts.mjs";
import { getAllPosts } from "./getAllPost.mjs";
import { feedAllPosts } from "../src/utils/domElements.mjs";

export function filterPostsFeed() {
  const dropdownFilter = document.querySelector("#filter-drop-menu");

  dropdownFilter.addEventListener("click", async (e) => {
    e.preventDefault();
    feedAllPosts.innerHTML = "";
    const selectOption = e.target.getAttribute("data-option");

    if (selectOption === "allUsers") {
      getAllPosts();
      console.log("Get all post is selected");
    } else if (selectOption === "following") {
      //feedAllPosts = "";
      getFollowersPosts();
      console.log("Get followers post selected");
    }
  });
}

export function displayFilterSelected() {
  //
}
