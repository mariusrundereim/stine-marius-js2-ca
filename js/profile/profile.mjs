import { baseURL } from "../env/env.mjs";

function Profile() {
  console.log(baseURL);
}

export { Profile };

export async function getProfile() {
  try {
    let options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODE3LCJuYW1lIjoic3RpbmUxMzciLCJlbWFpbCI6InVzZXJAbm9yb2ZmLm5vIiwiYXZhdGFyIjpudWxsLCJiYW5uZXIiOm51bGwsImlhdCI6MTY5NTk4ODY4MH0.3D6BToOkDpEjCzW6YcXneHyOhG4e3Ihgj4zanNhPB-Q",
      },
    };

    const response = await fetch(`${baseURL}/profiles/Mariusss`, options);

    if (!response.ok) {
      throw new Error("Failed to fetch api. Status: " + response.status);
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}
getProfile();
