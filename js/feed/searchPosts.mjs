import { fetchAllPosts } from "../components/fetchApiPosts.mjs";

export function searchPosts(posts, query) {
  //const filteredPosts = posts.filter((post) => post.title.includes(query));
  //const filteredTitles = posts.filter((title) => title.includes(query));
  const filteredPosts = posts.filter((post) => post.title.includes(query));
  console.log("Filtered titles:", filteredPosts);
  return filteredPosts;
}
