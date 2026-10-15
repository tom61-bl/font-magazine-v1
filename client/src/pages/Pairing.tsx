import { useState, type CSSProperties } from "react";
import { Layers, Building2 } from "lucide-react";
import { sitePath } from "@/lib/sitePath";

type Pairing = {
  num: string;
  name: string;
  tag: string;
  titleFont: string;
  titleSample: string;
  titleEn: string;
  titleCss: string;
  bodyFont: string;
  bodySample: string;
  bodyEn: string;
  bodyCss: string;
  desc: string;
};

const PAIRINGS: Pairing[] = [
  {
    num: "配对 01",
    name: "宋体 × 黑体",
    tag: "经典 · 通用 · 出版物",
    titleFont: "标题 — 宋体",
    titleSample: "字体的魅力",
    titleEn: "Songti · Headline",
    titleCss: "'Noto Serif SC', serif",
    bodyFont: "正文 — 黑体",
    bodySample: "好的字体配对\n让阅读成为享受",
    bodyEn: "Heiti · Body",
    bodyCss: "'Noto Sans SC', sans-serif",
    desc: "中文排版中最经典的配对。宋体标题传递权威和文化感，黑体正文保证屏幕和印刷的双重可读性。书籍、杂志、报告都在用这组组合。",
  },
  {
    num: "配对 02",
    name: "Garamond × Helvetica",
    tag: "高端 · 英文 · 编辑设计",
    titleFont: "标题 — Garamond",
    titleSample: "ELEGANT",
    titleEn: "Garamond · Display",
    titleCss: "'Cormorant Garamond', serif",
    bodyFont: "正文 — Helvetica",
    bodySample: "Timeless\nPrecision",
    bodyEn: "Helvetica · Body",
    bodyCss: "'Lato', sans-serif",
    desc: "英文字体中「高段位」玩家的选择。Garamond 的古典优雅配 Helvetica 的现代理性，在高端品牌和编辑设计中极为常见。",
  },
  {
    num: "配对 03",
    name: "Playfair × Lato",
    tag: "时尚 · 博客 · 现代感",
    titleFont: "标题 — Playfair Display",
    titleSample: "VOGUE",
    titleEn: "Playfair · Display",
    titleCss: "'Playfair Display', serif",
    bodyFont: "正文 — Lato",
    bodySample: "Fashion\n& Lifestyle",
    bodyEn: "Lato · Body",
    bodyCss: "'Lato', sans-serif",
    desc: "时尚博客和生活方式杂志的标配。Playfair Display 的高对比度衬线营造戏剧感，Lato 的温暖无衬线让正文阅读舒适。",
  },
  {
    num: "配对 04",
    name: "楷书 × 宋体",
    tag: "人文 · 传统 · 文化品牌",
    titleFont: "标题 — 楷书",
    titleSample: "翰墨丹青",
    titleEn: "Kaiti · Headline",
    titleCss: "'Noto Serif SC', serif",
    bodyFont: "正文 — 宋体",
    bodySample: "传统文化\n当代演绎",
    bodyEn: "Songti · Body",
    bodyCss: "'Noto Serif SC', serif",
    desc: "最具中国文化气质的配对。楷书的书法韵味传递人文情感，宋体的规整传达可信度。故宫博物院、人文品牌都在用这组组合。",
  },
  {
    num: "配对 05",
    name: "综艺体 × 黑体",
    tag: "潮流 · 活动 · 视觉冲击",
    titleFont: "标题 — 综艺体",
    titleSample: "破界而出",
    titleEn: "Zongyi · Display",
    titleCss: "'Noto Sans SC', sans-serif",
    bodyFont: "正文 — 黑体",
    bodySample: "重新定义\n字体美学",
    bodyEn: "Heiti · Body",
    bodyCss: "'Noto Sans SC', sans-serif",
    desc: "潮流设计的标配组合。综艺体标题抓眼球，黑体正文提供功能性信息。适合演唱会海报、潮流品牌、创意活动等视觉设计。",
  },
  {
    num: "配对 06",
    name: "Baskerville × Helvetica",
    tag: "高端 · 奢侈 · 精致感",
    titleFont: "标题 — Baskerville",
    titleSample: "ELEGANT",
    titleEn: "Baskerville · Display",
    titleCss: "'Cormorant Garamond', serif",
    bodyFont: "正文 — Helvetica",
    bodySample: "Timeless\nPrecision",
    bodyEn: "Swiss Sans",
    bodyCss: "'Lato', sans-serif",
    desc: "过渡衬线与瑞士无衬线的碰撞。Baskerville 的精致典雅配 Helvetica 的极简理性，是奢侈品牌和高端出版物的常用组合。",
  },
];

type Brand = {
  name: string;
  en: string;
  year: string;
  font: string;
  sample: string;
  css: string;
  bg: string;
  color: string;
  logoText: string;
  logoCss: CSSProperties;
  desc: string;
};

const BRANDS: Brand[] = [
  {
    name: "Vogue",
    en: "时尚杂志",
    year: "1892",
    font: "Bodoni",
    sample: "VOGUE",
    css: "'Playfair Display', serif",
    bg: "#1a1a1a",
    color: "#fff",
    logoText: "V",
    logoCss: { fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.5rem" },
    desc: "Vogue 选择了 Bodoni——以极端粗细对比著称的字体。纤细的衬脚和厚重的笔画形成强烈戏剧感，完美契合时尚杂志追求优雅与奢华的品牌定位。",
  },
  {
    name: "BMW",
    en: "汽车品牌",
    year: "1916",
    font: "Helvetica（定制版）",
    sample: "BMW",
    css: "'Lato', sans-serif",
    bg: "#003087",
    color: "#fff",
    logoText: "BMW",
    logoCss: { fontFamily: "'Lato', sans-serif", fontWeight: 900 },
    desc: "宝马使用高度几何化、精确的 Helvetica 风格字体。没有任何衬脚，没有任何多余装饰——完美的机械感与品牌「终极驾驶机器」的定位高度一致。",
  },
  {
    name: "Penguin Books",
    en: "出版品牌",
    year: "1935",
    font: "Garamond（定制版）",
    sample: "Penguin Books",
    css: "'Cormorant Garamond', serif",
    bg: "#fff",
    color: "#1a1a1a",
    logoText: "PENGUIN",
    logoCss: { fontFamily: "'Cormorant Garamond', serif", fontWeight: "bold", fontSize: "0.7rem" },
    desc: "Penguin Books 在 1935 年选择了 Garamond 作为品牌字体。这个决定定义了这个出版帝国数十年的视觉形象——温暖、可信、富有书卷气。",
  },
  {
    name: "纽约地铁",
    en: "城市交通",
    year: "1970",
    font: "Helvetica Bold",
    sample: "42ND STREET",
    css: "'Lato', sans-serif",
    bg: "#c0392b",
    color: "#fff",
    logoText: "NYC",
    logoCss: { fontFamily: "'Lato', sans-serif", fontWeight: 900 },
    desc: "纽约地铁识别系统采用 Helvetica 粗体，在高速移动、嘈杂的地铁环境中保持高度可读性。功能性第一的原则，让这套视觉系统在 50 年后依然在用。",
  },
  {
    name: "Volkswagen",
    en: "汽车品牌",
    year: "1937",
    font: "Futura（定制版）",
    sample: "VOLKSWAGEN",
    css: "'Lato', sans-serif",
    bg: "#1a1a1a",
    color: "#fff",
    logoText: "VOLKSWAGEN",
    logoCss: { fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: "0.5rem", letterSpacing: "0.1em" },
    desc: "大众汽车选择了 Futura——完全由几何形状构建的字体。圆形、三角形、直线，与汽车的机械美学高度呼应。",
  },
  {
    name: "Absolut Vodka",
    en: "酒类品牌",
    year: "1979",
    font: "Futura Condensed",
    sample: "ABSOLUT",
    css: "'Lato', sans-serif",
    bg: "#f5c518",
    color: "#1a1a1a",
    logoText: "ABSOLUT",
    logoCss: { fontFamily: "'Lato', sans-serif", fontWeight: "bold", fontSize: "0.6rem" },
    desc: "Absolut 的品牌字体与酒瓶形状高度契合——细长、高挑、一切都是垂直的。Futura 的几何感让品牌在数千款酒瓶中脱颖而出。",
  },
  {
    name: "The New Yorker",
    en: "杂志",
    year: "1925",
    font: "定制衬线（Janet B. Morris）",
    sample: "The New Yorker",
    css: "'Cormorant Garamond', serif",
    bg: "#1a1a1a",
    color: "#fff",
    logoText: "The New\nYorker",
    logoCss: { fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" },
    desc: "《纽约客》选择了高度定制化的衬线字体，浑圆的字形和手写感传达了杂志的文人气质和幽默感，成为杂志排版的教科书级案例。",
  },
  {
    name: "Harvard University",
    en: "学术机构",
    year: "1636",
    font: "Baskerville（学术定制版）",
    sample: "Harvard",
    css: "'Cormorant Garamond', serif",
    bg: "#a51c30",
    color: "#fff",
    logoText: "HARVARD\nUNIVERSITY",
    logoCss: { fontFamily: "'Lato', sans-serif", fontSize: "0.5rem", letterSpacing: "0.05em" },
    desc: "哈佛大学的视觉系统以 Baskerville 为基础，其古典优雅与学术权威感完美契合。一个好的字体选择，能让数百年的学术传统在视觉上一眼可辨。",
  },
  {
    name: "GitHub",
    en: "科技公司",
    year: "2008",
    font: "Roboto + 等宽字体",
    sample: "github",
    css: "'Lato', sans-serif",
    bg: "#f0f0f0",
    color: "#1a1a1a",
    logoText: "GITHUB",
    logoCss: { fontFamily: "'Courier New', monospace", fontSize: "0.5rem", letterSpacing: "0.05em" },
    desc: "GitHub 的品牌字体融合了现代无衬线（Roboto 用于 UI）和等宽字体（程序员代码感）。这组选择精准对应了开发者社区的身份认同。",
  },
];

export default function Pairing() {
  const [tab, setTab] = useState<"pairing" | "brands">("pairing");

  return (
    <div className="min-h-screen bg-[#f2f0e9] text-[#1a1a1a]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#f2f0e9]/90 backdrop-blur-sm border-b border-[#1a1a1a]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href={sitePath("/")} className="font-serif text-xl font-bold tracking-tight">字体志</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href={sitePath("/")} className="hover:opacity-60 transition">首页</a>
            <a href={sitePath("/latin")} className="hover:opacity-60 transition">拉丁字体</a>
            <a href={sitePath("/quiz")} className="hover:opacity-60 transition">字体测验</a>
            <a href={sitePath("/pairing")} className="font-medium border-b-2 border-[#1a1a1a] pb-0.5">配对与品牌</a>
            <a href={sitePath("/learn")} className="hover:opacity-60 transition">学习路径</a>
            <a href={sitePath("/glossary")} className="hover:opacity-60 transition">术语表</a>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">字体配对与品牌案例</h1>
          <p className="text-sm text-[#1a1a1a]/50 font-serif italic">Font Pairing & Brand Typography</p>
        </div>

        {/* Tab Switch */}
        <div className="flex justify-center gap-2 mb-12">
          <button
            onClick={() => setTab("pairing")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition ${
              tab === "pairing" ? "bg-[#1a1a1a] text-[#f2f0e9]" : "bg-white text-[#1a1a1a]/60 hover:bg-[#1a1a1a]/5"
            }`}
          >
            <Layers size={14} />
            字体配对
          </button>
          <button
            onClick={() => setTab("brands")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition ${
              tab === "brands" ? "bg-[#1a1a1a] text-[#f2f0e9]" : "bg-white text-[#1a1a1a]/60 hover:bg-[#1a1a1a]/5"
            }`}
          >
            <Building2 size={14} />
            品牌案例
          </button>
        </div>

        {/* Pairings */}
        {tab === "pairing" && (
          <div className="grid gap-6">
            {PAIRINGS.map((p) => (
              <div key={p.num} className="bg-white border-2 border-[#1a1a1a]/10 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-mono text-[#1a1a1a]/40">{p.num}</span>
                    <h3 className="font-serif text-2xl font-bold mt-1">{p.name}</h3>
                  </div>
                  <span className="text-xs px-3 py-1 bg-[#1a1a1a]/5 rounded-full text-[#1a1a1a]/60 whitespace-nowrap">
                    {p.tag}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-[#f2f0e9] rounded-xl p-5">
                    <div className="text-xs text-[#1a1a1a]/40 mb-2">{p.titleFont}</div>
                    <div className="text-3xl font-bold mb-1" style={{ fontFamily: p.titleCss }}>{p.titleSample}</div>
                    <div className="text-xs text-[#1a1a1a]/40 font-mono">{p.titleEn}</div>
                  </div>
                  <div className="bg-[#f2f0e9] rounded-xl p-5">
                    <div className="text-xs text-[#1a1a1a]/40 mb-2">{p.bodyFont}</div>
                    <div className="text-xl leading-relaxed whitespace-pre-line" style={{ fontFamily: p.bodyCss }}>{p.bodySample}</div>
                    <div className="text-xs text-[#1a1a1a]/40 font-mono mt-1">{p.bodyEn}</div>
                  </div>
                </div>
                <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Brands */}
        {tab === "brands" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BRANDS.map((b) => (
              <div key={b.name} className="bg-white border-2 border-[#1a1a1a]/10 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div
                  className="h-24 flex items-center justify-center"
                  style={{ background: b.bg, color: b.color }}
                >
                  <span style={b.logoCss}>{b.logoText}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-serif text-lg font-bold">{b.name}</h3>
                    <span className="text-xs text-[#1a1a1a]/40">{b.year}</span>
                  </div>
                  <p className="text-xs text-[#1a1a1a]/40 mb-3">{b.en}</p>
                  <div className="text-xs text-[#1a1a1a]/40 mb-1">使用字体</div>
                  <div className="text-sm font-medium mb-2">{b.font}</div>
                  <div className="text-xs text-[#1a1a1a]/50 mb-2">页面上的字是替代样张，不是该品牌的字体文件。</div>
                  <div className="text-xl font-bold mb-3" style={{ fontFamily: b.css }}>{b.sample}</div>
                  <p className="text-xs text-[#1a1a1a]/50 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a]/10 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center text-xs text-[#1a1a1a]/40">
          字体志 · 字体的魅力 — Educational Purpose
        </div>
      </footer>
    </div>
  );
}
