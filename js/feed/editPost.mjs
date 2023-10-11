import { baseURL } from "../env/env.mjs";

async function editPost() {
  try {
    const splitTags = newPostTags.value.split(" ");
    console.log(splitTags);
    const response = await fetch(`${baseURL}/posts/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${jwt}`,
      },
      body: JSON.stringify({
        title: newPostTitle.value,
        body: newPostText.value,
        tags: splitTags,
        media: newPostImg.value,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to post. Status: " + response.status);
    }

    // if (
    //   newPostTitle.value &&
    //   newPostImg.value &&
    //   newPostTags.value &&
    //   newPostText.value
    // ) {
    //   document.querySelector("#new-post-modal").classList.remove("show");
    //   document.querySelector("body").classList.remove("modal-open");
    //   const mdbackdrop = document.querySelector(".modal-backdrop");
    //   mdbackdrop.classList.remove("modal-backdrop");
    // } else {
    //   alert("Must fill all values");
    // }

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export { editPost };
