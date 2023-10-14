export function searchPosts(posts, query) {
  const filteredPosts = posts.filter(
    (post) => post.title && post.title.includes(query)
  );
  console.log(query);
  console.log("Filtered titles:", filteredPosts);
  return filteredPosts;
}
