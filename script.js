const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  const hasBackground = header.classList.contains("bg_400");
  if (hasBackground && window.scrollY < 10) {
    header.classList.remove("bg_400");
  }
  if (!hasBackground && window.scrollY >= 10) {
    header.classList.add("bg_400");
  }
});

const hamburger = document.querySelector(".hamburger");
const hamburgerClose = document.querySelector(".hamburger_close");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.add("open");
  hamburger.classList.add("close");
  document.body.style.overflow = "hidden";
  const hasBackground = header.classList.contains("bg_400");
  if (!hasBackground) {
    header.classList.add("bg_400");
  }
});

hamburgerClose.addEventListener("click", () => {
  nav.classList.remove("open");
  hamburger.classList.remove("close");
  document.body.style.overflow = "auto";
});
