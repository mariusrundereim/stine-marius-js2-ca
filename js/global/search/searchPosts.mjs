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
  let timeout;

  inputSearchTitle.addEventListener("keyup", () => {
    clearTimeout(timeout); // Clear any previous timeouts

    // Get the search value and trim it
    const searchValue = inputSearchTitle.value.trim();

    if (searchValue.length >= 3) {
      // Adjust the minimum length as needed
      // Set a new timeout to make the API call after 500 milliseconds of inactivity
      timeout = setTimeout(async () => {
        const results = await searchPostsByUsername(searchValue);
        if (results !== null) {
          console.log("Username:", results);
        } else {
          console.log("No results found for the provided username.");
        }
      }, 500); // You can adjust the delay (in milliseconds) as needed
    } else {
      // Handle the case where searchValue is too short or empty
      console.log("Please enter at least 3 characters to search.");
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
