import { newPost } from "../../feed/newPost.mjs";
import { getAllPosts } from "../../feed/getAllPost.mjs";
import { getFollowing } from "../../feed/following.mjs";
import { getFollowersPosts } from "../../feed/filterposts.mjs";
import { filterPostsFeed } from "../../feed/handleposts.mjs";
import { sendNewPost } from "../../src/utils/domElements.mjs";

sendNewPost.addEventListener("click", () => {
  newPost();
});

getFollowing();
getAllPosts();
//getFollowersPosts();
filterPostsFeed();
