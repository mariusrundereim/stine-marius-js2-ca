import { baseURL } from "../env/env.mjs";
import {
  jwt,
  feedAllPosts,
  userName,
  defaultAvatarURL,
} from "../src/utils/domElements.mjs";
import { innerEdit } from "./editPost.mjs";

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
      const authorName = post.author.name;

      // const editProfileBtns = document.querySelectorAll(
      //   `.edit-profile-btn[data-author-name="${authorName}"]`
      // );

      // //console.log(editProfileBtns);

      // editProfileBtns.forEach((editProfileBtn) => {
      //   if (userName === authorName) {
      //     editProfileBtn.classList.remove("d-none");
      //   }
      // });

      const postImg = document.querySelectorAll(".post-img");
      const postImgContainer = document.querySelectorAll(".post-img-container");

      postImgContainer.forEach((container, index) => {
        const post = result[index];

        const mediaUrl = container
          .querySelector(".post-img")
          .getAttribute("src");

        if (!mediaUrl) {
          //console.log("no img");
          container.classList.add("d-none");
        }
      });

      // const editContainer = document.querySelectorAll(".edit-container");

      let avatar;

      if (!post.author.avatar) {
        avatar = defaultAvatarURL;
      } else {
        avatar = post.author.avatar;
      }

      const postId = post.id;
      //console.log(postId);

      // const hearts = document.querySelectorAll(".bi-heart");

      // hearts.forEach((heart) => {
      //   heart.addEventListener("click", (e) => {
      //     e.preventDefault();
      //     console.log("heart clicked");
      //     // Add your logic here for what should happen when a heart is clicked
      //   });
      // });

      let myPost = false;

      if (userName === authorName) {
        myPost = true;
      }

      const editContent = innerEdit(myPost, postId);

      //console.log(innerEdit(myPost));

      //console.log(editContent);

      // <div  class="border border-dark border-opacity-25 rounded mb-4 test" >
      const card = document.createElement("div");
      card.innerHTML = `
      
      
      <div  class="post-img-container col ratio ratio-1x1 bg-dark rounded-top">
      <img class="post-img" src="${post.media}" alt=""></div>
      <div class="col bg-white p-2">
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
                src="${avatar}"
                alt="mdo"
                width="32"
                height="32"
                class="rounded-circle me-2"
              />
              <h2 class="fs-5">${post.author.name} ${post.id}</h2>
            </div>
            <div
              class="d-flex align-content-center justify-content-center"
            >


              <i class="bi bi-heart ps-2 pe-2"></i>
            </div>
          </div>
        </div>

        <!-- Post Content Body-->
        <div class="text-break">
        <h5>${post.title}</h3>
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
    `;

      card.append(editContent);

      feedAllPosts.append(card);
    });
  } catch (error) {
    console.log(error);
  }
}

export { getAllPosts };
