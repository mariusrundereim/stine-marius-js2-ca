import { baseURL } from "../env/env.mjs";
import { jwt, defaultAvatarURL } from "../src/utils/domElements.mjs";
import { createPostElement } from "../components/search/getSearchPosts.mjs";

async function viewPost(postId) {
  try {
    const response = await fetch(`${baseURL}/posts/${postId}?_author=true`, {
      method: "GET",
      headers: {
        Authorization: `${jwt}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to get posts. Status: " + response.status);
    }
    const result = await response.json();
    console.log(result);

    let avatar;

    if (!result.author.avatar) {
      avatar = defaultAvatarURL;
    } else {
      avatar = result.author.avatar;
    }

    const postOverlay = document.querySelector("#post-overlay");
    postOverlay.classList.remove("d-none");
    postOverlay.classList.add(
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );

    window.onclick = function (event) {
      if (event.target === postOverlay) {
        postOverlay.classList.add("d-none");
      }
    };

    const viewModalInner = document.createElement("div");
    viewModalInner.classList.add("modal-footer");
    postOverlay.innerHTML = "";
    postOverlay.innerHTML += `
    <div class="m-5 d-flex flex-column">

        <div class="post-img-container-new col ratio ratio-1x1 bg-dark rounded-top">
        <img class="post-img" src="${result.media}" alt="">
      </div>
      <div class="col bg-white p-2">
        <!-- Post Image-->
        <div class="d-flex align-content-between justify-content-between">
          <!-- Post header -->
          <div class="col d-flex align-content-between justify-content-between">
            <div class="d-inline-flex">
              <img src="${avatar}" alt="mdo" width="32" height="32" class="rounded-circle me-2" />
              <h2 class="fs-5">${result.author.name} ${result.id}</h2>
            </div>
            <div class="d-flex align-content-center justify-content-center">
              <i class="bi bi-heart ps-2 pe-2"></i>
            </div>
          </div>
        </div>

        <!-- Post Content Body-->
        <div class="text-break">
          <h5>${result.title}</h3>
          <p>${result.body}</p>
        </div>

        <!-- Post Tags-->
        <div class="d-inline-flex">
          <p class="pe-2 fw-medium">${result.tags
            .map((tag) => `<p class="pe-2 fw-medium">${tag}</p>`)
            .join("")}</p>
        </div>
      </div>
      </div>
        `;
    if (!result.media) {
      const viewImg = document.querySelector(".post-img-container-new");
      console.log(viewImg);
      viewImg.classList.add("d-none");
    }
    postOverlay.appendChild(postElement);
    return viewModalInner;
  } catch (error) {
    console.log(error);
  }
}

export { viewPost };
