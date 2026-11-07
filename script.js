const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) current = section.id;
  });
  links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#" + current));
});

document.getElementById("year").textContent = new Date().getFullYear();

function downloadResume(event) {
  event.preventDefault();
  alert("Add your PDF resume as assets/Nivash-P-Resume.pdf and change the Resume button link in index.html to that file.");
}
