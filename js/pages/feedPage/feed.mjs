import { sendNewPost } from "../../src/utils/domElements.mjs";
import { newPost } from "../../feed/newPost.mjs";
import { getAllPosts } from "../../feed/getAllPost.mjs";
import { getFollowing } from "../../feed/following.mjs";

getFollowing();

sendNewPost.addEventListener("click", () => {
  newPost();
});

getAllPosts();
