import { Header } from "./layout/Header.mjs";
import { searchModal } from "./global/search/searchfile.mjs";
import {
  searchTest,
  searchPostsByTag,
  displaySelection,
} from "./global/search/searchPosts.mjs";

const headerElement = Header();
const searchModalEle = searchModal();

document.body.prepend(headerElement);
document.body.prepend(searchModalEle);
searchTest();
//searchOptionTest();
searchPostsByTag();
displaySelection();

const signOut = document.querySelector("#signOut");

signOut.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "./feed.html";
});
