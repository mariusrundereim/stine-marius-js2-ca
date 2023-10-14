import { searchPosts } from "./searchPosts.mjs";

export function searchMain(posts, searchQuery) {
  const searchResult = searchPosts(posts, searchQuery);
  console.log("Search results:", searchResult);
}
//searchMain(posts);
