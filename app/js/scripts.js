var body = document.querySelector("body");
document.addEventListener("click", handleClicks);

function handleClicks(e) {
  if (e.target.matches(".map")) {
    body.classList.add("showme");
    e.preventDefault();
  }
  if (e.target.matches(".closer")) {
    body.classList.remove("showme");
    e.preventDefault();
  }
}
