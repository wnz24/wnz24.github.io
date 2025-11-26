// Smooth scrolling for navbar links without hash in URL
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault(); // Prevent default anchor behavior

      const targetId = link.dataset.section; // get the section id
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
