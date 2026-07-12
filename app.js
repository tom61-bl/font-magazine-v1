
    /* FONT COMPARISON */
    const fontMap = {
      serif:    { cn: 'var(--serif-cn)',    en: 'var(--serif-en)',    label: '宋体 Songti' },
      fangsong: { cn: 'var(--serif-cn)',    en: 'var(--serif-en)',    label: '仿宋 Fangsong' },
      heiti:    { cn: 'var(--sans-cn)',     en: 'var(--sans-en)',     label: '黑体 Heiti' },
      garamond: { cn: 'var(--serif-cn)',    en: 'var(--serif-en)',    label: 'Garamond' },
      bodoni:   { cn: 'var(--serif-cn)',    en: 'var(--display-en)',  label: 'Playfair Display' },
      helvetica:{ cn: 'var(--sans-cn)',     en: 'var(--sans-en)',     label: 'Lato / Helvetica' }
    };
    const EN_SAMPLES = {
      serif:    '"Typography is two-dimensional architecture."',
      fangsong: '"Good type is invisible. Bad type is everywhere."',
      heiti:    '"Less, but better." — Dieter Rams',
      garamond: '"Type is a beautiful group of letters."',
      bodoni:   '"Drama lives in the space between thick and thin."',
      helvetica:'"Form follows function." — Louis Sullivan'
    };

    const fontAEl = document.getElementById('fontA');
    const fontBEl = document.getElementById('fontB');
    const inputEl = document.getElementById('compareInput');
    const panelA  = document.getElementById('panelA');
    const panelB  = document.getElementById('panelB');
    const panelAEn = document.getElementById('panelAEn');
    const panelBEn = document.getElementById('panelBEn');
    const panelALabel = document.getElementById('panelALabel');
    const panelBLabel = document.getElementById('panelBLabel');

    function updateComparison() {
      const a = fontAEl.value, b = fontBEl.value;
      const text = inputEl.value || '字体设计';
      const lines = text.split('\n');
      panelA.style.fontFamily = fontMap[a].cn;
      panelB.style.fontFamily = fontMap[b].cn;
      panelAEn.style.fontFamily = fontMap[a].en;
      panelBEn.style.fontFamily = fontMap[b].en;
      panelA.innerHTML = lines.join('<br>');
      panelB.innerHTML = lines.join('<br>');
      panelAEn.textContent = EN_SAMPLES[a];
      panelBEn.textContent = EN_SAMPLES[b];
      panelALabel.textContent = fontMap[a].label;
      panelBLabel.textContent = fontMap[b].label;
    }
    fontAEl.addEventListener('change', updateComparison);
    fontBEl.addEventListener('change', updateComparison);
    inputEl.addEventListener('input', updateComparison);

    /* MY COLLECTION */
    const STORAGE_KEY = 'fontMagCollection';
    const collectionGrid = document.getElementById('collectionGrid');
    const collectionCount = document.getElementById('collectionCount');
    const clearBtn = document.getElementById('clearCollection');

    function loadCollection() { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
    function saveCollection(items) { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); }
    function renderCollection() {
      const saved = loadCollection();
      collectionCount.textContent = saved.length + ' font(s) saved';
      document.querySelectorAll('.collection-card').forEach(card => {
        card.classList.toggle('added', saved.includes(card.dataset.font));
      });
    }
    collectionGrid.addEventListener('click', e => {
      const card = e.target.closest('.collection-card');
      if (!card) return;
      const id = card.dataset.font;
      let saved = loadCollection();
      saved = saved.includes(id) ? saved.filter(f => f !== id) : [...saved, id];
      saveCollection(saved);
      renderCollection();
    });
    clearBtn.addEventListener('click', () => {
      if (confirm('清空全部收藏？')) { saveCollection([]); renderCollection(); }
    });
    renderCollection();

    /* FONT QUIZ */
    const quizResultMap = {
      'serif-cn': {
        name: '宋体', en: 'Songti / Ming Typeface',
        match: '匹配度 98% — 正文字体之王',
        desc: '宋体是中文正文字体的绝对主角，横细竖粗的衬脚让视线自然流动，极适合长篇阅读。如果你需要排版书籍、学术论文、正式出版物，宋体是不二之选。',
        sample: '明月几时有\n把酒问青天', css: 'var(--serif-cn)',
        tags: ['正文字体', '书籍排版', 'Formal', 'Long-form']
      },
      'sans-cn': {
        name: '黑体', en: 'Heiti / Sans-Serif',
        match: '匹配度 96% — 屏幕时代的主角',
        desc: '黑体的笔画等粗、没有装饰，在屏幕时代统治了所有数字界面。适合App界面、网页设计、标题、海报。如果你追求现代感和功能清晰，黑体是首选。',
        sample: '无界设计\n打破边界', css: 'var(--sans-cn)',
        tags: ['界面字体', '屏幕设计', 'Modern', 'Digital']
      },
      'kaishu': {
        name: '楷书', en: 'Kaiti / Regular Script',
        match: '匹配度 95% — 人文气质满分',
        desc: '楷书保留了书法的笔触韵律，同时具有印刷字体的规整性。在品牌设计中，楷书传递传统文化和人文关怀的气质。故宫博物院、五芳斋等都在使用。',
        sample: '翰墨丹青\n书法之美', css: "'Noto Serif SC', serif",
        tags: ['书法印刷', '人文品牌', 'Cultural', 'Brand']
      },
      'zongyi': {
        name: '综艺体', en: 'Zongyi / Display',
        match: '匹配度 97% — 视觉冲击利器',
        desc: '综艺体专为「被看见」而设计，粗壮笔画和高对比度造型在远距离和高速度的环境中依然能抓住注意力。适合演唱会海报、潮流品牌、创意活动视觉。',
        sample: '破界而出\n引领潮流', css: 'var(--sans-cn)',
        tags: ['海报字体', '潮流品牌', 'Bold', 'Headline']
      },
      'garamond': {
        name: 'Garamond', en: 'Claude Garamond · 1540',
        match: '匹配度 97% — 经典中的经典',
        desc: 'Garamond 是世界上被评价最高的字体之一，源自文艺复兴时期的人文主义书写。温暖的笔画韵律、适度的粗细对比让它在任何尺寸下都保持优雅。',
        sample: 'The Art of\nLetters', css: 'var(--serif-en)',
        tags: ['Book Typography', 'Elegant', 'Classic', 'Long-form']
      },
      'bodoni': {
        name: 'Bodoni', en: 'Giambattista Bodoni · 1798',
        match: '匹配度 96% — 时尚与奢华的代名词',
        desc: 'Bodoni 以极端的粗细对比著称，纤细的衬脚在大字时极为戏剧化。Vogue、Armani、Dior 等奢侈品牌都在使用 Bodoni——它就是「优雅」的视觉定义。',
        sample: 'VOGUE\nFASHION', css: 'var(--display-en)',
        tags: ['Fashion', 'Luxury', 'Display', 'Headline']
      },
      'helvetica': {
        name: 'Helvetica', en: 'Miedinger · Hoffmann · 1957',
        match: '匹配度 95% — 理性的完美化身',
        desc: 'Helvetica 是世界上最有影响力的字体之一，瑞士设计的视觉语言。高度中性、结构清晰，让内容说话而不是字体抢戏。适合企业形象、数字产品、功能性界面。',
        sample: 'FORM\nFOLLOWS\nFUNCTION', css: 'var(--sans-en)',
        tags: ['Corporate', 'Swiss Design', 'Neutral', 'UI']
      },
      'lato': {
        name: 'Lato', en: 'Lato · Google Fonts · 2010',
        match: '匹配度 94% — 现代数字设计的宠儿',
        desc: 'Lato 是 Google Fonts 上最受欢迎的无衬线字体之一，融合了 Helvetica 的结构感和人性化的温暖笔画。适合App界面、网页正文、现代品牌。',
        sample: 'Clean\n& Precise', css: 'var(--sans-en)',
        tags: ['UI Design', 'Google Fonts', 'Modern', 'Screen']
      }
    };

    function getResult(answers) {
      const q1 = answers[1], q2 = answers[2], q3 = answers[3], q4 = answers[4];
      // Scoring logic
      if (q1 === 'a') {
        if (q4 === 'a') return 'serif-cn';
        if (q4 === 'c') return 'garamond';
        return 'lato';
      }
      if (q1 === 'b') {
        if (q2 === 'd') return 'bodoni';
        return 'zongyi';
      }
      if (q1 === 'c') {
        return 'helvetica';
      }
      if (q1 === 'd') {
        if (q4 === 'a') return 'kaishu';
        if (q4 === 'c') return 'garamond';
        return 'serif-cn';
      }
      return 'sans-cn';
    }

    let quizAnswers = {};
    let currentQ = 0;

    function showQuestion(n) {
      document.querySelectorAll('.quiz-question-block').forEach(el => el.classList.remove('active'));
      if (n <= 4) {
        document.getElementById('q' + n).classList.add('active');
        currentQ = n;
      } else {
        showResult();
      }
    }

    function answer(q, a) {
      quizAnswers[q] = a;
      showQuestion(q + 1);
    }

    function showResult() {
      const key = getResult(quizAnswers);
      const r = quizResultMap[key];
      document.querySelectorAll('.quiz-question-block').forEach(el => el.classList.remove('active'));
      document.getElementById('quizStart').classList.remove('active');
      document.getElementById('resultName').textContent = r.name;
      document.getElementById('resultName').style.fontFamily = r.css;
      document.getElementById('resultEn').textContent = r.en;
      document.getElementById('resultEn').style.fontFamily = r.css;
      document.getElementById('resultMatch').textContent = r.match;
      document.getElementById('resultDesc').textContent = r.desc;
      document.getElementById('resultSample').textContent = r.sample;
      document.getElementById('resultSample').style.fontFamily = r.css;
      document.getElementById('resultTags').innerHTML = r.tags.map(t => '<span class="font-tag">' + t + '</span>').join('');
      document.getElementById('quizResult').classList.add('active');
    }

    function restartQuiz() {
      quizAnswers = {};
      document.getElementById('quizResult').classList.remove('active');
      document.getElementById('quizStart').classList.add('active');
    }

    document.getElementById('quizStartBtn').addEventListener('click', () => {
      document.getElementById('quizStart').classList.remove('active');
      showQuestion(1);
    });


    /* LANGUAGE TOGGLE */
    const langToggle = document.getElementById('langToggle');
    const savedLang = localStorage.getItem('fmLang');
    if (savedLang === 'en') document.body.classList.add('lang-en');
    function applyLangLabel() {
      langToggle.textContent = document.body.classList.contains('lang-en') ? '中文 / EN' : 'EN / 中文';
    }
    applyLangLabel();
    langToggle.addEventListener('click', () => {
      document.body.classList.toggle('lang-en');
      localStorage.setItem('fmLang', document.body.classList.contains('lang-en') ? 'en' : 'zh');
      applyLangLabel();
    });

    /* HAMBURGER MENU */
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', open);
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
    }));

    /* SCROLL REVEAL */
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  