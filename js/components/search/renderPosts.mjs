import { fetchAllPosts } from "../fetchApiPosts.mjs";
import { feedAllPosts } from "../../src/utils/domElements.mjs";

export async function renderPosts() {
  const post = await fetchAllPosts();
  const feedAllPosts = document.querySelector("#feeds-all-posts");
  post.forEach((post) => {
    const postElement = document.createElement("div");
  });
}
renderPosts();
