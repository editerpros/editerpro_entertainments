// Fade-in animation for sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach(sec => {
  observer.observe(sec);
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  let offset = window.pageYOffset;
  hero.style.backgroundPositionY = offset * 0.3 + "px";
});

// Glow effect on game cards
document.querySelectorAll(".game-card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, #1a1a1a, #0d0d0d)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "#111";
  });
});
