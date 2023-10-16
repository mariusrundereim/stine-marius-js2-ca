import { baseURL } from "../env/env.mjs";
import {
  jwt,
  followingContainer,
  userName,
  followerContainer,
  defaultAvatarURL,
} from "../src/utils/domElements.mjs";

async function getFollowing() {
  try {
    const response = await fetch(
      `${baseURL}/profiles/${userName}?_followers=true&_following=true`,
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

    const following = result.following;
    const followers = result.followers;

    following.forEach((follower) => {
      let avatar;

      if (!follower.avatar) {
        avatar = defaultAvatarURL;
      } else {
        avatar = follower.avatar;
      }
      followingContainer.innerHTML += `
      <div
      class="list-group-item list-group-item-action d-flex py-2 gap-3"
    >
      <img
        src="${avatar}"
        alt="twbs"
        width="32"
        height="32"
        class="rounded-circle flex-shrink-0"
      />
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0">${follower.name}</h6>

        </div>

      </div>
    </div>
        `;
    });

    followers.forEach((follower) => {
      let avatar;

      if (!follower.avatar) {
        avatar = defaultAvatarURL;
      } else {
        avatar = follower.avatar;
      }
      followerContainer.innerHTML += `
      <div
      class="list-group-item list-group-item-action d-flex py-2 gap-3"
    >
      <img
        src="${avatar}"
        alt="twbs"
        width="32"
        height="32"
        class="rounded-circle flex-shrink-0"
      />
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0">${follower.name}</h6>

        </div>

      </div>
    </div>
        `;
    });
  } catch (error) {
    console.log(error);
  }
}

export { getFollowing };
