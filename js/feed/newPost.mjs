import { baseURL } from "../env/env.mjs";
import {
  newPostTitle,
  newPostText,
  newPostTags,
  newPostImg,
  jwt,
} from "../src/utils/domElements.mjs";

async function newPost() {
  try {
    const { value: title } = newPostTitle;
    const { value: body } = newPostText;
    const { value: media } = newPostImg;
    const splitTags = newPostTags.value.split(" ");
    console.log(splitTags);
    const response = await fetch(`${baseURL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${jwt}`,
      },
      body: JSON.stringify({
        title,
        body,
        tags: splitTags,
        media,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to post. Status: " + response.status);
    }
    location.reload();

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export { newPost };
