import { baseURL } from "../env/env.mjs";
import {
  jwt,
  followUser,
  unfollowUser,
  otherUserName,
} from "../src/utils/domElements.mjs";

function followAction() {
  followUser.addEventListener("click", () => {
    followUnfollow("follow");
  });
  unfollowUser.addEventListener("click", () => {
    followUnfollow("unfollow");
  });
}

async function followUnfollow(action) {
  try {
    const response = await fetch(
      `${baseURL}/profiles/${otherUserName}/${action}`,
      {
        method: "PUT",
        headers: {
          Authorization: `${jwt}`,
        },
      }
    );
    if (!response.ok) {
      const result = await response.json();
    }
    location.reload();
  } catch (error) {
    console.log(error);
  }
}

export { followAction };
