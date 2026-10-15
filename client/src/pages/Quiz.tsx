import { useState } from "react";
import { ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import { sitePath } from "@/lib/sitePath";

type QuizResult = {
  key: string;
  name: string;
  en: string;
  match: string;
  desc: string;
  sample: string;
  css: string;
  tags: string[];
};

const RESULTS: Record<string, QuizResult> = {
  "serif-cn": {
    key: "serif-cn",
    name: "宋体",
    en: "Songti / Ming Typeface",
    match: "匹配度 98% — 正文字体之王",
    desc: "宋体是中文正文字体的绝对主角，横细竖粗的衬脚让视线自然流动，极适合长篇阅读。如果你需要排版书籍、学术论文、正式出版物，宋体是不二之选。",
    sample: "明月几时有\n把酒问青天",
    css: "'Noto Serif SC', serif",
    tags: ["正文字体", "书籍排版", "Formal", "Long-form"],
  },
  "sans-cn": {
    key: "sans-cn",
    name: "黑体",
    en: "Heiti / Sans-Serif",
    match: "匹配度 96% — 屏幕时代的主角",
    desc: "黑体的笔画等粗、没有装饰，在屏幕时代统治了所有数字界面。适合 App 界面、网页设计、标题、海报。如果你追求现代感和功能清晰，黑体是首选。",
    sample: "无界设计\n打破边界",
    css: "'Noto Sans SC', sans-serif",
    tags: ["界面字体", "屏幕设计", "Modern", "Digital"],
  },
  kaishu: {
    key: "kaishu",
    name: "楷书",
    en: "Kaiti / Regular Script",
    match: "匹配度 95% — 人文气质满分",
    desc: "楷书保留了书法的笔触韵律，同时具有印刷字体的规整性。在品牌设计中，楷书传递传统文化和人文关怀的气质。故宫博物院、五芳斋等都在使用。",
    sample: "翰墨丹青\n书法之美",
    css: "'Noto Serif SC', serif",
    tags: ["书法印刷", "人文品牌", "Cultural", "Brand"],
  },
  zongyi: {
    key: "zongyi",
    name: "综艺体",
    en: "Zongyi / Display",
    match: "匹配度 97% — 视觉冲击利器",
    desc: "综艺体专为「被看见」而设计，粗壮笔画和高对比度造型在远距离和高速度的环境中依然能抓住注意力。适合演唱会海报、潮流品牌、创意活动视觉。",
    sample: "破界而出\n引领潮流",
    css: "'Noto Sans SC', sans-serif",
    tags: ["海报字体", "潮流品牌", "Bold", "Headline"],
  },
  garamond: {
    key: "garamond",
    name: "Garamond",
    en: "Claude Garamond · 1540",
    match: "匹配度 97% — 经典中的经典",
    desc: "Garamond 是世界上被评价最高的字体之一，源自文艺复兴时期的人文主义书写。温暖的笔画韵律、适度的粗细对比让它在任何尺寸下都保持优雅。",
    sample: "The Art of\nLetters",
    css: "'Cormorant Garamond', serif",
    tags: ["Book Typography", "Elegant", "Classic", "Long-form"],
  },
  bodoni: {
    key: "bodoni",
    name: "Bodoni",
    en: "Giambattista Bodoni · 1798",
    match: "匹配度 96% — 时尚与奢华的代名词",
    desc: "Bodoni 以极端的粗细对比著称，纤细的衬脚在大字时极为戏剧化。Vogue、Armani、Dior 等奢侈品牌都在使用 Bodoni——它就是「优雅」的视觉定义。",
    sample: "VOGUE\nFASHION",
    css: "'Playfair Display', serif",
    tags: ["Fashion", "Luxury", "Display", "Headline"],
  },
  helvetica: {
    key: "helvetica",
    name: "Helvetica",
    en: "Miedinger · Hoffmann · 1957",
    match: "匹配度 95% — 理性的完美化身",
    desc: "Helvetica 是世界上最有影响力的字体之一，瑞士设计的视觉语言。高度中性、结构清晰，让内容说话而不是字体抢戏。适合企业形象、数字产品、功能性界面。",
    sample: "FORM\nFOLLOWS\nFUNCTION",
    css: "'Lato', sans-serif",
    tags: ["Corporate", "Swiss Design", "Neutral", "UI"],
  },
  lato: {
    key: "lato",
    name: "Lato",
    en: "Lato · Google Fonts · 2010",
    match: "匹配度 94% — 现代数字设计的宠儿",
    desc: "Lato 是 Google Fonts 上最受欢迎的无衬线字体之一，融合了 Helvetica 的结构感和人性化的温暖笔画。适合 App 界面、网页正文、现代品牌。",
    sample: "Clean\n& Precise",
    css: "'Lato', sans-serif",
    tags: ["UI Design", "Google Fonts", "Modern", "Screen"],
  },
};

const QUESTIONS = [
  {
    q: "你设计的东西，最主要的用途是什么？",
    options: [
      { letter: "A", text: "书籍、杂志或长篇文章的正文排版" },
      { letter: "B", text: "海报、Logo 或需要立刻抓住眼球的视觉" },
      { letter: "C", text: "App 界面、网页或数字产品" },
      { letter: "D", text: "有文化感、传统感、人文气息的设计" },
    ],
  },
  {
    q: "你希望别人感受到什么气质？",
    options: [
      { letter: "A", text: "温暖、人文、像手写的一样亲近" },
      { letter: "B", text: "精确、理性、像机器一样可靠" },
      { letter: "C", text: "权威、典雅、有历史厚重感" },
      { letter: "D", text: "大胆、戏剧化、有强烈视觉冲击" },
    ],
  },
  {
    q: "你的读者群体是？",
    options: [
      { letter: "A", text: "大众消费者，普通读者" },
      { letter: "B", text: "年轻人、创意行业、前沿受众" },
      { letter: "C", text: "专业人士、学术圈、商务人士" },
      { letter: "D", text: "高端用户、奢侈品牌、时尚受众" },
    ],
  },
  {
    q: "最后，你更偏向哪种文化气质？",
    options: [
      { letter: "A", text: "中文/东方传统，书卷气" },
      { letter: "B", text: "西方现代主义，简洁功能" },
      { letter: "C", text: "经典传统，文艺复兴感" },
      { letter: "D", text: "打破常规，创意表现" },
    ],
  },
];

function getResult(answers: Record<number, string>): string {
  const q1 = answers[1], q4 = answers[4], q2 = answers[2];
  if (q1 === "a") {
    if (q4 === "a") return "serif-cn";
    if (q4 === "c") return "garamond";
    return "lato";
  }
  if (q1 === "b") {
    if (q2 === "d") return "bodoni";
    return "zongyi";
  }
  if (q1 === "c") return "helvetica";
  if (q1 === "d") {
    if (q4 === "a") return "kaishu";
    if (q4 === "c") return "garamond";
    return "serif-cn";
  }
  return "sans-cn";
}

export default function Quiz() {
  const [stage, setStage] = useState<"start" | "question" | "result">("start");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [resultKey, setResultKey] = useState("");

  const handleAnswer = (qNum: number, letter: string) => {
    const newAnswers = { ...answers, [qNum]: letter.toLowerCase() };
    setAnswers(newAnswers);
    if (qNum < 4) {
      setCurrentQ(qNum);
    } else {
      setResultKey(getResult(newAnswers));
      setStage("result");
    }
  };

  const restart = () => {
    setStage("start");
    setCurrentQ(0);
    setAnswers({});
    setResultKey("");
  };

  const result = RESULTS[resultKey];

  return (
    <div className="min-h-screen bg-[#f2f0e9] text-[#1a1a1a]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#f2f0e9]/90 backdrop-blur-sm border-b border-[#1a1a1a]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href={sitePath("/")} className="font-serif text-xl font-bold tracking-tight">字体志</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href={sitePath("/")} className="hover:opacity-60 transition">首页</a>
            <a href={sitePath("/latin")} className="hover:opacity-60 transition">拉丁字体</a>
            <a href={sitePath("/quiz")} className="font-medium border-b-2 border-[#1a1a1a] pb-0.5">字体测验</a>
            <a href={sitePath("/pairing")} className="hover:opacity-60 transition">配对与品牌</a>
            <a href={sitePath("/learn")} className="hover:opacity-60 transition">学习路径</a>
            <a href={sitePath("/glossary")} className="hover:opacity-60 transition">术语表</a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Start Screen */}
        {stage === "start" && (
          <div className="text-center py-20">
            <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-[#f2f0e9] px-4 py-1.5 rounded-full text-xs mb-8">
              <Sparkles size={14} />
              互动测验
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 leading-tight">
              找到最适合你的字体
            </h1>
            <p className="text-lg text-[#1a1a1a]/60 mb-2 font-serif italic">
              Find Your Perfect Typeface
            </p>
            <p className="text-sm text-[#1a1a1a]/50 max-w-md mx-auto mb-12 leading-relaxed">
              回答 4 个简单问题，我会推荐最适合你的字体类型。不需要任何设计基础，跟着直觉走就好。
            </p>
            <button
              onClick={() => { setStage("question"); setCurrentQ(0); }}
              className="inline-flex items-center gap-2 bg-[#c0392b] text-white px-8 py-4 rounded-lg font-medium text-sm hover:bg-[#a93226] transition-all hover:scale-105"
            >
              开始测验
              <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* Question */}
        {stage === "question" && (
          <div className="py-12">
            {/* Progress */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-[#1a1a1a]/50 font-mono">Q{currentQ + 1} / 4</span>
                <span className="text-xs text-[#1a1a1a]/50">{Math.round(((currentQ + 1) / 4) * 100)}%</span>
              </div>
              <div className="h-1 bg-[#1a1a1a]/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#c0392b] rounded-full transition-all duration-500"
                  style={{ width: `${((currentQ + 1) / 4) * 100}%` }}
                />
              </div>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-10 leading-snug">
              {QUESTIONS[currentQ].q}
            </h2>

            <div className="space-y-3">
              {QUESTIONS[currentQ].options.map((opt) => (
                <button
                  key={opt.letter}
                  onClick={() => handleAnswer(currentQ + 1, opt.letter)}
                  className="w-full text-left p-5 bg-white border-2 border-[#1a1a1a]/10 rounded-xl hover:border-[#1a1a1a] hover:shadow-lg transition-all group flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-[#1a1a1a]/5 rounded-lg flex items-center justify-center text-sm font-mono font-bold group-hover:bg-[#c0392b] group-hover:text-white transition-colors">
                    {opt.letter}
                  </span>
                  <span className="text-sm leading-relaxed pt-1">{opt.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Result */}
        {stage === "result" && result && (
          <div className="py-12">
            <div className="text-center mb-10">
              <span className="inline-block bg-[#1a1a1a] text-[#f2f0e9] px-4 py-1.5 rounded-full text-xs mb-4">
                推荐结果
              </span>
              <h2
                className="font-serif text-6xl md:text-7xl font-bold mb-2"
                style={{ fontFamily: result.css }}
              >
                {result.name}
              </h2>
              <p className="text-sm text-[#1a1a1a]/50 font-mono mb-4">{result.en}</p>
              <p className="text-[#c0392b] font-medium text-sm">{result.match}</p>
            </div>

            <div className="bg-white border-2 border-[#1a1a1a]/10 rounded-2xl p-8 mb-8">
              <p className="text-sm leading-relaxed text-[#1a1a1a]/70 mb-6">{result.desc}</p>
              <div
                className="border-t border-[#1a1a1a]/10 pt-6 text-3xl leading-relaxed whitespace-pre-line"
                style={{ fontFamily: result.css }}
              >
                {result.sample}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {result.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-[#1a1a1a]/5 rounded-full text-xs text-[#1a1a1a]/60">
                  {tag}
                </span>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={restart}
                className="inline-flex items-center gap-2 bg-[#1a1a1a] text-[#f2f0e9] px-6 py-3 rounded-lg text-sm hover:bg-[#1a1a1a]/80 transition"
              >
                <RotateCcw size={14} />
                重新测验
              </button>
            </div>
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
