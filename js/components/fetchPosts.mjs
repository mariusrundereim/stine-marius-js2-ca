import { baseURL } from "../env/env.mjs";

export async function fetchAllPosts() {
  const apiUrl = `${baseURL}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
