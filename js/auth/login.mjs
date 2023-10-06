import { baseURL } from "../env/env.mjs";
import {
  signinEmailInput,
  signinConfirmPasswordInput,
  formAction,
} from "../src/utils/domElements.mjs";

async function logIn() {
  try {
    const response = await fetch(`${baseURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: signinEmailInput.value,
        password: signinConfirmPasswordInput.value,
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

    return result;
  } catch (error) {
    console.log(error);
  }
}

function saveData(result) {
  let token = result.accessToken;
  localStorage.setItem("jwt", `Bearer ` + token);
  console.log(result.accessToken);
}

export { logIn };
