import { Header } from "./layout/Header.mjs";

import { fetchAllPosts } from "./components/fetchApiPosts.mjs";
import { searchMain } from "./feed/search.mjs";

//Header and Explore
const headerElement = Header();
document.body.prepend(headerElement);

document.addEventListener("DOMContentLoaded", async function () {
  try {
    // Fetch and display all posts when the page initially loads
    const posts = await fetchAllPosts();
    if (posts && posts.length > 0) {
      console.log("All Posts:", posts);
    } else {
      console.log("No posts available.");
    }

    // Add an event listener to the search input to console.log search results
    const searchHeader = document.querySelector("#searchHeader");
    searchHeader.addEventListener("input", async (e) => {
      const searchQuery = searchHeader.value.trim().toLowerCase();
      const searchResults = searchMain(posts, searchQuery); // Use searchMain to filter posts
      console.log("Search Results:", searchResults);
    });
  } catch (error) {
    console.error("Error", error);
  }
});

// async function main() {
//   try {
//     const posts = await fetchAllPosts();
//     const searchQuery = document.querySelector("#searchHeader").value;
//     await searchMain(posts, searchQuery);
//   } catch (error) {
//     console.error("Error", error);
//   }
// }
// main();
// Fetch Posts
fetchAllPosts();

// Sign out
const signOut = document.querySelector("#signOut");

signOut.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "./feed.html";
});
