const header = document.getElementById("header");
const key = document.getElementById("key");
const which = document.getElementById("which");
const code = document.getElementById("code");

document.addEventListener("keypress", () => {
  header.innerHTML = event.which;
  header.style.fontSize = "350px";
});

document.addEventListener("keypress", () => {
  key.innerHTML = event.key;
});

document.addEventListener("keypress", () => {
  which.innerHTML = event.which;
});

document.addEventListener("keypress", () => {
  code.innerHTML = event.code;
});