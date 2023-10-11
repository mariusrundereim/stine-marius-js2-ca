import { baseURL } from "../../env/env.mjs";
import { jwt } from "../../src/utils/domElements.mjs";

// export async function searchPostsByTag(tag) {
//   try {
//     const response = await fetch(`${baseURL}/posts?_tag=${tag}`);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error", error);
//     return [];
//   }
// }

export async function searchPostsByUsername(username) {
  try {
    const response = await fetch(`${baseURL}/profiles/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${jwt}`,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    displayUsernames(data.name);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function searchBar() {
  const inputSearchTitle = document.querySelector("#search-input-modal");
  const inputSelectionUsername = document.querySelector("#usernameRadio");

  inputSearchTitle.addEventListener("keyup", async () => {
    const searchValue = inputSearchTitle.value;
    const selectedOption = inputSelectionUsername.checked
      ? "Username"
      : "Hashtag";

    if (selectedOption === "Username" && searchValue) {
      const results = await searchPostsByUsername(searchValue);
      if (results !== null) {
        console.log("Username:", results);
      } else {
        console.log("No results found for the provided username.");
      }
    }
  });
}

export function displayUsernames(username) {
  const displayContainer = document.querySelector("#searchResultContainer");

  const usernameTag = document.createElement("div");
  const paragraph = document.createElement("p");

  paragraph.textContent = username;
  usernameTag.appendChild(paragraph);
  displayContainer.appendChild(usernameTag);

  console.log(displayContainer);
}
