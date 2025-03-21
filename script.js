let menuBar = document.getElementById("bar");
let navLinks = document.querySelectorAll(".navlink");
let sections = document.querySelectorAll("section");
let links = document.querySelector(".links");
let close = document.querySelector(".close");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

menuBar.addEventListener("click", () => {
  links.classList.toggle("navLink-display");
});

close.addEventListener("click", () => {
  links.classList.remove("navLink-display");
});
