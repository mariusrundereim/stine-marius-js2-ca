import { feedAllPosts } from "../src/utils/domElements.mjs";

export function renderResults(searchResults) {
  //const testContainer = document.querySelector(".testContainer");
  feedAllPosts.innerHTML = "";

  searchResults.forEach((result) => {
    const postElement = createPostElement(result);
    feedAllPosts.appendChild(postElement);
  });
}

export function createPostElement(post) {
  const postElement = document.createElement("div");
  postElement.textContent = post;
  console.log(postElement);

  return postElement;
}
