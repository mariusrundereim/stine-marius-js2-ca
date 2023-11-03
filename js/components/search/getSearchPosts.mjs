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
  mediaDiv.classList.add("post-innlegg");
  mediaDiv.classList.add("post-img-container");
  mediaDiv.classList.add("col");
  mediaDiv.classList.add("ratio");
  mediaDiv.classList.add("ratio-1x1");
  mediaDiv.classList.add("rounded-top");
  const img = document.createElement("img");
  img.src = post.media;
  img.classList.add("post-img");
  mediaDiv.appendChild(img);
  postElement.appendChild(mediaDiv);

  // Title
  const titleElement = document.createElement("h2");
  titleElement.textContent = post.title;

  //Body
  const bodyEle = document.createElement("p");
  bodyEle.textContent = post.body;

  postElement.appendChild(titleElement);
  postElement.appendChild(bodyEle);
  console.log(postElement);

  return postElement;
}
