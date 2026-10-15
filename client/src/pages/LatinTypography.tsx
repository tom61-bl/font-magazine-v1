/**
 * 活字标本册设计契约：英文字体专题以拉丁字母的骨架、衬脚与轮廓解释五类字体的美学差异。
 */
import { useMemo, useState } from "react";
import { ArrowDownRight, ArrowUpRight, ChevronDown, Menu, ScanEye, X } from "lucide-react";
import SourcePanel from "@/components/SourcePanel";
import { publicAsset, sitePath } from "@/lib/sitePath";

const ASSETS = {
  hero: publicAsset("type-atlas-latin-hero.jpg"),
  mark: publicAsset("type-atlas-mark.png"),
};

type LatinCategory = {
  id: "serif" | "sans" | "slab" | "script" | "display";
  no: string;
  name: string;
  chinese: string;
  sample: string;
  label: string;
  title: string;
  summary: string;
  markers: string[];
  settings: string[];
  cue: string;
  fontClass: string;
  glyph: string;
};

const CATEGORIES: LatinCategory[] = [
  {
    id: "serif",
    no: "01",
    name: "Serif",
    chinese: "衬线体",
    sample: "A quiet page can still speak with authority.",
    label: "样张：Libre Baskerville · 同类还有 Garamond、Georgia",
    title: "Small finishing strokes give reading a cadence.",
    summary: "Serifs are the short finishing strokes attached to letterforms. Their contrast, rhythm and small terminals can make a page feel editorial, considered and rooted in print culture.",
    markers: ["Look for small strokes at the ends of letters", "Watch thick–thin contrast in stems and curves", "Notice how the baseline feels paced rather than flat"],
    settings: ["Books and long-form reading", "Editorial layouts and cultural institutions", "Elegant or historical brand voices"],
    cue: "Look at the lowercase “e” and the feet of “R”: do the details slow your eye down?",
    fontClass: "latin-serif",
    glyph: "Rr",
  },
  {
    id: "sans",
    no: "02",
    name: "Sans Serif",
    chinese: "非衬线体",
    sample: "Clarity makes the message arrive without detours.",
    label: "样张：Space Grotesk · 同类还有 Helvetica、Futura",
    title: "Without extra strokes, the outline speaks first.",
    summary: "Sans serif type removes the finishing strokes and lets a letter’s overall construction come forward. It can feel clear, contemporary and quick to scan—especially when space is limited.",
    markers: ["No serifs at stroke endings", "A clean, often even rhythm across letters", "The shape of the word reads quickly at small sizes"],
    settings: ["Websites, apps and navigation", "Signage and compact information", "Modern, direct brand systems"],
    cue: "Squint at the word: does its silhouette stay legible before you notice the details?",
    fontClass: "latin-sans",
    glyph: "Aa",
  },
  {
    id: "slab",
    no: "03",
    name: "Slab Serif",
    chinese: "粗衬线体",
    sample: "Strong letters hold a headline in place.",
    label: "样张：Roboto Slab · 同类还有 Rockwell、Clarendon",
    title: "Block-like serifs turn a voice into a poster.",
    summary: "Slab serifs keep the idea of a serif but make it heavier and more architectural. Their thick, often rectangular terminals can give short messages a sturdy, deliberate presence.",
    markers: ["Serifs are thick and visibly structural", "Low contrast makes forms feel dense and solid", "The word often holds attention from a distance"],
    settings: ["Posters and strong headlines", "Editorial covers and campaign titles", "Brands that need warmth with weight"],
    cue: "Look at the ends of “E” and “T”: do they feel built rather than drawn?",
    fontClass: "latin-slab",
    glyph: "Tt",
  },
  {
    id: "script",
    no: "04",
    name: "Script",
    chinese: "手写体",
    sample: "A small flourish can make a note feel personal.",
    label: "样张：Dancing Script · 同类还有 Lobster、Parisienne",
    title: "When letters remember the hand that made them.",
    summary: "Script type takes visible cues from handwriting and calligraphy. Its slant, joins and flourishes can make a short phrase feel personal or ceremonial, but the same details make long passages harder to read.",
    markers: ["Letters may connect or lean together", "Stroke direction suggests a pen or brush", "Flourishes create emphasis and personality"],
    settings: ["Invitations, signatures and short quotations", "Packaging accents and event titles", "Small moments that need warmth or ceremony"],
    cue: "Follow a letter’s exit stroke: can you imagine the tool moving across the page?",
    fontClass: "latin-script",
    glyph: "&",
  },
  {
    id: "display",
    no: "05",
    name: "Display",
    chinese: "展示体",
    sample: "Make the first glance count.",
    label: "样张：Bebas Neue · 同类还有 Impact 和其他展示体",
    title: "A distinctive outline is made for the first glance.",
    summary: "Display type puts character ahead of neutrality. It may be unusually narrow, wide, decorative or forceful, which helps a brief phrase become memorable—but makes it a poor carrier for dense body text.",
    markers: ["Proportion or silhouette is intentionally unusual", "The face holds attention at large sizes", "The visual idea is stronger than long-form comfort"],
    settings: ["Posters, covers and campaign moments", "Headlines and short social visuals", "Names that need a distinctive first impression"],
    cue: "Step back from the screen: does the word still have a memorable silhouette?",
    fontClass: "latin-display",
    glyph: "Gg",
  },
];

const DEFAULT_SAMPLE = "The shape of a letter changes the tone of a message.";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function LatinTypography() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<LatinCategory["id"]>("serif");
  const [sample, setSample] = useState(DEFAULT_SAMPLE);
  const [size, setSize] = useState(35);

  const active = useMemo(() => CATEGORIES.find((category) => category.id === activeCategoryId) ?? CATEGORIES[0], [activeCategoryId]);
  const previewText = sample.trim() || "Type something here";
  const navigate = (id: string) => { setMenuOpen(false); scrollToId(id); };

  return (
    <div className="latin-atlas">
      <header className="site-header latin-header" aria-label="英文字体专题主导航">
        <a className="brand-lockup" href={sitePath("/")} aria-label="返回中文字体专题">
          <img src={ASSETS.mark} alt="" className="brand-mark" />
          <span className="brand-word"><b>字体志</b><em>字体的魅力</em></span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="英文字体专题章节">
          <button onClick={() => navigate("latin-families")}>认识五类</button>
          <button onClick={() => navigate("latin-compare")}>同文对比</button>
          <button onClick={() => navigate("latin-tips")}>观察字母</button>
          <a className="topic-link" href={sitePath("/")}>中文专题</a>
          <a className="nav-plain-link" href={sitePath("/quiz")}>字体测验</a>
          <a className="nav-plain-link" href={sitePath("/pairing")}>配对与品牌</a>
          <a className="nav-plain-link" href={sitePath("/learn")}>学习路径</a>
          <a className="nav-plain-link" href={sitePath("/contribute")}>参与项目</a>
        </nav>
        <div className="header-tools">
          <span className="edition-chip"><span className="edition-dot" /> LATIN TYPE / 02</span>
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="展开菜单">{menuOpen ? <X size={19} /> : <Menu size={20} />}</button>
        </div>
      </header>

      <main id="latin-top">
        <section className="latin-hero" aria-labelledby="latin-hero-title">
          <img src={ASSETS.hero} alt="以拉丁字母、基线与校样记号构成的英文字体标本册" />
          <div className="latin-hero-wash" />
          <div className="latin-hero-content">
            <div className="latin-index"><span>LATIN TYPE / 2026</span><span>A—Z / 01—05</span></div>
            <div className="proof-kicker"><span /> 英文字母的形状，也在决定语气</div>
            <h1 id="latin-hero-title"><span>The Shape</span><i>of Letters.</i></h1>
            <p>从一个字母的衬脚、字腔、粗细与斜度开始，认识五类常见英文字体。不是为了背名字，而是为了看清它们为什么给人不同的感觉。</p>
            <div className="hero-actions"><button className="ink-button" onClick={() => navigate("latin-families")}>从五类字体开始 <ArrowDownRight size={17} /></button><button className="quiet-button" onClick={() => navigate("latin-compare")}>Type a sentence <ArrowUpRight size={16} /></button></div>
            <div className="latin-hero-note"><span>LETTERFORM /</span><b>SEE THE SKELETON, THEN HEAR THE VOICE.</b></div>
          </div>
          <div className="latin-axis" aria-hidden="true"><span>ASCENDER</span><span>X-HEIGHT</span><span>BASELINE</span></div>
        </section>

        <section className="latin-intro">
          <p className="section-code">A / LOOK AT THE FORM</p>
          <h2>Letters carry more than words.<br /><i>They carry a posture.</i></h2>
          <div><p>Serif、Sans Serif、Slab Serif、Script 与 Display 是认识拉丁字形的实用起点，而不是唯一答案。先观察可见的形态，再用类别帮助自己把感受说清楚。</p><span className="proof-stamp">NOTICE<br />THE FORM</span></div>
        </section>

        <section className="latin-families" id="latin-families" aria-labelledby="latin-families-title">
          <div className="section-topline"><span className="section-code">01 / TYPE FAMILIES</span><span className="topline-rule" /><span className="section-state">五种字母性格</span></div>
          <div className="latin-family-heading"><div><p className="eyebrow">字体分类</p><h2 id="latin-families-title">看轮廓，也看<br />它留下的细节。</h2></div><p>点击任意类别。从巨大的字母骨架开始，再看它的形态线索与适用场景。你会发现分类不是标签，而是一种观察方式。</p></div>
          <div className="latin-selector" role="tablist" aria-label="英文字体类别">
            {CATEGORIES.map((category) => <button key={category.id} className={active.id === category.id ? "latin-tab active" : "latin-tab"} onClick={() => setActiveCategoryId(category.id)} role="tab" aria-selected={active.id === category.id}><span>{category.no}</span><b className={category.fontClass}>{category.name}</b><em>{category.chinese}</em></button>)}
          </div>
          <article className="latin-detail" aria-live="polite">
            <aside className="latin-detail-meta"><span>SPECIMEN FILE</span><b>LAT / {active.no}</b><span>{active.name.toUpperCase()}</span></aside>
            <div className="latin-glyph-area"><span className={`latin-glyph ${active.fontClass}`}>{active.glyph}</span><span className="latin-baseline" /><span className="latin-cross">+</span></div>
            <div className="latin-detail-copy"><p className="eyebrow">{active.name} · {active.chinese}</p><h3 className={active.fontClass}>{active.title}</h3><p className="latin-summary">{active.summary}</p><div className="latin-detail-lists"><div><span>Look for</span><ul>{active.markers.map((marker) => <li key={marker}>{marker}</li>)}</ul></div><div><span>Works well in</span><ul>{active.settings.map((setting) => <li key={setting}>{setting}</li>)}</ul></div></div></div>
            <aside className="latin-sentence"><span>SHORT SPECIMEN</span><b className={active.fontClass}>{active.sample}</b><p><ScanEye size={15} /> {active.cue}</p><small className="stand-in-note">{active.label}</small></aside>
          </article>
        </section>

        <section className="latin-compare" id="latin-compare" aria-labelledby="latin-compare-title">
          <div className="section-topline on-dark"><span className="section-code">02 / SAME WORDS, DIFFERENT FORMS</span><span className="topline-rule" /><span className="section-state">同文对比</span></div>
          <div className="latin-compare-heading"><div><p className="eyebrow">效果对比</p><h2 id="latin-compare-title">Type a sentence.<br /><i>Watch its posture change.</i></h2></div><p>输入一句英文，让同样的内容以五种字形同时出现。点按样张可以回到上方，继续理解你刚刚看到的差异。</p></div>
          <div className="latin-controls"><label><span>YOUR WORDS</span><textarea value={sample} onChange={(event) => setSample(event.target.value)} maxLength={100} aria-label="输入用于英文字体对比的文字" /></label><label className="latin-size"><span>SPECIMEN SIZE <b>{size}px</b></span><input type="range" min="26" max="60" value={size} onChange={(event) => setSize(Number(event.target.value))} aria-label="调整英文字体样张字号" /><div><small>SMALL</small><small>LARGE</small></div></label></div>
          <div className="latin-compare-grid" style={{ "--latin-size": `${size}px` } as React.CSSProperties}>{CATEGORIES.map((category) => <button key={category.id} className={active.id === category.id ? "latin-compare-card active" : "latin-compare-card"} onClick={() => setActiveCategoryId(category.id)}><span><i>{category.no}</i><em>{category.name.toUpperCase()}</em></span><p className={category.fontClass}>{previewText}</p><b>{category.chinese}<ChevronDown size={13} /></b></button>)}</div>
          <div className="latin-observation"><span>LOOK AGAIN</span><p>{active.cue}</p><button onClick={() => navigate("latin-families")}>查看这类字体 <ArrowUpRight size={14} /></button></div>
        </section>

        <section className="latin-tips" id="latin-tips" aria-labelledby="latin-tips-title">
          <div className="latin-type-poster" aria-hidden="true"><span className="latin-poster-r latin-serif">R</span><span className="latin-poster-a latin-sans">a</span><span className="latin-poster-g latin-script">g</span><i>ANATOMY<br />OF A GLANCE</i></div>
          <div className="latin-tips-copy"><p className="section-code">03 / READ THE LETTER</p><h2 id="latin-tips-title">下次看英文字体，<br />先问这三件事。</h2><div className="question-list"><article><span>01</span><div><h3>它的末端留下了什么？</h3><p>有无衬脚、衬脚的形状与粗细，都会改变字母的节奏与历史感。</p></div></article><article><span>02</span><div><h3>字母的骨架是松还是紧？</h3><p>观察字腔、x-height、字宽和重心。它们决定一行英文在页面上呼吸得多快。</p></div></article><article><span>03</span><div><h3>它适合读，还是适合被看见？</h3><p>长文需要稳定，短标题需要轮廓。让字体承担它真正擅长的任务。</p></div></article></div><a href={sitePath("/")}>回到中文字体专题 <ArrowUpRight size={16} /></a></div>
        </section>

        <SourcePanel chapter="English chapter · The Shape of Letters" updated="2026-08-20" sources={[
          { label: "Google Fonts Knowledge：Latin type anatomy", href: "https://fonts.google.com/knowledge/introducing_type/an_overview_of_latin_type_anatomy" },
          { label: "Google Fonts Knowledge：Typographic classifications", href: "https://fonts.google.com/knowledge/introducing_type/making_sense_of_typographic_classifications" },
          { label: "Monotype：A guide to type styles", href: "https://www.monotype.com/resources/guide-type-styles" },
        ]} />
      </main>

      <footer className="site-footer"><div className="footer-brand"><img src={ASSETS.mark} alt="" /><span>字体志<br /><i>字体的魅力</i></span></div><p>字体志的英文一章，看拉丁字母的形状。</p><div className="footer-links"><a href="https://tom61-bl.github.io/light-shadow/">光影志</a><a href="https://tom61-bl.github.io/color-atlas/">色彩志</a><a href={sitePath("/learn")}>学习路径</a><a href={sitePath("/glossary")}>术语表</a><a href={sitePath("/contribute")}>参与项目</a><a href={sitePath("/")}>中文专题 <ArrowUpRight size={15} /></a></div></footer>
    </div>
  );
}
