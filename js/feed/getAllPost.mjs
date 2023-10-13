import { baseURL } from "../env/env.mjs";
import {
  jwt,
  feedAllPosts,
  userName,
  defaultAvatarURL,
} from "../src/utils/domElements.mjs";
import { innerEdit } from "./editPost.mjs";
import { viewPost } from "./viewPost.mjs";

// async function getAllPosts() {
//   try {
//     const response = await fetch(`${baseURL}/posts?_author=true`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `${jwt}`,
//       },
//     });
//     if (!response.ok) {
//       throw new Error("Failed to get posts. Status: " + response.status);
//     }
//     const result = await response.json();
//     console.log(result);

//     result.forEach((post) => {
//       const authorName = post.author.name;

//       const postImg = document.querySelectorAll(".post-img");
//       const postImgContainer = document.querySelectorAll(".post-img-container");

//       postImgContainer.forEach((container, index) => {
//         const post = result[index];

//         const mediaUrl = container
//           .querySelector(".post-img")
//           .getAttribute("src");

//         if (!mediaUrl) {
//           container.classList.add("d-none");
//         }
//       });

//       let avatar;

//       if (!post.author.avatar) {
//         avatar = defaultAvatarURL;
//       } else {
//         avatar = post.author.avatar;
//       }

//       const postId = post.id;

//       // const hearts = document.querySelectorAll(".bi-heart");

//       // hearts.forEach((heart) => {
//       //   heart.addEventListener("click", (e) => {
//       //     e.preventDefault();
//       //     console.log("heart clicked");
//       //     // Add your logic here for what should happen when a heart is clicked
//       //   });
//       // });

//       let myPost = false;

//       if (userName === authorName) {
//         myPost = true;
//       }

//       const editContent = innerEdit(myPost, postId);

//       const card = document.createElement("div");
//       card.classList.add(
//         "border",
//         "border-dark",
//         "border-opacity-25",
//         "rounded",
//         "mb-4"
//       );

//       card.addEventListener("click", () => {
//         console.log(postId);
//       });

//       //const viewPostInner = viewPost(postId);

//       card.innerHTML = `

//       <div  class="post-img-container col ratio ratio-1x1 bg-dark rounded-top">
//       <img class="post-img" src="${post.media}" alt=""></div>
//       <div class="col bg-white p-2">
//         <!-- Post Image-->
//         <div
//           class="d-flex align-content-between justify-content-between"
//         >
//           <!-- Post header -->
//           <div
//             class="col d-flex align-content-between justify-content-between"
//           >
//             <div class="d-inline-flex">
//               <img
//                 src="${avatar}"
//                 alt="mdo"
//                 width="32"
//                 height="32"
//                 class="rounded-circle me-2"
//               />
//               <h2 class="fs-5">${post.author.name} ${post.id}</h2>
//             </div>
//             <div
//               class="d-flex align-content-center justify-content-center"
//             >

//               <i class="bi bi-heart ps-2 pe-2"></i>
//             </div>
//           </div>
//         </div>

//         <!-- Post Content Body-->
//         <div class="text-break">
//         <h5>${post.title}</h3>
//           <p>
// ${post.body}
//           </p>
//         </div>

//         <!-- Post Tags-->
//         <div class="d-inline-flex">
//           <p class="pe-2 fw-medium">${post.tags
//             .map((tag) => `<p class="pe-2 fw-medium">${tag}</p>`)
//             .join("")}</p>

//         </div>
//         <!-- Post Comments-->
//         <div class="d-flex m-0">
//           <button
//             type="button"
//             class="btn btn-secondary me-2 flex-fill"
//             data-bs-toggle="modal" data-bs-target="#byIdModal"
//           >
//             Comment
//           </button>
//           <div class="modal fade" id="byIdModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div class="modal-body">
//               ...
//             </div>

//             ${viewPostInner}

//           </div>
//           </div>

// </div>
//         </div>
//       </div>
//     `;

//       card.append(editContent);

//       feedAllPosts.append(card);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// export { getAllPosts };

////////////////////////////////////////////////////////////////////////////////////////////////

///////////////

// import { baseURL } from "../env/env.mjs";
// import {
//   jwt,
//   feedAllPosts,
//   userName,
//   defaultAvatarURL,
// } from "../src/utils/domElements.mjs";
// import { innerEdit } from "./editPost.mjs";
// import { viewPost } from "./viewPost.mjs";

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
    console.log(result);

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

      const card = document.createElement("div");
      card.classList.add(
        "border",
        "border-dark",
        "border-opacity-25",
        "rounded",
        "mb-4"
      );
      //const viewPostInner = await viewPost(postId);

      //

      let viewPostInner = "";

      card.addEventListener("click", async () => {
        viewPostInner = await viewPost(postId);
        console.log(viewPostInner);
        console.log(postId);
      });

      //

      // const viewPostInner = await viewPost(postId);

      //

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
                <h2 class="fs-5">${post.author.name} ${post.id}</h2>
              </div>
              <div class="d-flex align-content-center justify-content-center">
                <i class="bi bi-heart ps-2 pe-2"></i>
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

          <!-- Post Comments-->
          <div class="d-flex m-0">
            <button type="button" class="btn btn-secondary me-2 flex-fill" ">
              Comment
            </button>
            <div class="modal fade" id="byIdModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog open-id-modal">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  ${viewPostInner}
                  </div>
                </div>
              </div>
            </div>
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

///////////////////////////////////////////////////////////////////////////////////////

// Import statements

// async function getAllPosts() {
//   try {
//     const response = await fetch(`${baseURL}/posts?_author=true`, {
//       method: "GET",
//       headers: {
//         Authorization: `${jwt}`,
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to get posts. Status: " + response.status);
//     }

//     const result = await response.json();
//     console.log(result);

//     result.forEach(async (post) => {
//       const authorName = post.author.name;

//       const postImgContainer = document.querySelectorAll(".post-img-container");

//       for (const container of postImgContainer) {
//         const mediaUrl = container
//           .querySelector(".post-img")
//           .getAttribute("src");

//         if (!mediaUrl) {
//           container.classList.add("d-none");
//         }
//       }

//       let avatar;

//       if (!post.author.avatar) {
//         avatar = defaultAvatarURL;
//       } else {
//         avatar = post.author.avatar;
//       }

//       const postId = post.id;

//       let myPost = false;

//       if (userName === authorName) {
//         myPost = true;
//       }

//       const editContent = innerEdit(myPost, postId);

//       const card = document.createElement("div");
//       card.classList.add(
//         "border",
//         "border-dark",
//         "border-opacity-25",
//         "rounded",
//         "mb-4"
//       );

//       card.addEventListener("click", () => {
//         console.log(postId);
//       });

//       // Add event listener inside the forEach loop
//       const commentButton = document.createElement("button");
//       commentButton.classList.add("btn", "btn-secondary", "me-2", "flex-fill");
//       commentButton.setAttribute("type", "button");
//       commentButton.setAttribute("data-bs-toggle", "modal");
//       commentButton.setAttribute("data-bs-target", `#byIdModal-${postId}`);
//       commentButton.innerText = "Comment";

//       commentButton.addEventListener("click", async () => {
//         try {
//           const viewPostInner = await viewPost(postId);

//           // Update the modal content with the result from viewPost
//           const modalBody = document.getElementById(`modalBody-${postId}`);

//           // Clear existing content
//           modalBody.innerHTML = "";

//           // Append the viewPostInner content
//           modalBody.appendChild(viewPostInner);
//         } catch (error) {
//           console.error("Error fetching post data:", error);
//         }
//       });

//       card.innerHTML = `
//         <div class="post-img-container col ratio ratio-1x1 bg-dark rounded-top">
//           <img class="post-img" src="${post.media}" alt="">
//         </div>
//         <div class="col bg-white p-2">
//           <!-- Post Image-->
//           <div class="d-flex align-content-between justify-content-between">
//             <!-- Post header -->
//             <div class="col d-flex align-content-between justify-content-between">
//               <div class="d-inline-flex">
//                 <img src="${avatar}" alt="mdo" width="32" height="32" class="rounded-circle me-2" />
//                 <h2 class="fs-5">${post.author.name} ${postId}</h2>
//               </div>
//               <div class="d-flex align-content-center justify-content-center">
//                 <i class="bi bi-heart ps-2 pe-2"></i>
//               </div>
//             </div>
//           </div>

//           <!-- Post Content Body-->
//           <div class="text-break">
//             <h5>${post.title}</h5>
//             <p>${post.body}</p>
//           </div>

//           <!-- Post Tags-->
//           <div class="d-inline-flex">
//             <p class="pe-2 fw-medium">${post.tags
//               .map((tag) => `<span class="pe-2 fw-medium">${tag}</span>`)
//               .join("")}</p>
//           </div>

//           <!-- Post Comments-->
//           <div class="d-flex m-0">
//             ${commentButton.outerHTML}
//             <div class="modal fade" id="byIdModal-${postId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//               <div class="modal-dialog open-id-modal">
//                 <div class="modal-content">
//                   <div class="modal-header">
//                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                   </div>
//                   <div class="modal-body" id="modalBody-${postId}">
//                     <!-- Leave this empty for now, it will be filled by the commentButton click event -->
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       `;

//       card.append(editContent);

//       feedAllPosts.append(card);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// export { getAllPosts };
