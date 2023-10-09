export const jwt = localStorage.getItem("jwt");
export const userName = localStorage.getItem("personUserName");
//auth page

export const usernameInput = document.querySelector("#signup-username");
export const emailInput = document.querySelector("#signup-email");
export const confirmPasswordInput = document.querySelector(
  "#signup-confirm-Password"
);
export const passwordInput = document.querySelector("#signup-Password");
export const signinEmailInput = document.querySelector("#signin-email");
export const signinConfirmPasswordInput = document.querySelector(
  "#signin-confirm-Password"
);
export const formAction = document.querySelector("#form-action");

export const signUpBtn = document.querySelector(".sign-up-btn");
export const logInBtn = document.querySelector(".log-in-btn");
export const SignUpBox = document.querySelector(".sign-up-box");
export const LoggInBox = document.querySelector(".logg-in-box");
export const SignInBtn2 = document.querySelector(".sign-in-btn-2");
export const SignInBtn1 = document.querySelector(".sign-in-btn-1");

//feed page
export const newPostTitle = document.querySelector("#new-post-title");
export const newPostText = document.querySelector("#new-post-text");
export const newPostTags = document.querySelector("#new-post-tags");
export const newPostImg = document.querySelector("#new-post-img");
export const sendNewPost = document.querySelector("#send-new-post");
export const feedAllPosts = document.querySelector("#feeds-all-posts");

// profile page

export const defaultAvatarURL =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
export const avatarUrlValue = document.querySelector("#changeAvatarValue");
export const changeAvatarBtn = document.querySelector("#changeAvatarBtn");

export const profileFollowing = document.querySelector(
  "#profileCountFollowing"
);
export const profileFollowers = document.querySelector(
  "#profileCountFollowers"
);
export const profilePosts = document.querySelector("#profileCountPosts");

// Search

export const inputSearchTitle = document.querySelector("#search-input-modal");
export const inputSelectionUsername = document.querySelector("#usernameRadio");
export const inputSelectionHashtag = document.querySelector("#hashtagRadio");
