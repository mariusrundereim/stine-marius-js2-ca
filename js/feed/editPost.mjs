import { baseURL } from "../env/env.mjs";
import { userName } from "../src/utils/domElements.mjs";
import { deletePost } from "./delete.mjs";

async function editPost(
  modalTitle,
  modalContent,
  modalHashtag,
  modalImg,
  postId
) {
  try {
    const newPostTitle = modalTitle.value;
    const newPostText = modalContent.value;
    const newPostTags = modalHashtag.value;
    const newPostImg = modalImg.value;
    //
    const splitTags = newPostTags.value.split(" ");
    console.log(splitTags);
    const response = await fetch(`${baseURL}/posts/${postId}`, {
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

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

function innerEdit(myPost, postId) {
  const editBtn = `


    <!-- Button trigger modal Test -->
    <button
    id="edit-profile-btn"
      type="button"
      class="btn btn-outline-secondary w-100 text-center  edit-profile-btn"
      data-bs-toggle="modal"
      data-bs-target="#editPostModal"

    >
      Edit
    </button>
    <!-- Modal -->
    <div
      class="is-open modal fade"
      id="editPostModal"
      tabindex="-1"
      aria-labelledby="editPostModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <input
              type="text"
              class="modal-title fs-5 border-0"
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
          <div class="modal-body">
            <div class="col mb-3">
              <input
                type="text"
                class="modal-content w-100 border-0 text-wrap"
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
      </div>
    </div>
`;

  const modalTitle = document.querySelector(".modal-title");
  const modalContent = document.querySelector(".modal-content");
  const modalHashtag = document.querySelector(".modal-hashtag");
  const modalImg = document.querySelector(".modal-img");
  const editSend = document.querySelector(".edit-send");
  const deleteBtn = document.querySelector(".delete-btn");

  //console.log(postId);
  // send.addEventListener("click", () => {
  //   console.log("noe");
  //   editPost(modalTitle, modalContent, modalHashtag, modalImg, postId);
  // });

  // deleteBtn.addEventListener("click", () => {
  //   deletePost(postId);
  // });

  const editProfileBtns = document.querySelectorAll(".edit-profile-btn");
  //console.log(editProfileBtns);

  //
  editProfileBtns.forEach((editProfileBtn) => {
    //console.log(editProfileBtn);
    editProfileBtn.addEventListener("click", () => {
      console.log("noe");
    });
  });
  //

  // function edit() {
  //   editSend.addEventListener("click", () => {
  //     console.log("editing");
  //   });
  // }

  return myPost ? editBtn : "";
}

export { innerEdit };
