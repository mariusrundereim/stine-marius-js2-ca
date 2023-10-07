import { sendNewPost } from "../../src/utils/domElements.mjs";
import { newPost } from "../../feed/newPost.mjs";
import { getAllPosts } from "../../feed/getAllPost.mjs";
import { searchHeader } from "../../feed/searchPosts.mjs";

sendNewPost.addEventListener("click", () => {
  newPost();
});

getAllPosts();
searchHeader();
