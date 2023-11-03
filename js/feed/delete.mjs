import { baseURL } from "../env/env.mjs";
import { jwt } from "../src/utils/domElements.mjs";

/**
 * Deletes a post with the specified ID from the server.
 *
 * This function makes an asynchronous request to delete a post with the given ID
 * from the server using an authorization token.
 *
 * @async
 * @function
 * @param {number} postId - The ID of the post to be deleted.
 * @returns {Promise} A promise
 * @throws {Error} Throws an error.
 *
 * @example
 * // Delete a post by ID
 * const postIdToDelete = 123;
 * try {
 *   await deletePost(postIdToDelete);
 *   console.log(`Post with ID ${postIdToDelete} deleted successfully.`);
 * } catch (error) {
 *   console.error("Error deleting post:", error);
 * }
 */
async function deletePost(postId) {
  try {
    const response = await fetch(`${baseURL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: `${jwt}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete post. Status: " + response.status);
    }

    location.reload();

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export { deletePost };

// original code:
// async function deletePost(postId) {
//   try {
//     const response = await fetch(`${baseURL}/posts/${postId}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: `${jwt}`,
//       },
//     });
//     if (!response.ok) {
//       throw new Error("Failed to post. Status: " + response.status);
//     }

//     location.reload();

//     return response.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

// export { deletePost };
