import { searchPosts } from "./searchPosts.mjs";
import { fetchAllPosts } from "./fetchPosts.mjs";
import { fetchPostsPage, nextPage, prevPage } from "./pagination.mjs";
import { searchBarHeader } from "../src/utils/domElements.mjs";

const allPosts = await fetchAllPosts();

const searchQuery = searchBarHeader.value;
const searchResults = searchPosts(allPosts, searchQuery);

let offset = 0;
const limit = 10;

const nextPagePosts = await fetchPostsPage(limit, offset);
offset = nextPage(offset, limit);

const prevPagePosts = await fetchPostsPage(limit, offset);
offset = prevPage(offset, limit);
