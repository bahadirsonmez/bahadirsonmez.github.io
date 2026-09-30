document.documentElement.classList.add('js');
const header = document.querySelector('[data-header]');
const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

// Header colour follows the surface under it: white on indigo, indigo on cream.
const darkSurfaces = [...document.querySelectorAll('.hero, .site-footer')];
const updateHeader = () => {
  const y = 40;
  const overDark = darkSurfaces.some(el => {
    const r = el.getBoundingClientRect();
    return r.top <= y && r.bottom >= y;
  });
  header?.classList.toggle('on-light', !overDark);
};
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('resize', updateHeader);

const setNav = open => {
  nav.classList.toggle('open', open);
  header.classList.toggle('nav-open', open);
  document.body.classList.toggle('nav-locked', open);
  toggle.setAttribute('aria-expanded', String(open));
};
toggle?.addEventListener('click', () => setNav(!nav.classList.contains('open')));
nav?.addEventListener('click', e => { if (e.target.closest('a')) setNav(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') setNav(false); });

// Scroll reveals with small staggers inside grids/lists.
const targets = document.querySelectorAll('.section-heading, .journey-heading, .app-card, .timeline li, .about-section > *, .contact-section > *');
targets.forEach(el => {
  el.setAttribute('data-reveal', '');
  const siblings = el.parentElement ? [...el.parentElement.children] : [];
  el.style.setProperty('--d', `${Math.min(siblings.indexOf(el), 3) * 0.08}s`);
});
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0, rootMargin: '0px 0px -4% 0px' });
  targets.forEach(el => io.observe(el));
} else {
  targets.forEach(el => el.classList.add('in'));
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
