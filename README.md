# 字体杂志 · The Charm of Type

一个面向艺术生的**双语（中文 / 英文）字体介绍杂志**网页。纯 HTML / CSS / JavaScript 单文件实现，无需构建步骤。

## 功能

- 📰 杂志式版式：Hero、字体分类、字体详解、字体配对、品牌案例、字体测验、我的收藏、字体对比器
- 🌐 中英双语内容（目前为写死混排；语言切换按钮尚未接入 i18n，见下方「待完善」）
- 🎛️ 交互：实时字体对比、localStorage 收藏、字体匹配测验、滚动揭示动画
- 📱 响应式（窄屏自动单列；移动端导航链接暂被隐藏，待加汉堡菜单）

## 运行

```bash
npm install
npm start
# 打开 http://localhost:3000
```

如需部署到支持环境变量的平台（如 Vercel / Railway / Render），监听端口会自动读取 `process.env.PORT`，缺失时回退到 `3000`。

## 字体来源

网页通过 [Google Fonts](https://fonts.google.com) 加载以下字体：

- 中文：Noto Sans SC、Noto Serif SC
- 英文：Cormorant Garamond、Lato、Space Grotesk、Caveat、Playfair Display

> 中文 Web 字体体积较大，国内访问可能较慢。生产环境建议自托管或保留本地字体兜底。

## 项目结构

```
.
├── index.html      # 全部内容、样式与脚本（单文件）
├── server.js       # 极简 Express 静态服务
├── package.json
└── .gitignore
```

## 待完善

- [ ] 语言切换按钮（导航栏 `EN / 中文`）未绑定逻辑，目前为装饰
- [ ] 移动端汉堡菜单（窄屏下 `.nav-links` 被 `display:none` 隐藏，无替代入口）
- [ ] favicon 与社交分享 meta（og: / twitter:）
- [ ] 拆分 `index.html` 内联的 CSS / JS 以便维护
- [ ] 自托管核心字体，降低对 Google Fonts 的依赖

## License

本项目内容仅供学习交流。字体版权归各自发行方所有，请遵循其许可协议。
