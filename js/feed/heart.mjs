import { baseURL } from "../env/env.mjs";
import { jwt } from "../src/utils/domElements.mjs";

async function reactHeart(postId, postOverlay) {
  try {
    const response = await fetch(`${baseURL}/posts/${postId}/react/❤️`, {
      method: "PUT",
      headers: {
        Authorization: `${jwt}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to get posts. Status: " + response.status);
    }
    const result = await response.json();
    console.log(result);
    console.log(result.count);

    // postOverlay.addEventListener("click", (e) => {
    //   if (e.target.classList.contains("bi") && e.target.closest(".bi")) {
    //     e.target.innerHTML = String(result.count);
    //   }
    // });
  } catch (error) {
    console.log(error);
  }
}

export { reactHeart };
