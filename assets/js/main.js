
const toggle = document.querySelector('.mobile-toggle');
const menu = document.querySelector('.menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
}
document.querySelectorAll('.menu a').forEach(a => a.addEventListener('click', () => menu?.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const form = document.querySelector('#consultForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn! DSTGROUP sẽ liên hệ tư vấn trong thời gian sớm nhất.');
  });
}


const progress = document.querySelector('.scroll-progress');
const updateProgress = () => {
  if (!progress) return;
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
  progress.style.width = pct + '%';
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const heroCard = document.querySelector('.hero-card');
if (heroCard && window.matchMedia('(pointer:fine)').matches) {
  heroCard.addEventListener('mousemove', (e) => {
    const rect = heroCard.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - .5;
    const y = (e.clientY - rect.top) / rect.height - .5;
    heroCard.style.transform = `rotateX(${y * -5}deg) rotateY(${x * 7}deg) translateY(-4px)`;
  });
  heroCard.addEventListener('mouseleave', () => {
    heroCard.style.transform = '';
  });
}
