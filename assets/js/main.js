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

// Filtres (page Nos bières)
document.querySelectorAll('[data-filter]').forEach(group => {
  const tiles = document.querySelectorAll('[data-tiles] .tile');
  const empty = document.querySelector('.tiles__empty');
  group.addEventListener('click', e => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    group.querySelectorAll('.chip').forEach(c => {
      const on = c === btn;
      c.classList.toggle('is-active', on);
      c.setAttribute('aria-pressed', String(on));
    });
    const f = btn.dataset.f;
    let shown = 0;
    tiles.forEach(t => {
      const ok = f === 'all' || t.dataset.tags.split(' ').includes(f);
      t.hidden = !ok;
      if (ok) shown++;
    });
    if (empty) empty.hidden = shown > 0;
  });
});

// Recherche dans la liste des points de vente
document.querySelectorAll('[data-pos-search]').forEach(input => {
  const items = document.querySelectorAll('[data-pos-list] .pos');
  const empty = document.querySelector('.pos-list__empty');
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    let shown = 0;
    items.forEach(li => {
      const ok = !q || li.textContent.toLowerCase().includes(q);
      li.hidden = !ok;
      if (ok) shown++;
    });
    if (empty) empty.hidden = shown > 0;
  });
});

// Formulaire « Demander nos tarifs pro » : ouvre la messagerie avec la demande pré-remplie
document.querySelectorAll('[data-pro-form]').forEach(form => {
  const err = form.querySelector('.pro-form__error');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    const ok = d.nom.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim());
    err.hidden = !!ok;
    if (!ok) return;
    const body = `Nom / établissement : ${d.nom}\nE-mail : ${d.email}\nVille : ${d.ville}\n\n${d.message}`;
    // PLACEHOLDER : adresse de réception à confirmer
    location.href = 'mailto:contact@lechaim-beer.com?subject=' + encodeURIComponent('Demande de tarifs pro – ' + d.nom) + '&body=' + encodeURIComponent(body);
  });
});
