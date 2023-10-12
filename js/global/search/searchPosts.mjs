import { baseURL } from "../../env/env.mjs";
import { jwt } from "../../src/utils/domElements.mjs";

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
    if (data.name) {
      displayUsernames(data.name);
    } else {
      displayNotFoundMessage();
    }

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function searchBar() {
  const inputSearchTitle = document.querySelector("#search-input-modal");

  inputSearchTitle.addEventListener("keyup", async () => {
    const searchValue = inputSearchTitle.value;
    if (searchValue) {
      const results = await searchPostsByUsername(searchValue);
      if (results !== null) {
        console.log("Username:", results);
      } else {
        console.log("No results found for the provided username.");
      }
    }
  });
}

export function displayUsernames(username, avatar) {
  const displayContainer = document.querySelector("#searchResultContainer");

  if (username) {
    displayContainer.innerHTML = "";
    const usernameTag = document.createElement("a");
    usernameTag.classList.add("border");
    usernameTag.classList.add("border-1");
    usernameTag.setAttribute(
      "href",
      `${baseURL}/profile/index.html?name=${username}`
    );

    const profileAvatar = document.createElement("img");
    profileAvatar.src = avatar;

    const paragraph = document.createElement("p");
    paragraph.textContent = username;
    usernameTag.appendChild(paragraph);

    displayContainer.appendChild(usernameTag);
  } else {
    displayContainer.innerHTML = "Username is not found";
  }
}
