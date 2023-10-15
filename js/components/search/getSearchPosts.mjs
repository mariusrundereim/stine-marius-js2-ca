import { feedAllPosts, avatarUrlValue } from "../../src/utils/domElements.mjs";

export function renderResults(searchResults) {
  feedAllPosts.innerHTML = "";

  searchResults.forEach((result) => {
    const postElement = createPostElement(result);
    feedAllPosts.appendChild(postElement);
  });
}

export function createPostElement(post) {
  const postElement = document.createElement("div");
  postElement.classList.add("border");
  postElement.classList.add("border-dark");
  postElement.classList.add("border-opacity-25");
  postElement.classList.add("rounded");
  postElement.classList.add("mb-4");

  // Image
  const mediaDiv = document.createElement("div");
  const img = document.createElement("img");
  img.src = post.media;
  mediaDiv.appendChild(img);
  postElement.appendChild(mediaDiv);

  // Title
  const titleElement = document.createElement("h2");
  titleElement.textContent = post.title;

  //Body
  const bodyEle = document.createElement("p");
  bodyEle.textContent = post.body;
  console.log(post.body);

  postElement.appendChild(titleElement);
  postElement.appendChild(bodyEle);
  console.log(postElement);

  console.log("Test", post.media);

  return postElement;
}
