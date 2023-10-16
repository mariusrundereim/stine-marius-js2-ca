import { baseURL } from "../../env/env.mjs";
import { jwt, userName } from "../../src/utils/domElements.mjs";

export async function getProfiles() {
  const response = await fetch(`${baseURL}/profiles/${userName}?_posts=true`, {
    method: "GET",
    headers: {
      Authorization: `${jwt}`,
    },
  });
  const result = await response.json();
  console.log(result);
}
