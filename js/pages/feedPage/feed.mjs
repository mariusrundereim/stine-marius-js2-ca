import { sendNewPost } from "../../src/utils/domElements.mjs";
import { newPost } from "../../feed/newPost.mjs";
import { getAllPosts } from "../../feed/getAllPost.mjs";

sendNewPost.addEventListener("click", () => {
  newPost();
});

document.addEventListener("DOMContentLoaded", function () {
  const editPostTitle = document.querySelector(".edit-post-title");
  console.log(editPostTitle);
  // Your code here, including the logic that uses the IDs
  getAllPosts();
});
