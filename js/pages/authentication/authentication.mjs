import { ListenerFunction } from "../../auth/auth.mjs";

ListenerFunction();

if (localStorage.getItem("jwt")) {
  window.location.href = "../.././feed/index.html";
}
