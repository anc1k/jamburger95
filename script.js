// ======= Phrases Reveal on Scroll =======
const phrases = document.querySelectorAll('#phraseList li');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

phrases.forEach(li => io.observe(li));

// ======= Smooth scroll to phrases section =======
document.querySelector('.scroll-down').addEventListener('click', () => {
  document.querySelector('.phrases').scrollIntoView({ behavior: 'smooth' });
});
