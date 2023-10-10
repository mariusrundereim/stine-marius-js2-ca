import { getFollowersPosts } from "./filterposts.mjs";
import { getAllPosts } from "./getAllPost.mjs";

export function filterPostsFeed() {
  const dropdownFilter = document.querySelector("#filter-drop-menu");

  dropdownFilter.addEventListener("click", async (e) => {
    e.preventDefault();

    const selectOption = e.target.getAttribute("data-option");

    if (selectOption === "allUsers") {
      await getAllPosts();
      console.log("Get all post is selected");
    } else if (selectOption === "following") {
      await getFollowersPosts();
      console.log("Get followers post selected");
    }
  });
}
