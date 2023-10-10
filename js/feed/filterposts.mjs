import { baseURL } from "../env/env.mjs";
import { jwt } from "../src/utils/domElements.mjs";

export async function getFollowersPosts() {
  try {
    const response = await fetch(`${baseURL}/posts/following`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${jwt}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to get posts. Status: " + response.status);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
//getFollowersPosts();
