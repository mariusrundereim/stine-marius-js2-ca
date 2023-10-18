import { baseURL } from "../env/env.mjs";
import {
  jwt,
  defaultAvatarURL,
  commentSubmit,
} from "../src/utils/domElements.mjs";

import { reactHeart } from "./heart.mjs";

import { newComment } from "./comment.mjs";
//import { getProfile } from "../profile/profile.mjs";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let postId = urlParams.get("id");

viewPost();

export default async function viewPost() {
  console.log(postId);

  try {
    const response = await fetch(
      `${baseURL}/posts/${postId}?_author=true&_comments=true`,
      {
        method: "GET",
        headers: {
          Authorization: `${jwt}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to get posts. Status: " + response.status);
    }
    const result = await response.json();
    console.log(result);

    commentSubmit.addEventListener("click", (e) => {
      e.preventDefault();

      newComment(postId);
    });

    //

    let avatar;

    if (!result.author.avatar) {
      avatar = defaultAvatarURL;
    } else {
      avatar = result.author.avatar;
    }

    const postOverlay = document.querySelector("#post-overlay");

    postOverlay.classList.add(
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );

    postOverlay.addEventListener("click", (e) => {
      if (e.target.classList.contains("bi") && e.target.closest(".bi")) {
        e.target.classList.add("bi-heart-fill");
        e.target.classList.remove("bi-heart");

        reactHeart(postId, postOverlay);
      }
    });

    postOverlay.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("person") &&
        e.target.closest(".person")
      ) {
        console.log(result.author.name);

        localStorage.setItem("otherPersonUserName", result.author.name);
        window.location.href = "/profile/index.html";
      }
    });

    const allComments = result.comments;
    console.log(allComments);

    let innerComment = "";

    allComments.forEach((comment) => {
      console.log(comment.body);
      console.log(comment);

      // Concatenate each comment to innerComment
      innerComment += `<p>${comment.body}</p>`;
    });

    postOverlay.innerHTML += `
    
    <div class="m-5 d-flex flex-column border border-dark border-opacity-25 rounded">

        <div class="post-img-container-new col ratio ratio-1x1 bg-dark rounded-top">
        <img class="post-img" src="${result.media}" alt="">
      </div>
      <div class="col bg-white p-2">
        <!-- Post Image-->
        <div class="d-flex align-content-between justify-content-between">
          <!-- Post header -->
          <div class="col d-flex align-content-between justify-content-between">
            <a href="/profile/index.html?user=${
              result.author.name
            }" class="d-inline-flex ">
              <img src="${avatar}" alt="mdo" width="32" height="32" class="rounded-circle me-2 person" />
              <h2 class="fs-5 person">${result.author.name}</h2>
            </a>
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

        <!-- comments-->

        <div>
        <h6>Comments</h6>
        ${innerComment}
        </div>
      </div>
      </div>
        `;
    if (!result.media) {
      const viewImg = document.querySelector(".post-img-container-new");
      console.log(viewImg);
      viewImg.classList.add("d-none");
    }
  } catch (error) {
    console.log(error);
  }
}
