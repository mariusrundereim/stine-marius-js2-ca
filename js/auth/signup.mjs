import { baseURL } from "../env/env.mjs";
import {
  usernameInput,
  emailInput,
  confirmPasswordInput,
  passwordInput,
  SignUpBox,
  LoggInBox,
} from "../src/utils/domElements.mjs";

function passwordValidation() {
  if (passwordInput.value === confirmPasswordInput.value) {
    const passwordValue = confirmPasswordInput.value;
    return passwordValue;
  }
}

function emailValidation(email) {
  const regEx = /@noroff.no|@stud.noroff.no/;
  return regEx.test(email);
}

async function signUp() {
  try {
    const isNoroffEmail = emailValidation(emailInput.value);

    if (!isNoroffEmail) {
      alert("Invalid email. Please use a Noroff email address.");
      return;
    }
    const passwordValue = passwordValidation();
    if (passwordValue) {
      if (passwordValue.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
      }
      const response = await fetch(`${baseURL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: usernameInput.value,
          email: emailInput.value,
          password: passwordValue,
        }),
      });

      if (!response.ok) {
        const result = await response.json();

        if (result && result.errors) {
          const profileExistsError = result.errors.find(
            (error) => error.message === "Profile already exists"
          );

          if (profileExistsError) {
            alert("Error: Profile already exists");
          } else {
            console.log("Error:", result.errors[0].message);
          }
        } else {
          throw new Error("Failed to fetch api. Status: " + response.status);
        }
      } else {
        const result = await response.json();

        SignUpBox.classList.add("d-none");
        LoggInBox.classList.remove("d-none");

        console.log(result);
        return result;
      }
    } else {
      alert("Password validation failed");
    }
  } catch (error) {
    console.log(error);
  }
}

export { signUp };
