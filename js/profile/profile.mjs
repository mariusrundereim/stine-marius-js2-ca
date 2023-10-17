import { baseURL } from "../env/env.mjs";
import {
  jwt,
  userName,
  defaultAvatarURL,
  avatarUrlValue,
  changeAvatarBtn,
  profileFollowing,
  profileFollowers,
  profilePosts,
  otherUserName,
} from "../src/utils/domElements.mjs";
import { createPostElement } from "../components/search/getSearchPosts.mjs";

const ref = window.location.href;
console.log(ref);
const userUrl = "http://127.0.0.1:5501/profile/index.html?user=";

let currentUserName = userName;

if (ref.startsWith(userUrl)) {
  currentUserName = otherUserName;
}

export async function getProfile(userName) {
  try {
    let options = {
      headers: {
        Authorization: `${jwt}`,
      },
    };
    const response = await fetch(`${baseURL}/profiles/${userName}`, options);

    if (!response.ok) {
      throw new Error(`Failed to fetch profile data: ${response.status}`);
    }

    const result = await response.json();
    ProfileCount(result);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

function displayAvatar(userName) {
  const userAvatar = document.querySelector("#userAvatar");
  userAvatar.src = userName.avatar || defaultAvatarURL;
}

function displayProfileHeader(userName) {
  const userTitle = document.querySelector("#usernameTitle");
  userTitle.textContent = userName;
}

function ProfileCount(result) {
  const profileNumberFollower = result._count.followers;
  const profileNumberFollowing = result._count.following;
  const profileNumberPosts = result._count.posts;

  profileFollowers.textContent = profileNumberFollower;
  profileFollowing.textContent = profileNumberFollowing;
  profilePosts.textContent = profileNumberPosts;
}

async function displayProfile(userName) {
  try {
    const profileData = await getProfile(userName);
    displayProfileHeader(userName);
    displayAvatar(profileData);
  } catch (error) {
    console.error("Error display profile:", error);
  }
}
displayProfile(currentUserName);

export async function getProfilePosts(userName) {
  try {
    let options = {
      headers: {
        Authorization: `${jwt}`,
      },
    };
    const result = await fetch(
      `${baseURL}/profiles/${userName}/posts`,
      options
    );

    if (!result.ok) {
      throw new Error(`Failed to fetch profile posts data: ${result.status}`);
    }

    const data = await result.json();

    console.log("Second", data);
    return data;
  } catch (error) {
    console.error("Error fetching profile posts:", error);
    throw error;
  }
}
getProfilePosts(currentUserName);

function createProfilePosts(data) {
  const profilePosts = document.querySelector("#profilePosts");

  data.forEach((post) => {
    const profilePost = document.createElement("div");
    profilePost.classList.add("col");
    profilePost.classList.add("row");

    const profilePostImage = document.createElement("img");
    profilePostImage.classList.add("border");
    profilePostImage.src = post.media;

    profilePost.appendChild(profilePostImage);
    profilePosts.appendChild(profilePost);
  });
}
async function displayProfilePosts(userName) {
  try {
    const data = await getProfilePosts(userName);
    createProfilePosts(data);
  } catch (error) {
    console.error("Error fetching and display profile", error);
  }
}
displayProfilePosts(currentUserName);

changeAvatarBtn.addEventListener("click", async () => {
  const newAvatarUrl = avatarUrlValue.value;
  try {
    const result = await changeProfileAvatar(userName, newAvatarUrl);
    console.log("Avatar changed successfully:", result);
    displayAvatar(result);
  } catch (error) {
    console.error("Error changing avatar:", error);
  }
});

async function changeProfileAvatar(userName, newAvatarUrl) {
  try {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${jwt}`,
      },
      body: JSON.stringify({ avatar: newAvatarUrl }),
    };

    const response = await fetch(
      `${baseURL}/profiles/${userName}/media`,
      options
    );

    if (!response.ok) {
      throw new Error(`Failed to change avatar: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error changing avatar:", error);
    throw error;
  }
}
