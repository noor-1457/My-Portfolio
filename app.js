/*--------------downloading cv------------*/
let cvbtn = document.querySelector(".cv");
cvbtn.addEventListener("click", function () {
  const fileUrl =
    "https://drive.google.com/uc?export=download&id=1b2nzPLPl-aIiudOYNsaU85fHd5oy51va";
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "CV_2025.pdf";

  // Append link to the body, click it, then remove it
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
/*--------------toggele active link------------*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*='" + id + "']")
          .classList.add("active");
      });
    }
  });
};

/*--------------toggle menu button------------*/
const menuIcon = document.querySelector("#menu-icon");
const nav = document.querySelector(".nav");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuIcon.classList.toggle("bx-menu");
  menuIcon.classList.toggle("bx-x");
});

/*--------------removing icon when clicked and scrolled------------*/
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active"); // close menu
    menuIcon.classList.remove("bx-x"); // remove X icon
    menuIcon.classList.add("bx-menu"); // ensure hamburger shows
  });
});

/*--------------scroll reveal-animation-----------*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".portfolio-box ,.rightsection, .para, .contact", {
  origin: "bottom",
});
ScrollReveal().reveal("h1", {
  origin: "left",
});
