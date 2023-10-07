import { baseURL } from "../env/env.mjs";
import { jwt, userName, defaultAvatarURL } from "../src/utils/domElements.mjs";

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
  const profileFollowing = document.querySelector("#profileCountFollowing");
  const profileFollowers = document.querySelector("#profileCountFollowers");
  const profilePosts = document.querySelector("#profileCountPosts");

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
displayProfile(userName);

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
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching profile posts:", error);
    throw error;
  }
}
getProfilePosts(userName);

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
displayProfilePosts(userName);
