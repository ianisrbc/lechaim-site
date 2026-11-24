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

// Formulaires Professionnels / Événements : ouvrent la messagerie avec la demande pré-remplie
// Envoi via FormSubmit (formsubmit.co) vers hello@lechaim-beer.com.
// Formulaire activé le 24/11 : l'identifiant FormSubmit remplace l'adresse e-mail en clair.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/18d1fe54ee0a46395e8c0177af6a25c5';
document.querySelectorAll('[data-send-form]').forEach(form => {
  const err = form.querySelector('.mform__error');
  const status = form.querySelector('.mform__status');
  const btn = form.querySelector('[type="submit"]');
  const show = (msg, bad) => { status.textContent = msg; status.hidden = false; status.classList.toggle('is-error', !!bad); };
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const fields = [...form.elements].filter(el => el.name);
    const bad = fields.find(el => !el.checkValidity() || (el.required && !el.value.trim()));
    err.hidden = !bad;
    if (bad) { bad.focus(); return; }
    const data = Object.fromEntries(fields.map(el => [el.name, el.value.trim()]));
    const who = data['Établissement'] || data['Nom'];
    const payload = { ...data, _subject: `${form.dataset.subject} – ${who}`, _replyto: data['E-mail'], _template: 'table', _captcha: 'false' };
    btn.disabled = true; btn.classList.add('is-sending');
    show('Envoi en cours…');
    // FormSubmit (service gratuit) répond parfois lentement : on prévient au bout de 6 s, on abandonne au bout de 45 s.
    const slow = setTimeout(() => show("Envoi en cours… le service de messagerie met un peu plus de temps que d'habitude, merci de patienter."), 6000);
    const ctrl = new AbortController();
    const stop = setTimeout(() => ctrl.abort(), 45000);
    try {
      // FormData (et non JSON) : pas de requête préalable CORS, donc un aller-retour réseau de moins.
      const body = new FormData();
      Object.entries(payload).forEach(([k, v]) => body.append(k, v));
      const r = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { Accept: 'application/json' }, body, signal: ctrl.signal });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || String(j.success) === 'false') throw new Error(j.message || r.status);
      form.reset();
      status.hidden = true;
      let done = form.parentElement.querySelector('.mform-done');
      if (!done) {
        done = document.createElement('div');
        done.className = 'mform-done';
        done.setAttribute('role', 'status');
        done.setAttribute('tabindex', '-1');
        done.innerHTML = '<span class="mform-done__icon" aria-hidden="true">✓</span>'
          + '<p class="mform-done__title">Merci, votre message a bien été envoyé !</p>'
          + '<p class="mform-done__text">Nous vous répondons rapidement à l\'adresse indiquée. Pour toute urgence : <a href="mailto:hello@lechaim-beer.com">hello@lechaim-beer.com</a></p>'
          + '<button type="button" class="btn btn--outline mform-done__again">Envoyer un autre message</button>';
        form.after(done);
        done.querySelector('.mform-done__again').addEventListener('click', () => { done.hidden = true; form.hidden = false; form.querySelector('input, select, textarea').focus(); });
      }
      form.hidden = true; done.hidden = false; done.focus();
      done.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (_) {
      show("L'envoi n'a pas fonctionné. Écrivez-nous directement à hello@lechaim-beer.com.", true);
    } finally { clearTimeout(slow); clearTimeout(stop); btn.disabled = false; btn.classList.remove('is-sending'); }
  });
});
