/** 活字标本册设计契约：来源不是页脚装饰，而是读者追溯、修订和继续学习的入口。 */
import { ArrowUpRight, BadgeCheck, CalendarDays, ExternalLink, Image, PenLine } from "lucide-react";
import { sitePath } from "@/lib/sitePath";

type Source = { label: string; href: string };

export default function SourcePanel({ chapter, updated, sources }: { chapter: string; updated: string; sources: Source[] }) {
  return (
    <section className="source-panel" aria-label={`${chapter}的编辑与来源说明`}>
      <div className="source-panel-title">
        <p className="section-code">EDITORIAL NOTE / {chapter}</p>
        <h2>每一次观察，<br /><i>都应该找到来处。</i></h2>
      </div>
      <div className="source-panel-grid">
        <div className="source-meta"><BadgeCheck size={17} /><div><span>编辑与核对</span><b>字体志</b></div><CalendarDays size={17} /><div><span>最后更新</span><b>{updated}</b></div></div>
        <div className="source-links"><span>本章参考</span>{sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer">{source.label}<ExternalLink size={13} /></a>)}</div>
        <div className="source-right"><div><Image size={16} /><p><b>图像与字体</b>主视觉是项目自己的画面。中文手写样张用马善政毛笔楷书，展示样张用站酷快乐体，都是这一类的替代标本，不是那个名字所指的字库本身。英文样张同样写明了实际使用的字体。</p></div><a href={sitePath("/contribute")}>发现勘误或想补充案例？<ArrowUpRight size={15} /></a><div className="source-mini"><PenLine size={14} /> 贡献指南和议题模板在仓库里。</div></div>
      </div>
    </section>
  );
}
