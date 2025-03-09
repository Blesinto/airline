// Mobile menu toggle functionality
function setupMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenu) {
    mobileMenu.addEventListener("click", function () {
      this.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }

  // Close menu when clicking on a link
  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}

// Add animation for service cards on scroll
function animateOnScroll() {
  const cards = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(card);
  });
}

// Initialize all functionality on page load
window.addEventListener("load", function () {
  setupMobileMenu();
  animateOnScroll();
});
