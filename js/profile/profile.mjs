import { baseURL } from "../env/env.mjs";

const userName = "Mariusss";

export async function getProfile() {
  try {
    let options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODE3LCJuYW1lIjoic3RpbmUxMzciLCJlbWFpbCI6InVzZXJAbm9yb2ZmLm5vIiwiYXZhdGFyIjpudWxsLCJiYW5uZXIiOm51bGwsImlhdCI6MTY5NTk4ODY4MH0.3D6BToOkDpEjCzW6YcXneHyOhG4e3Ihgj4zanNhPB-Q",
      },
    };
    const response = await fetch(`${baseURL}/profiles/${userName}`, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}
getProfile();

const userTitle = document.querySelector("#usernameTitle");
userTitle.textContent = userName;
