// select element function
const selectElement = function (element) {
  return document.querySelector(element);
};

const menuToggler = selectElement(".menu-toggle");
const nav = selectElement(".nav");

menuToggler.addEventListener("click", function () {
  nav.classList.toggle("open");
});

// Scroll Reveal
window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});
sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});
sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});
sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});
