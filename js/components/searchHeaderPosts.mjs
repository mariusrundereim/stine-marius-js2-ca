export function searchPosts(posts, query) {
  const test = posts.filter((post) => post.title.includes(query));
  console.log("Test", test);
  return test;
}
