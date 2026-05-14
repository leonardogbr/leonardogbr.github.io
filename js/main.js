(function () {
  'use strict';

  const i18n = {
    pt: {
      nav: { about: 'Sobre', projects: 'Projetos', skills: 'Skills', contact: 'Contato' },
      hero: {
        label: 'Staff Software Engineer',
        tagline: 'Desenvolvendo software que escala e entrega valor.',
        ctaProjects: 'Ver projetos',
        ctaContact: 'Contato',
      },
      about: {
        title: 'Sobre mim',
        p1: 'Sou engenheiro de software com dez anos de experiência, apaixonado por construir produtos que escalam e geram valor. Nos últimos anos me dediquei especialmente ao desenvolvimento mobile, mas atuo de ponta a ponta: full stack (web e backend), cloud (AWS), infraestrutura e bancos de dados — do primeiro commit até o sistema em produção.',
        p2: 'Gosto de encarar desafios técnicos e de ajudar times a crescer, sempre com foco em qualidade, manutenibilidade e entrega contínua.',
      },
      projects: {
        title: 'Projetos',
        grex: {
          name: 'Grex',
          description: 'Sistema completo de gestão para igrejas: membros, eventos e operações do dia a dia. Solução full stack em produção.',
          techs: 'Angular 19, Node.js + NestJS, MySQL, Redis, Flutter, React',
        },
        oneTapDodge: {
          name: 'One Tap Dodge',
          description: 'Jogo hyper-casual para todos os públicos. Toque para trocar de pista e desviar dos obstáculos. Velocidade crescente, skins, desafios e troféus. Disponível na App Store.',
          techs: 'React Native',
        },
        zenTicTacToe: {
          name: 'Zen Tic-Tac-Toe',
          description: 'Jogo de estratégia minimalista no estilo jogo da velha. App Flutter com persistência local, interface calma e foco na partida. Disponível na App Store.',
          techs: 'Flutter, Riverpod, Hive, go_router',
        },
      },
      skills: { title: 'Skills' },
      contact: {
        title: 'Contato',
        intro: 'Veja minha trajetória no LinkedIn ou entre em contato:',
      },
    },
    en: {
      nav: { about: 'About', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
      hero: {
        label: 'Staff Software Engineer',
        tagline: 'Building software that scales and delivers value.',
        ctaProjects: 'View projects',
        ctaContact: 'Contact',
      },
      about: {
        title: 'About me',
        p1: "I'm a software engineer with ten years of experience, focused on building products that scale and deliver value. In recent years I've specialized in mobile development, while still working across the stack: full stack (web and backend), cloud (AWS), infrastructure, and databases — from first commit to production.",
        p2: 'I enjoy tackling hard technical problems and helping teams grow, with a strong focus on quality, maintainability, and continuous delivery.',
      },
      projects: {
        title: 'Projects',
        grex: {
          name: 'Grex',
          description: 'Complete church management system: members, events, and day-to-day operations. Full stack solution in production.',
          techs: 'Angular 19, Node.js + NestJS, MySQL, Redis, Flutter, React',
        },
        oneTapDodge: {
          name: 'One Tap Dodge',
          description: 'Hyper-casual game for all audiences. Tap to swap lanes and dodge obstacles. Rising speed, skins, challenges, and trophies. Available on the App Store.',
          techs: 'React Native',
        },
        zenTicTacToe: {
          name: 'Zen Tic-Tac-Toe',
          description: 'Minimalist tic-tac-toe strategy game. Flutter app with local persistence, a calm UI, and focus on the match. Available on the App Store.',
          techs: 'Flutter, Riverpod, Hive, go_router',
        },
      },
      skills: { title: 'Skills' },
      contact: {
        title: 'Contact',
        intro: 'See my experience on LinkedIn or get in touch:',
      },
    },
  };

  const projectsData = [
    {
      id: 'grex',
      nameKey: 'projects.grex.name',
      descKey: 'projects.grex.description',
      techKey: 'projects.grex.techs',
      link: 'https://grex.com.br',
      linkLabel: { pt: 'Abrir site', en: 'Open site' },
      image: 'assets/grex-logo.png',
      imageAlt: 'Grex',
    },
    {
      id: 'onetapdodge',
      nameKey: 'projects.oneTapDodge.name',
      descKey: 'projects.oneTapDodge.description',
      techKey: 'projects.oneTapDodge.techs',
      link: 'https://apps.apple.com/us/app/one-tap-dodge/id6759207009',
      linkLabel: { pt: 'App Store', en: 'App Store' },
      secondaryLink: 'https://play.google.com/store/apps/details?id=com.onetapdodge',
      secondaryLinkLabel: { pt: 'Google Play', en: 'Google Play' },
      image: 'assets/onetapdodge-banner.png',
      imageAlt: 'One Tap Dodge',
      imagePosition: 'left',
    },
    {
      id: 'zentictactoe',
      nameKey: 'projects.zenTicTacToe.name',
      descKey: 'projects.zenTicTacToe.description',
      techKey: 'projects.zenTicTacToe.techs',
      link: 'https://apps.apple.com/us/app/zen-tic-tac-toe/id6761655543',
      linkLabel: { pt: 'App Store', en: 'App Store' },
      image: 'assets/zen-tictactoe-banner.png',
      imageAlt: 'Zen Tic-Tac-Toe',
    },
  ];

  const skillsList = [
    'React Native', 'React', 'TypeScript', 'Node', 'NestJS', 'Angular', 'Flutter',
    'AWS', 'MySQL', 'Redis', 'Postgres', 'Git', 'JavaScript',
  ];

  let currentLang = localStorage.getItem('portfolio-lang') || 'pt';
  let darkMode = localStorage.getItem('portfolio-theme') === 'dark';

  function t(key) {
    const parts = key.split('.');
    let v = i18n[currentLang];
    for (const p of parts) {
      v = v && v[p];
    }
    return v != null ? v : key;
  }

  function applyLang() {
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const k = el.getAttribute('data-i18n');
      const val = t(k);
      if (val) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.value = val;
        else el.textContent = val;
      }
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      const lang = btn.getAttribute('data-lang');
      btn.classList.toggle('lang-btn--active', lang === currentLang);
      btn.setAttribute('aria-pressed', lang === currentLang);
    });
    renderProjects();
  }

  function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    const linkLabel = currentLang === 'pt' ? 'Abrir site' : 'Open site';
    grid.innerHTML = projectsData.map(function (p) {
      const name = t(p.nameKey);
      const desc = t(p.descKey);
      const techs = t(p.techKey);
      const label = p.linkLabel[currentLang] || p.linkLabel.en;
      const secondaryLabel = p.secondaryLinkLabel ? (p.secondaryLinkLabel[currentLang] || p.secondaryLinkLabel.en) : '';
      const cardClass = 'card' + (p.imagePosition ? ' card--align-' + p.imagePosition : '');
      return (
        '<article class="' + cardClass + '">' +
        '  <div class="card__media">' +
        '    <img src="' + p.image + '" alt="' + (p.imageAlt || name) + '" class="card__img" loading="lazy" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">' +
        '    <div class="card__placeholder" style="display:none;" aria-hidden="true">' + name.charAt(0) + '</div>' +
        '  </div>' +
        '  <div class="card__body">' +
        '    <h3 class="card__title">' + escapeHtml(name) + '</h3>' +
        '    <p class="card__desc">' + escapeHtml(desc) + '</p>' +
        '    <p class="card__techs">' + escapeHtml(techs) + '</p>' +
        '    <div class="card__links">' +
        '      <a href="' + escapeHtml(p.link) + '" target="_blank" rel="noopener noreferrer" class="card__link">' + escapeHtml(label) + ' →</a>' +
        (p.secondaryLink ? '      <a href="' + escapeHtml(p.secondaryLink) + '" target="_blank" rel="noopener noreferrer" class="card__link">' + escapeHtml(secondaryLabel) + ' →</a>' : '') +
        '    </div>' +
        '  </div>' +
        '</article>'
      );
    }).join('');
  }

  function escapeHtml(s) {
    const div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function renderSkills() {
    const list = document.getElementById('skills-list');
    if (!list) return;
    list.innerHTML = skillsList.map(function (s) {
      return '<span class="skill">' + escapeHtml(s) + '</span>';
    }).join('');
  }

  function applyTheme() {
    document.documentElement.classList.toggle('dark', darkMode);
    document.documentElement.classList.toggle('light', !darkMode);
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      const id = a.getAttribute('href');
      if (id === '#') return;
      a.addEventListener('click', function (e) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          document.querySelector('.nav').classList.remove('nav--open');
        }
      });
    });
  }

  function initThemeToggle() {
    var btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        darkMode = !darkMode;
        applyTheme();
      });
    }
  }

  function initLangToggle() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        currentLang = this.getAttribute('data-lang');
        localStorage.setItem('portfolio-lang', currentLang);
        applyLang();
      });
    });
  }

  function initMobileMenu() {
    var menuBtn = document.querySelector('.menu-btn');
    var nav = document.querySelector('.nav');
    if (menuBtn && nav) {
      menuBtn.addEventListener('click', function () {
        nav.classList.toggle('nav--open');
        menuBtn.setAttribute('aria-expanded', nav.classList.contains('nav--open'));
      });
      nav.querySelectorAll('.nav__link').forEach(function (link) {
        link.addEventListener('click', function () {
          nav.classList.remove('nav--open');
          menuBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  document.getElementById('year').textContent = new Date().getFullYear();
  applyTheme();
  applyLang();
  renderSkills();
  initSmoothScroll();
  initThemeToggle();
  initLangToggle();
  initMobileMenu();
})();
