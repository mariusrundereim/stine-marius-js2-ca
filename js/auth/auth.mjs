const signUpBtn = document.querySelector(".sign-up-btn");
const logInBtn = document.querySelector(".log-in-btn");
const SignUpBox = document.querySelector(".sign-up-box");
const LoggInBox = document.querySelector(".logg-in-box");
const SignInBtn2 = document.querySelector(".sign-in-btn-2");
const SignInBtn1 = document.querySelector(".sign-in-btn-1");

signUpBtn.addEventListener("click", () => {
  SignUpBox.classList.add("d-none");
  LoggInBox.classList.remove("d-none");
});

logInBtn.addEventListener("click", () => {
  SignUpBox.classList.remove("d-none");
  LoggInBox.classList.add("d-none");
});

// login

import { baseURL } from "../env/env.mjs";

const usernameInput = document.querySelector("#signup-username");
const emailInput = document.querySelector("#signup-email");
const confirmPasswordInput = document.querySelector("#signup-confirm-Password");
const signinEmailInput = document.querySelector("#signin-email");
const signinConfirmPasswordInput = document.querySelector(
  "#signin-confirm-Password"
);
const formAction = document.querySelector("#form-action");
console.log(baseURL);

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
    console.log(signinEmailInput.value);
    console.log(signinConfirmPasswordInput.value);
    if (!response.ok) {
      throw new Error("Failed to fetch api. Status: " + response.status);
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

//signup

async function signUp() {
  try {
    const response = await fetch(`${baseURL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: usernameInput.value,
        email: emailInput.value,
        password: confirmPasswordInput.value,
      }),
    });
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

SignInBtn1.addEventListener("click", (e) => {
  e.preventDefault();
  signUp();
  SignUpBox.classList.add("d-none");
  LoggInBox.classList.remove("d-none");
});
SignInBtn2.addEventListener("click", (e) => {
  e.preventDefault();

  logIn();
});

export { signUpBtn, logInBtn };

//localStorage.clear();
