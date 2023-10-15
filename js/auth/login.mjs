import { baseURL } from "../env/env.mjs";
import {
  signinEmailInput,
  signinConfirmPasswordInput,
  formAction,
} from "../src/utils/domElements.mjs";

async function logIn() {
  try {
    const { value: email } = signinEmailInput;
    const { value: password } = signinConfirmPasswordInput;
    const response = await fetch(`${baseURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        passwordgit,
      }),
    });
    if (!response.ok) {
      const result = await response.json();

      if (result && result.errors) {
        const invalidUserError = result.errors.find(
          (error) => error.message === "Invalid email or password"
        );

        if (invalidUserError) {
          alert("Invalid email or password");
        } else {
          console.log("Error:", result.errors);
        }
      } else {
        throw new Error("Failed to fetch api. Status: " + response.status);
      }
    }

    const result = await response.json();

    saveData(result);

    console.log(formAction.action);
    formAction.action = "../../profile/index.html";
    formAction.submit();
  } catch (error) {
    console.log(error);
  }
}

function saveData(result) {
  let token = result.accessToken;
  localStorage.setItem("jwt", `Bearer ` + token);
  localStorage.setItem("personUserName", result.name);
  console.log(result.accessToken);
}

export { logIn };
