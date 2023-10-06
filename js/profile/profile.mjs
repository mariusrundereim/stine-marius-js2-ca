import { baseURL } from "../env/env.mjs";

const userName = "stine137";
const userProfileAvatar =
  "https://storage.googleapis.com/pai-images/e9368f6d615840e08283d93792063b08.jpeg";

export async function getProfile(userName) {
  try {
    let options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODE3LCJuYW1lIjoic3RpbmUxMzciLCJlbWFpbCI6InVzZXJAbm9yb2ZmLm5vIiwiYXZhdGFyIjpudWxsLCJiYW5uZXIiOm51bGwsImlhdCI6MTY5NTk4ODY4MH0.3D6BToOkDpEjCzW6YcXneHyOhG4e3Ihgj4zanNhPB-Q",
      },
    };
    const response = await fetch(`${baseURL}/profiles/${userName}`, options);

    if (!response.ok) {
      throw new Error(`Failed to fetch profile data: ${response.status}`);
    }

    const result = await response.json();
    //console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

function ProfileHeader(userName, userProfileAvatar) {
  const userTitle = document.querySelector("#usernameTitle");
  userTitle.textContent = userName;

  const userAvatar = document.querySelector("#userAvatar");
  userAvatar.src = userProfileAvatar;
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

async function fetchProfile(userName) {
  try {
    const result = await getProfile(userName);
    console.log(result);
    ProfileHeader(userName, userProfileAvatar);
    ProfileCount(result);
  } catch (error) {
    console.error("Failed to fetch profile data:", error);
  }
}
fetchProfile(userName);

export async function getProfilePosts(userName) {
  try {
    let options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODE3LCJuYW1lIjoic3RpbmUxMzciLCJlbWFpbCI6InVzZXJAbm9yb2ZmLm5vIiwiYXZhdGFyIjpudWxsLCJiYW5uZXIiOm51bGwsImlhdCI6MTY5NTk4ODY4MH0.3D6BToOkDpEjCzW6YcXneHyOhG4e3Ihgj4zanNhPB-Q",
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
