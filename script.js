// Scroll-trigger animation for skills
const skillCards = document.querySelectorAll(".skill-card");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  },
  { threshold: 0.2 }
);

skillCards.forEach(card => {
  card.style.animationPlayState = "paused";
  observer.observe(card);
});
