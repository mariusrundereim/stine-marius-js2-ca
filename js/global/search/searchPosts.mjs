import { baseURL } from "../../env/env.mjs";
import { jwt } from "../../src/utils/domElements.mjs";

export function searchTest() {
  const inputSearchTitle = document.querySelector("#search-input-modal");
  const inputSelectionUsername = document.querySelector("#usernameRadio");
  const inputSelectionHashtag = document.querySelector("#hashtagRadio");

  inputSearchTitle.addEventListener("keyup", (e) => {
    console.log(inputSearchTitle.value);
  });

  console.log(inputSearchTitle);
  console.log("Hei");
}
