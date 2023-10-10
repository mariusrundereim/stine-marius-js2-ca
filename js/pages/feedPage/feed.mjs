import {
  sendNewPost,
  editPostTitle,
  tester,
} from "../../src/utils/domElements.mjs";
import { newPost } from "../../feed/newPost.mjs";
import { getAllPosts } from "../../feed/getAllPost.mjs";

console.log(editPostTitle, tester);
console.log(newPost);

sendNewPost.addEventListener("click", () => {
  newPost();
});

document.addEventListener("DOMContentLoaded", function () {
  const editPostTitle = document.querySelector(".edit-post-title");
  console.log(editPostTitle);
  // Your code here, including the logic that uses the IDs
  getAllPosts();
});
