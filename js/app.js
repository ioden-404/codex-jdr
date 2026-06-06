(function () {
  'use strict';

  function init() {
    const m = CODEX.meta;
    document.getElementById('brand-sub').textContent    = m.title;
    document.getElementById('footer-brand').textContent = 'Codex — ' + m.title;
    document.title = m.title + ' — Codex';

    const qEl = document.getElementById('sidebar-quote');
    if (m.quote) {
      qEl.innerHTML = '« ' + esc(m.quote) + ' »'
        + (m.quoteAuthor ? '<cite>— ' + esc(m.quoteAuthor) + '</cite>' : '');
    }

    document.getElementById('search').addEventListener('input', onSearch);
    window.addEventListener('hashchange', route);

    renderRightPanel();
    route();
  }

  // ── Routing ──────────────────────────────────────────────────────────────

  function route() {
    document.getElementById('search').value = '';
    const raw = location.hash.replace(/^#\/?/, '');
    const [sectionKey = '', entryId = ''] = raw.split('/');
    setActiveNav(sectionKey || 'home');
    if (!sectionKey)                       renderHome();
    else if (sectionKey === 'calendrier')  renderCalendrier();
    else if (sectionKey === 'notes')       renderNotes();
    else if (entryId)                      renderEntry(sectionKey, entryId);
    else                                   renderSection(sectionKey);
  }

  function setActiveNav(view) {
    document.querySelectorAll('.nav-item').forEach(el =>
      el.classList.toggle('active', el.dataset.view === view)
    );
  }

  // ── Search ───────────────────────────────────────────────────────────────

  function onSearch(e) {
    const q = e.target.value.trim();
    if (q.length >= 2)       renderSearch(q);
    else if (q.length === 0) route();
  }

  // ── Colonne droite (rendu une seule fois) ────────────────────────────────

  function renderRightPanel() {
    const m = CODEX.meta;
    let html = '';

    // Événements à venir
    if (m.upcoming && m.upcoming.length) {
      const rows = m.upcoming.map(e => `
        <div class="event-item">
          <div class="event-date">
            <span class="event-day">${esc(e.day)}</span>
            <span class="event-month">${esc(e.month)}</span>
          </div>
          <div class="event-info">
            <strong>${esc(e.title)}</strong>
            <p>${esc(e.desc)}</p>
          </div>
        </div>`).join('');
      html += `<div class="widget">
        <div class="widget-header"><i class="fa-regular fa-calendar"></i> Événements à venir</div>
        ${rows}
        <div class="widget-footer"><a href="#/calendrier">Voir le calendrier complet &rsaquo;</a></div>
      </div>`;
    }

    // Notes récentes
    if (m.recentNotes && m.recentNotes.length) {
      const rows = m.recentNotes.map(n => `
        <div class="note-item">
          <i class="fa-regular fa-file-lines"></i>
          <div>
            <div class="note-title">${esc(n.title)}</div>
            <div class="note-when">${esc(n.when)}</div>
          </div>
        </div>`).join('');
      html += `<div class="widget">
        <div class="widget-header"><i class="fa-solid fa-bars"></i> Notes récentes</div>
        ${rows}
        <div class="widget-footer"><a href="#/notes">Voir toutes les notes &rsaquo;</a></div>
      </div>`;
    }

    // Liens rapides
    if (m.quickLinks && m.quickLinks.length) {
      const rows = m.quickLinks.map(l => `
        <a class="qlink-item" href="${esc(l.href)}">
          <i class="fa-solid fa-chevron-right"></i>${esc(l.label)}
        </a>`).join('');
      html += `<div class="widget">
        <div class="widget-header"><i class="fa-solid fa-link"></i> Liens rapides</div>
        ${rows}
      </div>`;
    }

    document.getElementById('right-widgets').innerHTML = html;
  }

  // ── Page d'accueil ───────────────────────────────────────────────────────

  function renderHome() {
    const m    = CODEX.meta;
    const secs = CODEX.sections;

    // 4 entrées aléatoires piochées dans toutes les sections (hors sessions)
    const pool = [];
    ['lore', 'personnages', 'lieux', 'bestiaire', 'factions'].forEach(key => {
      (secs[key] ? secs[key].entries : []).forEach(entry => pool.push({ key, entry }));
    });
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const featured = pool.slice(0, 4);

    const cardsHTML = featured.map(({ key, entry }) => {
      const sec = secs[key];
      const img = entry.image || ('img/' + entry.id + '.png');
      const imgPos = ['personnages', 'bestiaire'].includes(key) ? 'top center' : 'center';
      return `
        <div class="entry-card" onclick="location.hash='#/${esc(key)}/${esc(entry.id)}'">
          <div class="card-img" style="background-image:url('${esc(img)}');background-position:${imgPos}">
          </div>
          <div class="card-body">
            <span class="card-cat">${esc(sec.label)}</span>
            <div class="card-title">${esc(entry.title)}</div>
            <p class="card-desc">${esc(entry.summary || '')}</p>
            <span class="card-date">${esc(entry.discovered || 'Campagne')}</span>
          </div>
        </div>`;
    }).join('');

    const heroImg   = m.heroImage || '';
    const mapImg    = m.mapImage  || '';
    const mapStyle  = mapImg  ? ` style="background-image:url('${esc(mapImg)}')"` : '';

    setContent(`
      <!-- HERO — pleine largeur, pas de border-radius ni de card -->
      ${heroImg ? `
      <div class="hero hero-banner" style="background-image:url('${esc(heroImg)}')">
        <div class="hero-overlay"></div>
        <div class="hero-left">
          <h1 class="hero-title">${esc(m.title)}</h1>
          <p class="hero-tagline">${esc(m.tagline || '')}</p>
          <p class="hero-desc">${esc(m.description)}</p>
        </div>
      </div>` : `
      <div class="hero">
        <div class="hero-left">
          <h1 class="hero-title">${esc(m.title)}</h1>
          <p class="hero-tagline">${esc(m.tagline || '')}</p>
          <p class="hero-desc">${esc(m.description)}</p>
        </div>
        <div class="hero-right empty"></div>
      </div>`}

      <!-- SECTIONS avec padding -->
      <div class="home-sections">

        <!-- Dernières entrées -->
        <div class="home-section">
          <div class="section-header">
            <i class="fa-solid fa-feather"></i>
            <h2>Dernières Entrées</h2>
          </div>
          <div class="recent-grid">${cardsHTML}</div>
        </div>

        <!-- Carte du monde -->
        <div class="home-section">
          <div class="section-header">
            <i class="fa-solid fa-map"></i>
            <h2>Carte du Monde</h2>
          </div>
          <div class="map-container">
            ${mapImg
              ? `<img src="${esc(mapImg)}" alt="Carte du monde" class="map-thumb" style="width:100%;height:100%;object-fit:cover;display:block;cursor:zoom-in;">`
              : '<span class="map-placeholder">+ Ajouter une carte du monde</span>'}
          </div>
        </div>

      </div>
    `);

    if (mapImg) {
      const thumb = document.querySelector('.map-thumb');
      if (thumb) thumb.addEventListener('click', function() { openMapModal(mapImg); });
    }
  }

  // ── Page calendrier ─────────────────────────────────────────────────────

  function renderCalendrier() {
    const m = CODEX.meta;
    const sessionEntries = (CODEX.sections.sessions && CODEX.sections.sessions.entries) || [];

    const upcomingRows = (m.upcoming && m.upcoming.length)
      ? m.upcoming.map(e => `
        <div class="cal-event-row">
          <div class="event-date">
            <span class="event-day">${esc(e.day)}</span>
            <span class="event-month">${esc(e.month)}</span>
          </div>
          <div class="event-info">
            <strong>${esc(e.title)}</strong>
            <p>${e.desc ? esc(e.desc) : 'Date confirmée'}</p>
          </div>
          <span class="cal-badge upcoming">À venir</span>
        </div>`).join('')
      : '<p class="cal-empty">Aucun événement planifié.</p>';

    const pastRows = sessionEntries.slice().reverse().map(s => `
      <div class="cal-event-row cal-event-link" onclick="location.hash='#/sessions/${esc(s.id)}'">
        <div class="event-date">
          <span class="event-day">${esc(s.day)}</span>
          <span class="event-month">${esc(s.month)}</span>
        </div>
        <div class="event-info">
          <strong>${esc(s.title)}</strong>
          <p>${esc(s.subtitle)}</p>
        </div>
        <span class="cal-badge done">Voir →</span>
      </div>`).join('');

    setContent(`
      <div class="section-page">
        <div class="view-header">
          <div>
            <h2>📅 Calendrier</h2>
            <p>Suivi des sessions et événements à venir.</p>
          </div>
          <span class="view-count">${m.sessions} session${m.sessions !== 1 ? 's' : ''} jouée${m.sessions !== 1 ? 's' : ''}</span>
        </div>

        <div class="cal-block">
          <div class="cal-block-title">
            <i class="fa-regular fa-clock"></i> Événements à venir
          </div>
          ${upcomingRows}
        </div>

        <div class="cal-block">
          <div class="cal-block-title">
            <i class="fa-solid fa-scroll"></i> Historique des sessions
          </div>
          ${pastRows}
        </div>
      </div>
    `);
  }

  // ── Page notes ──────────────────────────────────────────────────────────

  function renderNotes() {
    const notes = CODEX.meta.recentNotes || [];

    const rows = notes.length
      ? notes.map(n => `
        <div class="note-full-row">
          <span class="note-full-icon">${n.icon || '📝'}</span>
          <div class="note-full-body">
            <strong>${esc(n.title)}</strong>
            <span class="note-full-when">${esc(n.when)}</span>
          </div>
        </div>`).join('')
      : '<p class="cal-empty">Aucune note pour l\'instant.</p>';

    setContent(`
      <div class="section-page">
        <div class="view-header">
          <div>
            <h2>📝 Notes</h2>
            <p>Récapitulatif des événements et découvertes notables.</p>
          </div>
          <span class="view-count">${notes.length} note${notes.length !== 1 ? 's' : ''}</span>
        </div>
        <div class="cal-block">
          <div class="cal-block-title">
            <i class="fa-regular fa-file-lines"></i> Toutes les notes
          </div>
          ${rows}
        </div>
      </div>
    `);
  }

  // ── Page section (liste d'entrées) ───────────────────────────────────────

  function renderSection(key, activeTag) {
    const sec = CODEX.sections[key];
    if (!sec) return renderHome();

    const allTags = collectTags(sec.entries);
    const filtered = activeTag
      ? sec.entries.filter(e => (e.tags || []).includes(activeTag))
      : sec.entries;

    const filterBar = allTags.length ? `
      <div class="filter-bar">
        <button class="filter-chip${!activeTag ? ' active' : ''}"
          onclick="window.filterSection('${esc(key)}', null)">Tous</button>
        ${allTags.map(t => `
          <button class="filter-chip${activeTag === t ? ' active' : ''}"
            onclick="window.filterSection('${esc(key)}', '${esc(t).replace(/'/g, "\\'")}')">
            ${esc(t)}
          </button>`).join('')}
      </div>` : '';

    let body;
    if (!filtered.length) {
      body = `<div class="empty"><span class="empty-icon">📭</span><p>Aucune entrée.</p></div>`;
    } else if (sec.groups && !activeTag) {
      body = sec.groups.map(g => {
        const entries = filtered.filter(e => e.group === g.key);
        if (!entries.length) return '';
        return `
          <div class="group-block">
            <div class="group-header">
              <span class="group-label">${g.icon} ${esc(g.label)}</span>
              <span class="group-count">${entries.length}</span>
            </div>
            <div class="entry-list">${entries.map(e => rowHTML(key, e)).join('')}</div>
          </div>`;
      }).join('');
    } else {
      body = `<div class="entry-list">${filtered.map(e => rowHTML(key, e)).join('')}</div>`;
    }

    setContent(`
      <div class="section-page">
        <div class="view-header">
          <div>
            <h2>${sec.icon} ${esc(sec.label)}</h2>
            <p>${esc(sec.description)}</p>
          </div>
          <span class="view-count">${filtered.length} / ${sec.entries.length}</span>
        </div>
        ${filterBar}
        ${body}
      </div>
    `);

    window.filterSection = (k, tag) => renderSection(k, tag || undefined);
  }

  // ── Page détail (fiche) ──────────────────────────────────────────────────

  function renderEntry(key, id) {
    const sec = CODEX.sections[key];
    if (!sec) return renderHome();
    const entry = sec.entries.find(e => e.id === id);
    if (!entry) return renderSection(key);

    const groupLabel = sec.groups && entry.group
      ? sec.groups.find(g => g.key === entry.group) : null;

    const isSession = key === 'sessions';

    const facts = isSession ? [
      { label: 'Section', value: sec.label },
      entry.discovered ? { label: 'Date',   value: entry.discovered } : null,
      entry.subtitle   ? { label: 'Scènes', value: entry.subtitle }   : null,
    ].filter(Boolean) : [
      { label: 'Section',    value: sec.label },
      entry.subtitle   ? { label: 'Rôle',      value: entry.subtitle } : null,
      groupLabel       ? { label: 'Catégorie', value: groupLabel.icon + ' ' + groupLabel.label } : null,
      entry.discovered ? { label: 'Découvert', value: entry.discovered } : null,
    ].filter(Boolean);

    const infoRows = facts.map(f =>
      `<div class="info-row"><dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`
    ).join('');

    const tagsPanel = entry.tags && entry.tags.length ? `
      <div class="info-card">
        <div class="info-card-header">Tags</div>
        <div class="info-card-tags">${entry.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      </div>` : '';

    const entryImg = entry.image || ('img/' + entry.id + '.png');
    const imgPos = key === 'personnages' ? 'top center' : 'center';
    const imgBlock = isSession ? '' : `
      <div class="info-card">
        <div class="info-card-header">Illustration</div>
        <div class="card-img" style="height:160px;border-radius:0;background-image:url('${esc(entryImg)}');background-position:${imgPos}">
        </div>
      </div>`;

    setContent(`
      <div class="detail-page">
        <button class="back-btn" onclick="location.hash='#/${key}'">← ${esc(sec.label)}</button>
        <div class="detail-layout">
          <article>
            <div class="detail-header">
              <div class="detail-cat">${sec.icon} ${esc(sec.label)}</div>
              <h1>${esc(entry.title)}</h1>
              ${entry.subtitle ? `<div class="sub">${esc(entry.subtitle)}</div>` : ''}
            </div>
            <div class="detail-body">${entry.content}</div>
          </article>
          <aside class="detail-aside">
            <div class="info-card">
              <div class="info-card-header">Informations</div>
              <dl>${infoRows}</dl>
            </div>
            ${imgBlock}
            ${tagsPanel}
          </aside>
        </div>
      </div>
    `);
    document.getElementById('main-wrap').scrollTop = 0;
  }

  // ── Recherche ────────────────────────────────────────────────────────────

  function renderSearch(q) {
    const ql = q.toLowerCase();
    const results = [];
    Object.entries(CODEX.sections).forEach(([key, sec]) => {
      sec.entries.forEach(entry => {
        const hay = [entry.title, entry.subtitle, entry.summary, ...(entry.tags || [])]
          .filter(Boolean).join(' ').toLowerCase();
        if (hay.includes(ql)) results.push({ key, entry });
      });
    });

    setActiveNav('');
    setContent(`
      <div class="section-page">
        <div class="view-header">
          <div>
            <h2>Résultats</h2>
            <p>${results.length} résultat${results.length !== 1 ? 's' : ''} pour « ${esc(q)} »</p>
          </div>
        </div>
        ${results.length
          ? `<div class="entry-list">${results.map(({ key, entry }) => rowHTML(key, entry)).join('')}</div>`
          : `<div class="empty"><span class="empty-icon">🔍</span><p>Aucun résultat.</p></div>`}
      </div>
    `);
  }

  // ── Helpers ──────────────────────────────────────────────────────────────

  function rowHTML(key, entry) {
    return `
      <div class="entry-row" onclick="location.hash='#/${esc(key)}/${esc(entry.id)}'">
        <div>
          <div class="entry-top">
            <span class="entry-title">${esc(entry.title)}</span>
            ${entry.subtitle ? `<span class="entry-sub">${esc(entry.subtitle)}</span>` : ''}
            ${entry.tags && entry.tags.length
              ? `<div class="tags">${entry.tags.slice(0,3).map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>`
              : ''}
          </div>
          ${entry.summary ? `<div class="entry-summary">${esc(entry.summary)}</div>` : ''}
        </div>
        <span class="entry-arrow">→</span>
      </div>`;
  }

  function collectTags(entries) {
    const seen = new Set();
    entries.forEach(e => (e.tags || []).forEach(t => seen.add(t)));
    return Array.from(seen).sort();
  }

  function setContent(html) {
    document.getElementById('content').innerHTML = html;
  }

  function esc(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  window.openMapModal = function(src) {
    const modal = document.createElement('div');
    modal.id = 'map-modal';
    modal.innerHTML = `
      <div id="map-modal-overlay">
        <button id="map-modal-close" onclick="document.getElementById('map-modal').remove()">✕</button>
        <img src="${src}" alt="Carte du monde" id="map-modal-img">
      </div>
    `;
    modal.addEventListener('click', function(e) {
      if (e.target === modal || e.target.id === 'map-modal-overlay') modal.remove();
    });
    document.body.appendChild(modal);
  };

  document.addEventListener('DOMContentLoaded', init);
})();
