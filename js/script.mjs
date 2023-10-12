import { Header } from "./layout/Header.mjs";
import { searchModal } from "./global/search/searchfile.mjs";
import {
  searchBar,
  searchPostsByUsername,
  displayUsernames,
} from "./global/search/searchPosts.mjs";
import { searchPosts } from "./components/searchHeaderPosts.mjs";

const headerElement = Header();
const searchModalEle = searchModal();

document.body.prepend(headerElement);
document.body.prepend(searchModalEle);
searchBar();
searchPostsByUsername();
displayUsernames();
const signOut = document.querySelector("#signOut");

signOut.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "./feed.html";
});
