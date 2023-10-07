import { sendNewPost } from "../../src/utils/domElements.mjs";
import { newPost } from "../../feed/newPost.mjs";

sendNewPost.addEventListener("click", () => {
  newPost();
});
