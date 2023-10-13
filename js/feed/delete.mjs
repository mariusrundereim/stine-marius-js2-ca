import { baseURL } from "../env/env.mjs";
import { jwt } from "../src/utils/domElements.mjs";

async function deletePost(postId) {
  try {
    const response = await fetch(`${baseURL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: `${jwt}`,
      },
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

export { deletePost };
