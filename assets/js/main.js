// Lechaim · interactions communes à toutes les pages

// Contrôle d'âge, mémorisé dans le navigateur
(function () {
  const gate = document.getElementById('age-gate');
  let ok = false;
  try { ok = localStorage.getItem('lechaim-age-ok') === '1'; } catch (e) {}
  if (!ok) {
    gate.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  document.getElementById('age-yes').addEventListener('click', () => {
    try { localStorage.setItem('lechaim-age-ok', '1'); } catch (e) {}
    gate.hidden = true;
    document.body.style.overflow = '';
  });
})();

// Menu mobile
(function () {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
})();

// Carrousel « Nos bières »
document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const track = carousel.querySelector('[data-track]');
  const prev = carousel.querySelector('[data-prev]');
  const next = carousel.querySelector('[data-next]');
  const step = () => (track.firstElementChild?.offsetWidth || 320) + 24;
  const update = () => {
    prev.disabled = track.scrollLeft <= 4;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  };
  prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
