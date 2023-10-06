import {
  signUpBtn,
  logInBtn,
  SignInBtn1,
  SignInBtn2,
  SignUpBox,
  LoggInBox,
} from "../src/utils/domElements.mjs";

import { signUp } from "./signup.mjs";
import { logIn } from "./login.mjs";

function ListenerFunction() {
  signUpBtn.addEventListener("click", () => {
    SignUpBox.classList.add("d-none");
    LoggInBox.classList.remove("d-none");
  });

  logInBtn.addEventListener("click", () => {
    SignUpBox.classList.remove("d-none");
    LoggInBox.classList.add("d-none");
  });

  SignInBtn1.addEventListener("click", (e) => {
    e.preventDefault();

    signUp();
  });
  SignInBtn2.addEventListener("click", (e) => {
    e.preventDefault();

    logIn();
  });
}
export { ListenerFunction };

//localStorage.clear();
