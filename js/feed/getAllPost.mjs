import { baseURL } from "../env/env.mjs";
import {
  jwt,
  feedAllPosts,
  userName,
  defaultAvatarURL,
} from "../src/utils/domElements.mjs";
import { innerEdit } from "./editPost.mjs";
import { viewPost } from "./viewPost.mjs";

async function getAllPosts() {
  try {
    const response = await fetch(`${baseURL}/posts?_author=true`, {
      method: "GET",
      headers: {
        Authorization: `${jwt}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to get posts. Status: " + response.status);
    }
    const result = await response.json();
    //console.log(result);

    result.forEach(async (post) => {
      const authorName = post.author.name;

      const postImgContainer = document.querySelectorAll(".post-img-container");

      for (const container of postImgContainer) {
        const mediaUrl = container
          .querySelector(".post-img")
          .getAttribute("src");

        if (!mediaUrl) {
          container.classList.add("d-none");
        }
      }

      let avatar;

      if (!post.author.avatar) {
        avatar = defaultAvatarURL;
      } else {
        avatar = post.author.avatar;
      }

      const postId = post.id;

      let myPost = false;

      if (userName === authorName) {
        myPost = true;
      }

      const editContent = innerEdit(myPost, postId);

      const card = document.createElement("a");
      card.classList.add(
        "border",
        "border-dark",
        "border-opacity-25",
        "rounded",
        "mb-4",
        "text-decoration-none"
      );

      let viewPostInner = "";

      card.addEventListener("click", async (e) => {
        console.log(e.target);
        if (
          !e.target.classList.contains("edit-profile-btn") &&
          !e.target.closest(".edit-profile-btn") &&
          !e.target.classList.contains("edit-post-form") &&
          !e.target.closest(".edit-post-form")
        ) {
          viewPostInner = await viewPost(postId);
          console.log(viewPostInner);
          console.log(postId);
        }
      });
      card.setAttribute("href", `./post.html?id=${postId}`);

      card.innerHTML = `
        <div class="post-innlegg post-img-container col ratio ratio-1x1 bg-dark rounded-top">
          <img class="post-img" src="${post.media}" alt="">
        </div>
        <div class="col bg-white p-2">
          <!-- Post Image-->
          <div class="d-flex align-content-between justify-content-between">
            <!-- Post header -->
            <div class="col d-flex align-content-between justify-content-between">
              <div class="d-inline-flex">
                <img src="${avatar}" alt="mdo" width="32" height="32" class="rounded-circle me-2" />
                <h2 class="fs-5">${post.author.name}</h2>
              </div>
            </div>
          </div>

          <!-- Post Content Body-->
          <div class="text-break">
            <h5>${post.title}</h3>
            <p>${post.body}</p>
          </div>

          <!-- Post Tags-->
          <div class="d-inline-flex">
            <p class="pe-2 fw-medium">${post.tags
              .map((tag) => `<p class="pe-2 fw-medium">${tag}</p>`)
              .join("")}</p>
          </div>

         
        </div>
      `;

      card.append(editContent);

      feedAllPosts.append(card);
    });
  } catch (error) {
    console.log(error);
  }
}

export { getAllPosts };
