import { baseURL } from "../../env/env.mjs";
import {
  jwt,
  feedAllPosts,
  inputSearchTitle,
} from "../../src/utils/domElements.mjs";

// const inputSearchTitle = document.querySelector("#search-input-modal");
// const inputSelectionUsername = document.querySelector("#usernameRadio");
// const inputSelectionHashtag = document.querySelector("#hashtagRadio");

export function searchTest() {
  console.log(inputSearchTitle);
  inputSearchTitle.addEventListener("keyup", () => {
    console.log("clicked");
  });
}
searchTest();
