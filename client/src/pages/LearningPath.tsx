/** 学习路径：字形之后，接着看一段文字能不能被读下去。 */
import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, BookOpenCheck, Compass, Layers3, Milestone } from "lucide-react";
import { sitePath } from "@/lib/sitePath";

const MODULES = [
  { no: "01", status: "可阅读", title: "看见字形", detail: "从衬线、笔画、字怀、x-height 到轮廓，先建立一双能观察字形的眼睛。", links: [{ label: "中文字体入门", href: sitePath("/") }, { label: "字形解剖", href: sitePath("/#anatomy") }, { label: "英文字体入门", href: sitePath("/latin") }], icon: Compass },
  { no: "02", status: "可阅读", title: "看懂阅读", detail: "字号、行高、行长与字距如何共同决定一段文字是否愿意被读下去。", links: [{ label: "在这一页试读", href: "#reading" }], icon: BookOpenCheck },
  { no: "03", status: "征集案例", title: "看见语境", detail: "把字体放回书籍、海报、导视、包装与屏幕中，理解它为何出现在那里。", links: [{ label: "提交你看到的案例", href: sitePath("/contribute") }], icon: Layers3 },
  { no: "04", status: "建设中", title: "中英并置", detail: "在同一个版面里理解中文与英文字形如何协调大小、重量、节奏和距离。", links: [], icon: Milestone },
];

const SAMPLE = "同一行字，字号决定它占多大，行高决定它喘不喘得过气，行长决定眼睛要不要来回找，字距决定字与字之间是挤在一起还是各自站开。把下面四个旋钮拧一拧，比记住定义有用。";

export default function LearningPath() {
  const [size, setSize] = useState(18);
  const [leading, setLeading] = useState(1.8);
  const [measure, setMeasure] = useState(28);
  const [tracking, setTracking] = useState(0);

  return (
    <div className="education-page">
      <header className="education-header">
        <a href={sitePath("/")} className="education-brand"><span className="education-mark">字</span><span>字体志 <i>字体的魅力</i></span></a>
        <nav>
          <a href={sitePath("/")}>中文专题</a>
          <a href={sitePath("/latin")}>英文字体</a>
          <a href={sitePath("/quiz")}>字体测验</a>
          <a href={sitePath("/pairing")}>配对与品牌</a>
          <a className="is-active" href={sitePath("/learn")}>学习路径</a>
          <a href={sitePath("/glossary")}>术语表</a>
          <a href={sitePath("/contribute")}>参与项目</a>
        </nav>
      </header>
      <main>
        <section className="education-hero">
          <span className="education-hero-glyph" aria-hidden="true">Aa</span>
          <div>
            <p className="section-code">COURSE MAP / 01—04</p>
            <h1>不要急着记住名字。<br /><i>先学会看见文字。</i></h1>
            <p>字体志从互动分类开始，逐步走向字形、阅读、真实语境与中英混排。每一章都应让你多拥有一个能带回现实世界的观察方法。</p>
            <a className="ink-button" href="#modules">从第一章开始 <ArrowDownRight size={17} /></a>
          </div>
          <aside><span>LEARN BY</span><b>SEEING<br />→ NAMING<br />→ TESTING</b><em>不是答案库，是一条练习观察的路径。</em></aside>
        </section>
        <section className="module-section" id="modules">
          <div className="module-heading"><p className="section-code">OBSERVATION INDEX</p><h2>一堂课，<br />一个新视角。</h2></div>
          <div className="module-list">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.no}>
                  <div className="module-number">{module.no}</div>
                  <div className="module-icon"><Icon size={22} /></div>
                  <div className="module-copy">
                    <span>{module.status}</span>
                    <h3>{module.title}</h3>
                    <p>{module.detail}</p>
                    {module.links.length > 0 && (
                      <div>{module.links.map((link) => <a key={link.href} href={link.href}>{link.label}<ArrowUpRight size={14} /></a>)}</div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <section className="reading-lab" id="reading">
          <div className="reading-copy">
            <p className="section-code">02 / READ THE PARAGRAPH</p>
            <h2>看懂阅读，<br />就是看一段话能不能待住。</h2>
            <label>字号 <b>{size}px</b><input type="range" min="14" max="28" value={size} onChange={(event) => setSize(Number(event.target.value))} /></label>
            <label>行高 <b>{leading.toFixed(2)}</b><input type="range" min="1.2" max="2.4" step="0.05" value={leading} onChange={(event) => setLeading(Number(event.target.value))} /></label>
            <label>行长 <b>{measure} 字</b><input type="range" min="14" max="46" value={measure} onChange={(event) => setMeasure(Number(event.target.value))} /></label>
            <label>字距 <b>{tracking}px</b><input type="range" min="-1" max="8" step="0.5" value={tracking} onChange={(event) => setTracking(Number(event.target.value))} /></label>
          </div>
          <article
            className="reading-sample"
            style={{
              fontSize: `${size}px`,
              lineHeight: leading,
              maxWidth: `${measure}em`,
              letterSpacing: `${tracking}px`,
            }}
          >
            {SAMPLE}
          </article>
        </section>
      </main>
      <footer className="education-footer">
        <span>字体志</span>
        <a href="https://tom61-bl.github.io/light-shadow/">光影志</a>
        <a href="https://tom61-bl.github.io/color-atlas/">色彩志</a>
        <a href={sitePath("/")}>回到字体的魅力 <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  );
}
