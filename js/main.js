/* Döner Point — Main JS */

// ── Navbar scroll ──
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Mobile nav ──
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileClose = document.querySelector('.mobile-close');

hamburger?.addEventListener('click', () => mobileNav.classList.add('open'));
mobileClose?.addEventListener('click', () => mobileNav.classList.remove('open'));
mobileNav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileNav.classList.remove('open'));
});

// ── Scroll reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
      observer.unobserve(el.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Active nav link ──
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// ── Staggered reveal for grids ──
document.querySelectorAll('.quality-grid .quality-card, .menu-preview-grid .menu-prev-card, .reviews-grid .review-card, .team-grid .team-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.08}s`;
  el.classList.add('reveal');
  observer.observe(el);
});

// ── Today highlight in hours table ──
const days = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'];
const today = days[new Date().getDay()];
document.querySelectorAll('.hours-table tr').forEach(row => {
  const cell = row.querySelector('td');
  if (cell && cell.textContent.trim() === today) {
    row.classList.add('today');
  }
});
