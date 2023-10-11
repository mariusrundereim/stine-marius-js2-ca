import { baseURL } from "../../env/env.mjs";
import { jwt } from "../../src/utils/domElements.mjs";

export async function searchPostsByTag(tag) {
  try {
    const response = await fetch(`${baseURL}/posts?_tag=${tag}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error", error);
    return [];
  }
}

export function searchTest() {
  const inputSearchTitle = document.querySelector("#search-input-modal");
  const inputSelectionUsername = document.querySelector("#usernameRadio");
  const inputSelectionHashtag = document.querySelector("#hashtagRadio");

  inputSearchTitle.addEventListener("keyup", async (e) => {
    const searchValue = inputSearchTitle.value;
    const selectedOption = inputSelectionUsername.checked
      ? "Username"
      : "Hashtag";
    if (selectedOption === "Hashtag" && searchValue) {
      const results = await searchPostsByTag(searchValue);
      console.log(results);
    }
  });
}
