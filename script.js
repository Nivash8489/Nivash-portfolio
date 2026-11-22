const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const updateActiveLink = () => {
  let current = "home";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
};

window.addEventListener("scroll", updateActiveLink, { passive: true });
updateActiveLink();

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

document.getElementById("year").textContent = new Date().getFullYear();

const contactDialog = document.getElementById("contact-dialog");
const openContact = document.getElementById("open-contact");
const closeContact = document.getElementById("close-contact");
const copyEmail = document.getElementById("copy-email");
const copyEmailLabel = document.getElementById("copy-email-label");

openContact.addEventListener("click", () => {
  if (typeof contactDialog.showModal === "function") {
    contactDialog.showModal();
  } else {
    contactDialog.setAttribute("open", "");
  }
});

closeContact.addEventListener("click", () => contactDialog.close());

contactDialog.addEventListener("click", event => {
  if (event.target === contactDialog) contactDialog.close();
});

copyEmail.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("nivashramki18@gmail.com");
    copyEmailLabel.textContent = "Email copied";
  } catch {
    copyEmailLabel.textContent = "nivashramki18@gmail.com";
  }
});
