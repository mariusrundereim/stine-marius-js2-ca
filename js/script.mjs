import { Header } from "./layout/Header.mjs";
import { searchModal } from "./global/search/searchfile.mjs";
import { searchTest } from "./global/search/searchPosts.mjs";

const headerElement = Header();
const searchModalEle = searchModal();

document.body.prepend(headerElement);
document.body.prepend(searchModalEle);

searchTest();
