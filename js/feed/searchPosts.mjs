import { baseURL } from "../env/env.mjs";
import { jwt, feedAllPosts } from "../src/utils/domElements.mjs";

export function searchHeader() {
  const searchHeader = document.querySelector("#searchHeader");
  console.log(searchHeader);
  searchHeader.addEventListener("keyup", () => {
    const tags = searchHeader.value;
    console.log(searchHeader.value);
    searchPostByTags(tags);
  });
}

// export async function searchPostByTags(tag) {
//   try {
//     const response = await fetch(`${baseURL}/posts?_tag=${tag}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `${jwt}`,
//       },
//     });
//     const result = await response.json();
//     renderMatchingPosts(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// export function renderMatchingPosts(posts) {
//   const allPosts = document.querySelector("#feeds-all-posts");

//   allPosts.innerHTML = "";

//   posts.forEach((post) => {
//     const postElement = document.createElement("div");
//     postElement.classList.add("post"); // Add appropriate CSS classes

//     // Create and append the HTML structure for each post
//     postElement.innerHTML = `
//       <!-- Your post HTML structure here -->
//       <h2>${post.author.name}</h2>
//       <!-- Add more post details as needed -->
//     `;

//     allPosts.appendChild(postElement);
//   });
// }
