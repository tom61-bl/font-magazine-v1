/** 活字标本册设计契约：来源不是页脚装饰，而是读者追溯、修订和继续学习的入口。 */
import { ArrowUpRight, BadgeCheck, CalendarDays, ExternalLink, Image, PenLine } from "lucide-react";

type Source = { label: string; href: string };

export default function SourcePanel({ chapter, updated, sources }: { chapter: string; updated: string; sources: Source[] }) {
  return (
    <section className="source-panel" aria-label={`${chapter}的编辑与来源说明`}>
      <div className="source-panel-title">
        <p className="section-code">EDITORIAL NOTE / {chapter}</p>
        <h2>每一次观察，<br /><i>都应该找到来处。</i></h2>
      </div>
      <div className="source-panel-grid">
        <div className="source-meta"><BadgeCheck size={17} /><div><span>编辑与核对</span><b>字研室编辑部</b></div><CalendarDays size={17} /><div><span>最后更新</span><b>{updated}</b></div></div>
        <div className="source-links"><span>本章参考</span>{sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer">{source.label}<ExternalLink size={13} /></a>)}</div>
        <div className="source-right"><div><Image size={16} /><p><b>图像与字体</b>本站主视觉为项目原创视觉资产；具体字体与案例素材将逐条标明许可与来源。</p></div><a href="/contribute">发现勘误或想补充案例？<ArrowUpRight size={15} /></a><div className="source-mini"><PenLine size={14} /> 内容与案例的编辑标准正在公开建设中。</div></div>
      </div>
    </section>
  );
}
