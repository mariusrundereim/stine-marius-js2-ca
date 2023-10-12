import { Header } from "./layout/Header.mjs";
import { searchModal } from "./global/search/searchfile.mjs";
import {
  searchBar,
  searchPostsByUsername,
  displayUsernames,
} from "./global/search/searchPosts.mjs";
import { fetchAllPosts } from "./components/fetchApiPosts.mjs";

//Header and Explore
const headerElement = Header();
const searchModalEle = searchModal();
document.body.prepend(headerElement);
document.body.prepend(searchModalEle);

// Calling
searchBar();
searchPostsByUsername();
//displayUsernames();

// Fetch Posts
fetchAllPosts();

// Sign out
const signOut = document.querySelector("#signOut");

signOut.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "./feed.html";
});
