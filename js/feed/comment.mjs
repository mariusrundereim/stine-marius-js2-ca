import { baseURL } from "../env/env.mjs";
import { jwt, commentInput } from "../src/utils/domElements.mjs";

async function newComment(id) {
  try {
    const response = await fetch(`${baseURL}/posts/${id}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${jwt}`,
      },
      body: JSON.stringify({
        body: commentInput.value,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to post. Status: " + response.status);
    }
    location.reload();

    //   return response.json();
  } catch (error) {
    console.log(error);
  }
}

export { newComment };
