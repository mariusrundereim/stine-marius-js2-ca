import { baseURL } from "../env/env.mjs";
import { jwt } from "../src/utils/domElements.mjs";
import { deletePost } from "./delete.mjs";

async function editPost(
  modalEditTitle,
  modalBody,
  modalHashtag,
  modalImg,
  postId
) {
  try {
    const newModalPostTitle = modalEditTitle.value;
    const newModalPostText = modalBody.value;
    const newModalPostTags = modalHashtag.value;
    const newModalPostImg = modalImg.value;

    const splitTags = newModalPostTags.split(" ");

    const response = await fetch(`${baseURL}/posts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${jwt}`,
      },
      body: JSON.stringify({
        title: newModalPostTitle,
        body: newModalPostText,
        tags: splitTags,
        media: newModalPostImg,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to post. Status: " + response.status);
    }

    location.reload();

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

function innerEdit(myPost, postId) {
  const containerEdit = document.createElement("div");
  containerEdit.classList.add("col");
  containerEdit.setAttribute("data-post-id", postId);

  // containerEdit.addEventListener("click", () => {
  //   console.log(postId);
  // });

  if (!myPost) return containerEdit;

  const containerEditModal = document.createElement("div");
  containerEditModal.classList.add("modal-dialog");
  containerEditModal.innerHTML += `

  <div class="modal-content">
    <div class="modal-header">
      <input
        type="text"
        class="modal-edit-title fs-5 border-0"
        placeholder="New post......."
        id="editPostModalLabel"
      />
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <div class="m-3">
      <div class="col mb-3">
        <input
          type="text"
          class="modal-body w-100 border-0 text-wrap"
          placeholder="Write content here"
        />
      </div>
      <div class="col mb-3">
        <input
          type="text"
          class="modal-hashtag w-100 border-0 text-wrap"
          placeholder="#hashtag"
        />
      </div>

      <div class="d-flex flex-column">
        <label for="upload" class="mb-2 fw-medium"
          >Image</label
        >
        <input class="modal-img" type="text" placeholder="Insert URL" />
      </div>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="delete-btn btn btn-outline-danger"
      >
        Delete post
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
      >
        Close
      </button>

      <button type="button" class="edit-send btn btn-primary">
        Send
      </button>
    </div>
  </div>

  `;

  containerEdit.innerHTML += `


    <!-- Button trigger modal Test -->
    <button
    id="edit-profile-btn"
      type="button"
      class="btn btn-outline-secondary w-100 text-center  edit-profile-btn"
      data-bs-toggle="modal"
      data-bs-target="#editPostModal"
      data-post-id="${postId}"

    >
      Edit
    </button>
    <!-- Modal -->
    <div
      class=" modal fade"
      id="editPostModal"
      tabindex="-1"
      aria-labelledby="editPostModalLabel"
      aria-hidden="true"
    >
    ${containerEditModal.outerHTML}

    </div>
`;

  const modalEditTitle = containerEdit.querySelector(".modal-edit-title");
  const modalBody = containerEdit.querySelector(".modal-body");
  const modalHashtag = containerEdit.querySelector(".modal-hashtag");
  const modalImg = containerEdit.querySelector(".modal-img");
  const editSend = containerEdit.querySelector(".edit-send");
  const deleteBtn = containerEdit.querySelector(".delete-btn");

  console.log(containerEditModal);
  console.log(modalBody);

  document.body.addEventListener("click", (event) => {
    if (event.target === editSend) {
      console.log(postId);
      console.log("send");
      editPost(modalEditTitle, modalBody, modalHashtag, modalImg, postId);
    } else if (event.target === deleteBtn) {
      console.log(postId);
      console.log("delete");
      deletePost(postId);
    }
  });

  return containerEdit;
}

export { innerEdit };
