import { baseURL } from "../../env/env.mjs";
import { jwt, userName } from "../../src/utils/domElements.mjs";

export async function getUsersPosts() {
  const response = await fetch(
    `${baseURL}/profiles/${userName}/posts?_author=true`,
    {
      method: "GET",
      headers: {
        Authorization: `${jwt}`,
      },
    }
  );
  const result = await response.json();
  //console.log("Users post", result);
}
