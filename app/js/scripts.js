var body = document.querySelector("body");
document.addEventListener("click", show);

function show(e) {
  if (e.target.matches(".map")) {
    e.preventDefault();
    body.classList.add("showme");
  } else {
    body.classList.remove("showme");
  }
}
