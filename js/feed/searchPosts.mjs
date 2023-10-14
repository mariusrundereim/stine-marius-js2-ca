export function searchPosts(posts, query) {
  const filteredPosts = posts.filter((post) => post && post.includes(query));

  console.log("Filtered titles:", filteredPosts);
  return filteredPosts;
}
