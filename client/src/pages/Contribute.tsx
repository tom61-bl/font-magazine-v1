/** 活字标本册设计契约：参与入口必须说明能做什么、如何署名、如何保护来源与版权。 */
import { ArrowUpRight, CircleCheckBig, FileWarning, Languages, Lightbulb, ScanSearch } from "lucide-react";

const GITHUB_ISSUES = "https://github.com/tom61-bl/font-magazine-v1/issues";
const LANES = [
  { no: "01", icon: ScanSearch, title: "勘误与补充来源", text: "发现分类、年代、术语或链接不准确？请告诉我们问题所在，并附上你核对过的公开来源。", label: "报告勘误" },
  { no: "02", icon: Lightbulb, title: "推荐真实案例", text: "推荐一页书、一个招牌、一张海报或一块导视。请说明地点、时间、可见字体与图片/链接来源。", label: "提交案例" },
  { no: "03", icon: Languages, title: "翻译与术语润色", text: "帮助我们让中文、英文以及未来的其他语言版本更准确、更自然，也更适合初学者。", label: "参与翻译" },
];

export default function Contribute() {
  return (
    <div className="education-page contribute-page"><header className="education-header"><a href="/" className="education-brand"><span className="education-mark">字</span><span>字研室 <i>TYPE ATLAS</i></span></a><nav><a href="/">中文专题</a><a href="/latin">英文字体</a><a href="/quiz">字体测验</a>
          <a href="/pairing">配对与品牌</a>
          <a href="/learn">学习路径</a><a href="/glossary">术语表</a><a className="is-active" href="/contribute">参与项目</a></nav></header><main><section className="contribute-hero"><span className="contribute-hero-glyph" aria-hidden="true">?</span><p className="section-code">OPEN EDITORIAL ROOM</p><h1>把你看见的字，<br /><i>带进这间编辑部。</i></h1><p>字研室希望成为一份被共同校对、共同补充的公开字体读物。开始时，我们只做三件小事：纠正事实、记录真实案例、让术语更清楚。</p><a className="ink-button" href={GITHUB_ISSUES} target="_blank" rel="noreferrer">前往 GitHub 议题 <ArrowUpRight size={17} /></a></section><section className="contribute-lanes">{LANES.map((lane) => { const Icon = lane.icon; return <article key={lane.title}><span className="contribute-lane-no">CASE {lane.no}</span><Icon size={24} /><h2>{lane.title}</h2><p>{lane.text}</p><a href={GITHUB_ISSUES} target="_blank" rel="noreferrer">{lane.label}<ArrowUpRight size={15} /></a></article>; })}</section><section className="contribution-standards"><div><FileWarning size={23} /><h2>先说明边界，才能欢迎参与。</h2></div><div className="standards-grid"><p><b>来源可追溯</b>请尽量附上原始链接、馆藏页、出版信息或你自己的拍摄说明。没有来源的事实无法成为科普内容。</p><p><b>图片与字体需尊重许可</b>“网上找得到”不等于可以再发布。提交案例时，请说明素材来源和可能的使用限制。</p><p><b>贡献会被署名</b>采纳的案例、纠错和翻译会在相关页面与仓库记录中注明贡献者；编辑可能为准确性和篇幅修改文字。</p><p><b>审核优先于规模</b>我们宁可少而可靠地发布，也不会为了填充内容收录无法核验的案例。</p></div></section><section className="contribute-end"><CircleCheckBig size={20} /><p>当前正在建立正式的贡献指南与议题模板。你的第一条建议，会帮助我们把这套规则做得更好。</p><a href="/">先从一段文字的对比开始 <ArrowUpRight size={15} /></a></section></main><footer className="education-footer"><span>字研室 · TYPE ATLAS</span><a href="/learn">查看学习路径 <ArrowUpRight size={14} /></a></footer></div>
  );
}
