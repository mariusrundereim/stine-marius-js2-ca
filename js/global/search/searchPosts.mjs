import { baseURL } from "../../env/env.mjs";
import { jwt } from "../../src/utils/domElements.mjs";

export function searchTest() {
  const inputSearchTitle = document.querySelector("#search-input-modal");
  const inputSelectionUsername = document.querySelector("#usernameRadio");
  const inputSelectionHashtag = document.querySelector("#hashtagRadio");

  inputSearchTitle.addEventListener("keyup", (e) => {
    const searchValue = inputSearchTitle.value;
    const selectedOption = inputSelectionUsername.checked
      ? "Username"
      : "Hashtag";
    console.log(`Search ${searchValue} with option ${selectOption}`);
  });

  inputSelectionUsername.addEventListener("change", searchOptionTest);
  inputSelectionHashtag.addEventListener("change", searchOptionTest);
}

export function searchOptionTest(e) {
  const selectOption = e.target.value;

  if (selectOption === "option1") {
    console.log("option1 selected");
  } else if (selectOption === "option2") {
    console.log("opt2 selected");
  }
}

export function displaySelection() {
  const displayElements = document.querySelector(".elements-container");
}
