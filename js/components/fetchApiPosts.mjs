import { baseURL } from "../env/env.mjs";
import { jwt } from "../src/utils/domElements.mjs";

export async function fetchAllPosts() {
  const apiUrl = `${baseURL}`;
  try {
    const response = await fetch(`${apiUrl}/posts`, {
      headers: {
        Authorization: `${jwt}`,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // data.forEach((post) => {
    //   console.log(post.title);
    //   return post.title;
    // });
    const postTitles = data.map((post) => post.title);
    console.log(postTitles);
    return postTitles;
    //return data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
