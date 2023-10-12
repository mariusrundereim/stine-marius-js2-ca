export function searchPosts(posts, query) {
  return posts.filter((post) => post.title.includes(query));
}
