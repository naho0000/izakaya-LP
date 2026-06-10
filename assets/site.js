(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const toggle = $('#calendar-toggle');
  const pop = $('#calendar-pop');
  const grid = $('#days-grid');
  const title = $('#calendar-title');
  const display = $('#date-display');
  const toast = $('#toast');
  let view = new Date(2024, 5, 1);
  let selected = new Date(2024, 5, 15);
  const week = ['日', '月', '火', '水', '木', '金', '土'];

  function pad(n) { return String(n).padStart(2, '0'); }
  function renderCalendar() {
    const y = view.getFullYear();
    const m = view.getMonth();
    title.textContent = `${y}年${m + 1}月`;
    grid.innerHTML = '';
    const start = new Date(y, m, 1).getDay();
    const days = new Date(y, m + 1, 0).getDate();
    for (let i = 0; i < start; i++) {
      const b = document.createElement('span');
      b.className = 'blank';
      grid.appendChild(b);
    }
    for (let d = 1; d <= days; d++) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = d;
      if (selected.getFullYear() === y && selected.getMonth() === m && selected.getDate() === d) btn.className = 'is-selected';
      btn.addEventListener('click', () => {
        selected = new Date(y, m, d);
        display.value = `${y}/${pad(m + 1)}/${pad(d)}（${week[selected.getDay()]}）`;
        pop.hidden = true;
        renderCalendar();
      });
      grid.appendChild(btn);
    }
  }

  toggle?.addEventListener('click', () => {
    pop.hidden = !pop.hidden;
    if (!pop.hidden) renderCalendar();
  });
  $$('.calendar-head button').forEach(btn => btn.addEventListener('click', () => {
    view.setMonth(view.getMonth() + (btn.dataset.month === 'next' ? 1 : -1));
    renderCalendar();
  }));
  document.addEventListener('click', (e) => {
    if (!pop || pop.hidden) return;
    if (!e.target.closest('.date-field')) pop.hidden = true;
  });
  renderCalendar();

  $('#fake-submit')?.addEventListener('click', () => {
    toast.hidden = false;
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => { toast.hidden = true; }, 2800);
  });

  const navs = $$('.bottom-nav a');
  const sections = navs.map(a => $(a.getAttribute('href'))).filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navs.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
  sections.forEach(sec => observer.observe(sec));
})();
