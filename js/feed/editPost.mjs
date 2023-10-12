import { baseURL } from "../env/env.mjs";
import { userName, jwt } from "../src/utils/domElements.mjs";
import { deletePost } from "./delete.mjs";

async function editPost(
  modalEditTitle,
  modalContent,
  modalHashtag,
  modalImg,
  postId
) {
  try {
    const newPostTitle = modalEditTitle.value;
    const newPostText = modalContent.value;
    const newPostTags = modalHashtag.value;
    const newPostImg = modalImg.value;
    //
    const splitTags = newPostTags.split(" ");
    //console.log(splitTags);
    const response = await fetch(`${baseURL}/posts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${jwt}`,
      },
      body: JSON.stringify({
        title: newPostTitle,
        body: newPostText,
        tags: splitTags,
        media: newPostImg,
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
  const containerEdit = document.createElement("div");
  containerEdit.classList.add("col");
  containerEdit.setAttribute("data-post-id", postId);
  //console.log(postId);

  if (!myPost) return containerEdit;

  // const containerEdit = document.createElement("div");
  // containerEdit.classList.add("col");

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
      <div class="modal-dialog">
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

  const modalEditTitle = document.querySelector(".modal-edit-title");
  const modalContent = document.querySelector(".modal-content");
  const modalHashtag = document.querySelector(".modal-hashtag");
  const modalImg = document.querySelector(".modal-img");
  const editSend = document.querySelectorAll(".edit-send");
  const deleteBtn = document.querySelectorAll(".delete-btn");
  console.log(deleteBtn);
  containerEdit.addEventListener("click", () => {
    console.log(postId);
  });

  return containerEdit;

  //console.log(modalContent);

  // editSend.forEach((send) => {
  //   console.log(send);
  //   send.addEventListener("click", () => {
  //     console.log("noe");
  //     //editPost(modalTitle, modalContent, modalHashtag, modalImg, postId);
  //   });
  // });

  // Append the modal HTML to the document
  // document.body.insertAdjacentHTML("beforeend", editBtn);

  // //console.log(postId);

  // // Add a click event listener to the document body
  // document.body.addEventListener("click", (event) => {
  //   // Check if the clicked element has the class "edit-send" or "delete-btn"
  //   if (event.target.classList.contains("edit-send")) {
  //     // Get the post ID from the data attribute
  //     const clickedPostId = event.target.dataset.postId;
  //     console.log(`Edit button clicked for post with ID: ${clickedPostId}`);
  //     // You can call your editPost function here with the appropriate parameters
  //   } else if (event.target.classList.contains("delete-btn")) {
  //     // Handle delete button click
  //   }
  // });

  ///////

  // document.body.insertAdjacentHTML("beforeend", editBtn);

  //let clickedPostId; // Declare the variable at a higher scope

  // document.body.addEventListener("click", (event) => {
  //   if (event.target.classList.contains("edit-profile-btn")) {
  //     clickedPostId = event.target.dataset.postId;
  //     console.log(`Edit button clicked for post with ID: ${clickedPostId}`);
  //   }
  //   // } else if (event.target.classList.contains("delete-btn") && clickedPostId === ) {
  //   //   console.log(`Delete button clicked for post with ID: ${clickedPostId}`);
  //   //   deletePost(clickedPostId);
  //   // } else if (event.target.classList.contains("edit-send")) {
  //   //   console.log(`Send button clicked for post with ID: ${clickedPostId}`);
  //   //   editPost(
  //   //     modalEditTitle,
  //   //     modalContent,
  //   //     modalHashtag,
  //   //     modalImg,
  //   //     clickedPostId
  //   //   );
  //   // }
  // });
  // document.body.addEventListener("click", (event) => {
  //   if (event.target.classList.contains("edit-send")) {
  //     const clickedPostId = event.target.dataset.postId;
  //     console.log(`Edit button clicked for post with ID: ${clickedPostId}`);
  //   } else if (event.target.classList.contains("delete-btn")) {
  //     const clickedPostId = event.target.dataset.postId;
  //     console.log(`Edit button clicked for post with ID: ${clickedPostId}`);
  //   } else if (event.target.classList.contains("edit-profile-btn")) {
  //     const clickedPostId = event.target.dataset.postId;
  //     console.log(`Edit button clicked for post with ID: ${clickedPostId}`);
  //   }
  // });
  ////////

  //console.log(postId);
  // editSend.addEventListener("click", () => {
  //   console.log("noe");
  //   editPost(modalTitle, modalContent, modalHashtag, modalImg, postId);
  // });

  // deleteBtn.addEventListener("click", () => {
  //   deletePost(postId);
  // });

  // const editProfileBtns = document.querySelectorAll(".edit-profile-btn");
  // //console.log(editProfileBtns);

  // //
  // editProfileBtns.forEach((editProfileBtn) => {
  //   //console.log(editProfileBtn);
  //   editProfileBtn.addEventListener("click", () => {
  //     console.log("noe");
  //   });
  // });
  // //

  // return myPost ? editBtn : "";
}

export { innerEdit };
