import { Header } from "./layout/Header.mjs";
import { fetchAllPosts } from "./components/fetchApiPosts.mjs";
import { searchMain } from "./components/search/search.mjs";
import {
  renderResults,
  createPostElement,
} from "./components/search/getSearchPosts.mjs";

//Header and Explore
const headerElement = Header();
document.body.prepend(headerElement);

document.addEventListener("DOMContentLoaded", async function () {
  try {
    const searchQuery = new URLSearchParams(location.search).get("search");
    const posts = await fetchAllPosts();

    const searchHeader = document.querySelector("#searchHeader");
    if (searchQuery) {
      searchHeader.value = searchQuery;
      const searchResults = searchMain(posts, searchQuery);
      console.log("Search results:", searchResults);
      renderResults(searchResults); // Use the correct function name here
    }

    searchHeader.addEventListener("input", async (e) => {
      const searchQuery = searchHeader.value.trim().toLowerCase();
      const currentUrl = new URL(location.href);
      currentUrl.searchParams.set("search", searchQuery);
      history.pushState({}, "", currentUrl.href);

      const searchResults = searchMain(posts, searchQuery);
      console.log("Search Results:", searchResults);
      renderResults(searchResults); // Use the correct function name here
    });
  } catch (error) {
    console.error("Error", error);
  }
});

fetchAllPosts();

// Sign out
const signOut = document.querySelector("#signOut");

signOut.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "./feed.html";
});
