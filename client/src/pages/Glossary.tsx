/** 活字标本册设计契约：术语表服务观察与回查，避免把专业词汇变成不必要的门槛。 */
import { ArrowUpRight, BookMarked, Search } from "lucide-react";

const TERMS = [
  { term: "衬线 / Serif", en: "Serif", text: "字形笔画末端附带的短小收笔。它会影响文字的节奏与历史感。", section: "中文 / 英文", glyph: "R" },
  { term: "非衬线 / Sans Serif", en: "Sans serif", text: "没有衬线收笔的字形类别，常以清晰轮廓和直接的节奏见长。", section: "中文 / 英文", glyph: "a" },
  { term: "字怀", en: "Counter", text: "字母或汉字笔画围出的内部空白，例如 a、e、o 之中的空间。", section: "字形结构", glyph: "o" },
  { term: "字面率", en: "X-height / apparent size", text: "字形在同一字号下看起来有多大。拉丁字母常通过 x-height 观察，中文则更多看字面与留白。", section: "字形结构", glyph: "x" },
  { term: "字重", en: "Weight", text: "笔画从细到粗的变化。字重不只改变醒目程度，也会改变页面的重心。", section: "排版参数", glyph: "W" },
  { term: "行高", en: "Line height", text: "相邻两行文字基线间的距离。它决定一段话能否舒适地呼吸。", section: "排版参数", glyph: "|" },
  { term: "字距", en: "Tracking", text: "一段文字中字符之间整体增减的间隔，和只调整一对字母关系的 kerning 不同。", section: "排版参数", glyph: "A V" },
  { term: "展示体", en: "Display type", text: "为大字号、短标题和高辨识度而设计的字体，不应默认承担长篇正文。", section: "使用场景", glyph: "G" },
];

export default function Glossary() {
  return (
    <div className="education-page glossary-page"><header className="education-header"><a href="/" className="education-brand"><span className="education-mark">字</span><span>字研室 <i>TYPE ATLAS</i></span></a><nav><a href="/">中文专题</a><a href="/latin">英文字体</a><a href="/quiz">字体测验</a>
          <a href="/pairing">配对与品牌</a>
          <a href="/learn">学习路径</a><a className="is-active" href="/glossary">术语表</a><a href="/contribute">参与项目</a></nav></header><main><section className="glossary-hero"><span className="glossary-glyph" aria-hidden="true">g</span><p className="section-code">GLOSSARY / FIRST EDITION</p><h1>把看见的东西，<br /><i>慢慢说清楚。</i></h1><p>术语不是用来制造门槛的。它只是给你一个更准确的词，让你能记下已经观察到的字形差异。</p><div><Search size={17} /><span>首期收录 08 个基础词汇 · 持续补充中</span></div></section><section className="term-grid">{TERMS.map((item, index) => <article key={item.term}><span>{String(index + 1).padStart(2, "0")} / {item.section}</span><b className="term-glyph" aria-hidden="true">{item.glyph}</b><h2>{item.term}</h2><em>{item.en}</em><p>{item.text}</p></article>)}</section><section className="glossary-footnote"><BookMarked size={22} /><p>如果有一个你想弄懂的字体术语，欢迎将它提交到项目议题。我们会优先把高频问题写成可读、可查、可继续探索的词条。</p><a href="/contribute">推荐一个术语 <ArrowUpRight size={15} /></a></section></main><footer className="education-footer"><span>字研室 · TYPE ATLAS</span><a href="/learn">返回学习路径 <ArrowUpRight size={14} /></a></footer></div>
  );
}
