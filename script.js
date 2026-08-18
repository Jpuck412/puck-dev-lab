document.getElementById('year').textContent = `© ${new Date().getFullYear()}`;

const cards = document.querySelectorAll('.project-card, .stack-item');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

cards.forEach((card) => observer.observe(card));
