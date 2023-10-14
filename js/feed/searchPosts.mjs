export function searchPosts(posts, query) {
  const filteredPosts = posts.filter((post) => post.title.includes(query));
  console.log("Hello:", filteredPosts);
  return filteredPosts;
}
