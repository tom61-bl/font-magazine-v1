/**
 * 活字标本册设计契约：这是一本可互动的字体美学科普读物；分类阅读与同文对比是主体验。
 */
import { useMemo, useState } from "react";
import { ArrowDownRight, ArrowUpRight, ChevronDown, Menu, ScanEye, X } from "lucide-react";
import SourcePanel from "@/components/SourcePanel";

const ASSETS = {
  hero: "/assets/type-atlas-hero.jpg",
  specimen: "/assets/type-atlas-specimen.jpg",
  comparison: "/assets/type-atlas-pairing.jpg",
  mark: "/assets/type-atlas-mark.png",
};

type Category = {
  id: "serif" | "sans" | "hand" | "display";
  no: string;
  name: string;
  english: string;
  mini: string;
  title: string;
  descriptor: string;
  definition: string;
  features: string[];
  applications: string[];
  example: string;
  cue: string;
  fontClass: string;
};

const CATEGORIES: Category[] = [
  {
    id: "serif",
    no: "01",
    name: "衬线体",
    english: "SERIF",
    mini: "宋体 · Garamond · Bodoni",
    title: "笔画有了停顿，阅读就有了节奏。",
    descriptor: "典雅、稳定、有书卷气",
    definition: "衬线体的笔画末端通常有小小的装饰性收笔。中文里的宋体是常见例子：横细竖粗、收笔带顿，让连续文字有更明确的行进感。",
    features: ["横竖常有粗细对比", "末端可见衬脚或顿笔", "适合承载较长的阅读节奏"],
    applications: ["书籍与长篇正文", "文化展览与编辑设计", "需要传统感的品牌表达"],
    example: "纸上风景",
    cue: "看笔画末端：它是否留下了一个能让视线停靠的收笔？",
    fontClass: "font-serif",
  },
  {
    id: "sans",
    no: "02",
    name: "非衬线体",
    english: "SANS SERIF",
    mini: "黑体 · Helvetica · Noto Sans",
    title: "去掉装饰，信息就更直接。",
    descriptor: "清晰、现代、干净利落",
    definition: "非衬线体不保留笔画末端的衬脚。中文黑体和许多现代无衬线字体依靠清晰轮廓、均衡的笔画与紧凑结构，在屏幕和标识中显得果断直接。",
    features: ["笔画边缘干净", "结构往往更简洁均衡", "小尺寸或快速阅读时轮廓清晰"],
    applications: ["网页、App 与信息界面", "导视与公共信息", "现代品牌与简洁标题"],
    example: "现在出发",
    cue: "看外轮廓：它是否用最少的装饰，把文字直接送到你眼前？",
    fontClass: "font-sans",
  },
  {
    id: "hand",
    no: "03",
    name: "手写体",
    english: "HANDWRITING",
    mini: "楷体 · 行书 · Script",
    title: "当笔触出现，文字就带上了人的温度。",
    descriptor: "亲近、灵动、带有手作感",
    definition: "手写体借鉴真实书写的笔势、速度与连贯性。它能让短句显得更亲密，也会因细节丰富而更需要控制使用长度与尺寸。",
    features: ["笔画保留书写方向与力度", "字形不必完全规则", "短句更容易呈现个性"],
    applications: ["邀请函与贺卡", "文化活动与包装点题", "署名、引句与短标题"],
    example: "慢慢写下",
    cue: "看笔势：它像不像一支笔正在完成一次真实的书写？",
    fontClass: "font-hand",
  },
  {
    id: "display",
    no: "04",
    name: "展示体",
    english: "DISPLAY",
    mini: "综艺体 · 海报体 · Decorative",
    title: "为了第一眼被看见，它愿意更有个性。",
    descriptor: "醒目、夸张、为标题而生",
    definition: "展示体把识别度和情绪放在首位：字形可能更粗、更窄、更方，或拥有强烈的装饰特征。它适合短而重要的文字，不适合承担长段信息。",
    features: ["轮廓和比例更具戏剧性", "远看也能先抓住注意力", "需要用短文本保留可读性"],
    applications: ["海报与活动主标题", "唱片、封面与社交视觉", "需要鲜明性格的创意品牌"],
    example: "现在开场",
    cue: "看远处：缩小后，它是否仍然保留了独特的轮廓和气势？",
    fontClass: "font-display",
  },
];

const DEFAULT_SAMPLE = "字体不只是文字的外衣，它也在决定一句话如何被感受。";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<Category["id"]>("serif");
  const [sample, setSample] = useState(DEFAULT_SAMPLE);
  const [size, setSize] = useState(42);

  const activeCategory = useMemo(
    () => CATEGORIES.find((category) => category.id === activeCategoryId) ?? CATEGORIES[0],
    [activeCategoryId],
  );
  const previewText = sample.trim() || "在这里输入一句话";

  const navigate = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <div className="type-atlas">
      <header className="site-header" aria-label="字体的魅力主导航">
        <button className="brand-lockup" onClick={() => navigate("top")} aria-label="回到首页">
          <img src={ASSETS.mark} alt="" className="brand-mark" />
          <span className="brand-word"><b>字研室</b><em>TYPE ATLAS</em></span>
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="页面章节">
          <button onClick={() => navigate("categories")}>认识字体</button>
          <button onClick={() => navigate("compare")}>同文对比</button>
          <button onClick={() => navigate("tips")}>读字提示</button>
          <a className="topic-link" href="/latin">英文字体</a>
          <a className="nav-plain-link" href="/quiz">字体测验</a>
          <a className="nav-plain-link" href="/pairing">配对与品牌</a>
          <a className="nav-plain-link" href="/learn">学习路径</a>
          <a className="nav-plain-link" href="/contribute">参与项目</a>
        </nav>
        <div className="header-tools">
          <span className="edition-chip"><span className="edition-dot" /> 美学科普 / 01</span>
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="展开菜单">
            {menuOpen ? <X size={19} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <img className="hero-art" src={ASSETS.hero} alt="抽象的活字标本册与纸张纹理" />
          <div className="hero-wash" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-index"><span>TYPE STUDY / 2026</span><span>01—04</span></div>
            <div className="proof-kicker"><span /> 给好奇的人，一本字体美学入门</div>
            <h1 id="hero-title"><span>字体的</span><i>魅力。</i></h1>
            <p className="hero-summary">同一句话，换一种字形，就换一种语气。我们从衬线、非衬线、手写与展示体开始，看见字体如何影响阅读与感受。</p>
            <div className="hero-actions">
              <button className="ink-button" onClick={() => scrollToId("categories")}>从四类字体开始 <ArrowDownRight size={17} /></button>
              <button className="quiet-button" onClick={() => scrollToId("compare")}>输入一句话试试 <ArrowUpRight size={16} /></button>
            </div>
            <div className="hero-footnote"><span>不必先记住名字，</span><b>先学会看见它们的性格。</b></div>
          </div>
          <aside className="hero-rail" aria-label="阅读路径">
            <div><strong>04</strong><span>衬线<br />非衬线<br />手写<br />展示</span></div>
            <p>从一笔一画，看见文字的表情。</p>
          </aside>
        </section>

        <section className="intro-section" aria-labelledby="intro-title">
          <p className="section-code">A / A SMALL WAY TO LOOK</p>
          <h2 id="intro-title">字体不是文字的外衣。<br /><i>它是文字说话的语气。</i></h2>
          <div className="intro-notes">
            <p>不用急着判断“哪一种更好”。先注意它的笔画有没有收笔、结构是否克制、轮廓是否夸张。当这些特征变化时，文字给人的感觉也会变化。</p>
            <span className="proof-stamp">LOOK<br />CLOSER</span>
          </div>
        </section>

        <section className="categories-section" id="categories" aria-labelledby="categories-title">
          <div className="section-topline"><span className="section-code">01 / TYPE FAMILIES</span><span className="topline-rule" /><span className="section-state">认识四种声音</span></div>
          <div className="category-intro">
            <div>
              <p className="eyebrow">字体分类</p>
              <h2 id="categories-title">先认识它们，<br />再感受它们。</h2>
            </div>
            <p>点击任意一类字体。不要只读定义：试着先看大字样张，再回到特征和应用场景，观察你的直觉和说明是否相遇。</p>
          </div>

          <div className="family-selector" role="tablist" aria-label="字体类别">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                className={activeCategory.id === category.id ? "family-card active" : "family-card"}
                onClick={() => setActiveCategoryId(category.id)}
                role="tab"
                aria-selected={activeCategory.id === category.id}
              >
                <span className="family-no">{category.no}</span>
                <strong className={category.fontClass}>{category.name}</strong>
                <em>{category.english}</em>
                <small>{category.mini}</small>
              </button>
            ))}
          </div>

          <article className="family-detail" aria-live="polite">
            <div className="detail-margin"><span>ARCHIVE NO.</span><b>TYPE / {activeCategory.no}</b><span>{activeCategory.english}</span></div>
            <div className="detail-glyph-wrap"><span className={`detail-glyph ${activeCategory.fontClass}`} aria-hidden="true">{activeCategory.example.slice(0, 1)}</span><span className="proof-cross" aria-hidden="true">+</span></div>
            <div className="detail-main">
              <p className="eyebrow">{activeCategory.name} · {activeCategory.descriptor}</p>
              <h3 className={activeCategory.fontClass}>{activeCategory.title}</h3>
              <p className="detail-definition">{activeCategory.definition}</p>
              <div className="detail-columns">
                <div><span>形态线索</span><ul>{activeCategory.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
                <div><span>常见场景</span><ul>{activeCategory.applications.map((application) => <li key={application}>{application}</li>)}</ul></div>
              </div>
            </div>
            <aside className="detail-example"><span>短句样张</span><b className={activeCategory.fontClass}>{activeCategory.example}</b><p><ScanEye size={15} /> {activeCategory.cue}</p></aside>
          </article>
        </section>

        <section className="comparison-section" id="compare" aria-labelledby="compare-title">
          <img className="comparison-art" src={ASSETS.comparison} alt="叠放的字体校样卡和测量线" />
          <div className="comparison-veil" />
          <div className="comparison-content">
            <div className="section-topline on-dark"><span className="section-code">02 / SAME WORDS, DIFFERENT VOICES</span><span className="topline-rule" /><span className="section-state">同文对比</span></div>
            <div className="compare-heading">
              <div><p className="eyebrow">效果对比</p><h2 id="compare-title">写一句你的话，<br /><i>看它如何变声。</i></h2></div>
              <p>把同一段内容同时放进四类字体中。这里没有标准答案；你看到的差异，就是字体美学开始变得具体的时刻。</p>
            </div>

            <div className="compare-controls">
              <label className="sample-input"><span>你的文字</span><textarea value={sample} onChange={(event) => setSample(event.target.value)} maxLength={80} aria-label="输入用于字体对比的文字" /></label>
              <label className="size-control"><span>样张字号 <b>{size}px</b></span><input type="range" min="30" max="68" value={size} onChange={(event) => setSize(Number(event.target.value))} aria-label="调整样张字号" /><div><small>小</small><small>大</small></div></label>
            </div>

            <div className="comparison-grid" style={{ "--sample-size": `${size}px` } as React.CSSProperties}>
              {CATEGORIES.map((category) => (
                <button
                  type="button"
                  key={category.id}
                  className={activeCategory.id === category.id ? "comparison-card active" : "comparison-card"}
                  onClick={() => setActiveCategoryId(category.id)}
                  aria-label={`查看${category.name}的解释`}
                >
                  <span className="comparison-meta"><i>{category.no}</i><em>{category.english}</em></span>
                  <p className={category.fontClass}>{previewText}</p>
                  <span className="comparison-label">{category.name}<ChevronDown size={13} /></span>
                </button>
              ))}
            </div>
            <div className="comparison-observation"><span>此刻观察</span><p>{activeCategory.cue}</p><button onClick={() => scrollToId("categories")}>回到类别说明 <ArrowUpRight size={14} /></button></div>
          </div>
        </section>

        <section className="tips-section" id="tips" aria-labelledby="tips-title">
          <div className="tips-image"><img src={ASSETS.specimen} alt="纸张上的抽象字形标本和校样记号" /><span>FIELD NOTE / 03</span></div>
          <div className="tips-copy">
            <p className="section-code">03 / READ THE SHAPE</p>
            <h2 id="tips-title">下一次看字体，<br />不妨先问这三件事。</h2>
            <div className="question-list">
              <article><span>01</span><div><h3>它的笔画在说什么？</h3><p>粗细对比、收笔与转折，会让文字显得庄重、克制，或轻盈灵动。</p></div></article>
              <article><span>02</span><div><h3>它更适合远看，还是近读？</h3><p>标题需要轮廓和气势，长文需要稳定的阅读节奏。让字体做它擅长的事。</p></div></article>
              <article><span>03</span><div><h3>它和内容的气质一致吗？</h3><p>一场庄重展览、一条即时消息、一张生日卡，需要的声音并不相同。</p></div></article>
            </div>
            <a href="#compare" onClick={(event) => { event.preventDefault(); scrollToId("compare"); }}>带着问题，再试一句话 <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <SourcePanel chapter="中文专题 · 字体的魅力" updated="2026-08-20" sources={[
          { label: "Google Fonts Knowledge：字体知识与 CJK 分类", href: "https://fonts.google.com/knowledge" },
          { label: "Adobe：字体类别与典型使用", href: "https://www.adobe.com/uk/creativecloud/design/discover/font-types.html" },
          { label: "Monotype：常见拉丁字形风格", href: "https://www.monotype.com/resources/guide-type-styles" },
        ]} />
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><img src={ASSETS.mark} alt="" /><span>字研室<br /><i>TYPE ATLAS</i></span></div>
        <p>《字体的魅力》是一份面向初学者的互动字体美学科普读物。</p>
        <div className="footer-links"><a href="/learn">学习路径</a><a href="/glossary">术语表</a><a href="/contribute">参与项目</a><a href="#top" onClick={(event) => { event.preventDefault(); scrollToId("top"); }}>回到首页 <ArrowUpRight size={15} /></a></div>
      </footer>
    </div>
  );
}
