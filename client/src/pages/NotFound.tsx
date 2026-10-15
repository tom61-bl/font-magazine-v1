import { sitePath } from "@/lib/sitePath";

export default function NotFound() {
  return (
    <main className="education-page">
      <header className="education-header">
        <a href={sitePath("/")} className="education-brand">
          <span className="education-mark">字</span>
          <span>字体志 <i>字体的魅力</i></span>
        </a>
      </header>
      <section className="education-hero">
        <div>
          <p className="section-code">404</p>
          <h1>这一页不在这本杂志里。</h1>
          <p>地址可能写错了，或者这一节还没有排进去。</p>
          <a className="ink-button" href={sitePath("/")}>回到字体志</a>
        </div>
      </section>
    </main>
  );
}
