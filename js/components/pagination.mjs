import { baseURL } from "../env/env.mjs";

export async function fetchPostsPage(limit, offset) {
  const apiUrlPagination = `${baseURL}?limit=${limit}&offset=${offset}`;

  try {
    const response = await fetch(apiUrlPagination);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching posts: ", error);
    return [];
  }
}

export function nextPage(offset, limit) {
  offset += limit;
  return offset;
}

export function prevPage(offset, limit) {
  if (offset >= limit) {
    offset -= limit;
  }
  return offset;
}
