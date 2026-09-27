/** 活字标本册设计契约：学习路径要让读者看到下一步，而非把知识压缩成一次性的长页面。 */
import { ArrowDownRight, ArrowUpRight, BookOpenCheck, Compass, Layers3, Milestone, Quote, Sparkles } from "lucide-react";

const MODULES = [
  { no: "01", status: "可阅读", title: "看见字形", detail: "从衬线、笔画、字怀、x-height 到轮廓，先建立一双能观察字形的眼睛。", links: [{ label: "中文字体入门", href: "/" }, { label: "英文字体入门", href: "/latin" }], icon: Compass },
  { no: "02", status: "建设中", title: "看懂阅读", detail: "字号、行高、行长与字距如何共同决定一段文字是否愿意被读下去。", links: [], icon: BookOpenCheck },
  { no: "03", status: "征集案例", title: "看见语境", detail: "把字体放回书籍、海报、导视、包装与屏幕中，理解它为何出现在那里。", links: [{ label: "提交你看到的案例", href: "/contribute" }], icon: Layers3 },
  { no: "04", status: "建设中", title: "中英并置", detail: "在同一个版面里理解中文与英文字形如何协调大小、重量、节奏和距离。", links: [], icon: Milestone },
];

export default function LearningPath() {
  return (
    <div className="education-page">
      <header className="education-header"><a href="/" className="education-brand"><span className="education-mark">字</span><span>字研室 <i>TYPE ATLAS</i></span></a><nav><a href="/">中文专题</a><a href="/latin">英文字体</a><a className="is-active" href="/quiz">字体测验</a>
          <a className="is-active" href="/pairing">配对与品牌</a>
          <a className="is-active" href="/learn">学习路径</a><a href="/glossary">术语表</a><a href="/contribute">参与项目</a></nav></header>
      <main>
        <section className="education-hero"><span className="education-hero-glyph" aria-hidden="true">Aa</span><div><p className="section-code">COURSE MAP / 01—04</p><h1>不要急着记住名字。<br /><i>先学会看见文字。</i></h1><p>《字体的魅力》会从互动分类开始，逐步走向字形、阅读、真实语境与中英混排。每一章都应让你多拥有一个能带回现实世界的观察方法。</p><a className="ink-button" href="#modules">从第一章开始 <ArrowDownRight size={17} /></a></div><aside><span>LEARN BY</span><b>SEEING<br />→ NAMING<br />→ TESTING</b><em>不是答案库，是一条练习观察的路径。</em></aside></section>
        <section className="learning-principle"><Quote size={27} /><p>好的科普不替你做判断；它给你一个能反复使用的观察框架。</p><span>— 字研室的编辑原则</span></section>
        <section className="module-section" id="modules"><div className="module-heading"><p className="section-code">OBSERVATION INDEX</p><h2>一堂课，<br />一个新视角。</h2></div><div className="module-list">{MODULES.map((module) => { const Icon = module.icon; return <article key={module.no}><div className="module-number">{module.no}</div><div className="module-icon"><Icon size={22} /></div><div className="module-copy"><span>{module.status}</span><h3>{module.title}</h3><p>{module.detail}</p>{module.links.length > 0 && <div>{module.links.map((link) => <a key={link.href} href={link.href}>{link.label}<ArrowUpRight size={14} /></a>)}</div>}</div></article>; })}</div></section>
        <section className="learning-callout"><Sparkles size={23} /><div><p className="section-code">EDITORIAL RHYTHM</p><h2>接下来，我们会用具体的字体故事，<br />把每个模块逐步填满。</h2></div><a href="/contribute">推荐一件值得细读的字体案例 <ArrowUpRight size={16} /></a></section>
      </main>
      <footer className="education-footer"><span>字研室 · TYPE ATLAS</span><a href="/">回到字体的魅力 <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}
