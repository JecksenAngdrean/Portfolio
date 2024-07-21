// humberger
const humberger = document.querySelector("#humberger");
const nav = document.querySelector("#menu");

humberger.addEventListener("click", function () {
  humberger.classList.toggle("humberger-active");
  nav.classList.toggle("hidden");
});

//windowscroll
const navbar = document.querySelector("header");
window.onscroll = () => {
  if (window.scrollY > 50) {
    navbar.classList.add("header-fixed");
  } else {
    navbar.classList.remove("header-fixed");
  }
};
