import { baseURL } from "../env/env.mjs";
import {
  newPostTitle,
  newPostText,
  newPostTags,
  newPostImg,
  sendNewPost,
} from "../src/utils/domElements.mjs";

async function newPost() {
  try {
    console.log(localStorage.getItem("jwt"));
    const jwt = localStorage.getItem("jwt");
    const response = await fetch(`${baseURL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${jwt}`,
      },
      body: JSON.stringify({
        title: newPostTitle.value,
        body: newPostText.value,
        tags: [newPostTags.value],
        media: newPostImg.value,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to post. Status: " + response.status);
    }

    if (
      newPostTitle.value &&
      newPostImg.value &&
      newPostTags.value &&
      newPostText.value
    ) {
      document.querySelector("#new-post-modal").classList.remove("show");
      document.querySelector("body").classList.remove("modal-open");
      const mdbackdrop = document.querySelector(".modal-backdrop");
      mdbackdrop.classList.remove("modal-backdrop");
    } else {
      alert("Must fill all values");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export { newPost };
