import { baseURL } from "../env/env.mjs";
import { jwt, feedAllPosts, userName } from "../src/utils/domElements.mjs";

const editProfileBtn = document.querySelector("#edit-profile-btn");

async function getAllPosts() {
  try {
    const response = await fetch(`${baseURL}/posts?_author=true`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${jwt}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to get posts. Status: " + response.status);
    }
    const result = await response.json();
    console.log(result);

    result.forEach((post) => {
      // console.log(userName);
      // console.log(post.author.name);
      // if (userName === post.author.name) {
      //   //editProfileBtn.classList.remove("d-none");
      //   console.log(userName);
      //   console.log(post.author.name);
      // }

      feedAllPosts.innerHTML += `
      
      <div class="border border-dark border-opacity-25 rounded mb-4">
      <div class="col ratio ratio-1x1 bg-dark rounded-top">
      <img src="${post.media}" alt=""></div>
      <div class="col bg-white p-2 >
        <!-- Post Image-->
        <div
          class="d-flex align-content-between justify-content-between"
        >
          <!-- Post header -->
          <div
            class="col d-flex align-content-between justify-content-between"
          >
            <div class="d-inline-flex">
              <img
                src="${post.author.avatar}"
                alt="mdo"
                width="32"
                height="32"
                class="rounded-circle me-2"
              />
              <h2 class="fs-5">${post.author.name}</h2>
            </div>
            <div
              class="d-flex align-content-center justify-content-center"
            >
              <!-- Edit post-->
              <div class="col">
                <!-- Button trigger modal Test -->
                <button
                id="edit-profile-btn"
                  type="button"
                  class="btn btn-outline-secondary w-100 text-center "
                  data-bs-toggle="modal"
                  data-bs-target="#editPostModal"
                >
                  Edit
                </button>
                <!-- Modal -->
                <div
                  class="modal fade"
                  id="editPostModal"
                  tabindex="-1"
                  aria-labelledby="edit-post-title"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <input
                          type="text"
                          class="modal-title fs-5 border-0 edit-post-title"
                          placeholder="New post......."
                          id="edit-post-title"
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
                            class="w-100 border-0 text-wrap"
                            placeholder="Write content here"
                          />
                        </div>
                        <div class="col mb-3">
                          <input
                            type="text"
                            class="w-100 border-0 text-wrap"
                            placeholder="#hashtag"
                          />
                        </div>

                        <div class="d-flex flex-column">
                          <label for="upload" class="mb-2 fw-medium"
                            >Image</label
                          >
                          <input type="text" placeholder="Insert URL" />
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-outline-danger"
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

                        <button type="button" class="btn btn-primary">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <i class="bi bi-heart ps-2 pe-2"></i>
            </div>
          </div>
        </div>

        <!-- Post Content Body-->
        <div>
          <p>
${post.body}
          </p>
        </div>

        <!-- Post Tags-->
        <div class="d-inline-flex">
          <p class="pe-2 fw-medium">${post.tags
            .map((tag) => `<p class="pe-2 fw-medium">${tag}</p>`)
            .join("")}</p>

        </div>
        <!-- Post Comments-->
        <div class="d-flex m-0">
          <button
            type="button"
            class="btn btn-secondary me-2 flex-fill"
          >
            Comment
          </button>
        </div>
      </div>
    </div>
    `;
    });
  } catch (error) {
    console.log(error);
  }
}
export { getAllPosts };
