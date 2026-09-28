# 个人主页编辑指南

这个网站使用 [Eleventy](https://www.11ty.dev/) 生成静态 HTML。**日常只编辑仓库根目录的 `site-content.js`**；`index.html` 是生成文件，不要手动修改。页面布局模板在 `src/index.njk`，样式在 `assets/portfolio.css`。

## 第一次使用

在项目目录运行：

```powershell
cd D:\FantasyProjects\my-website
npm install
npm run dev
```

终端会显示本地地址，默认是 `http://localhost:8080/`。保持命令运行，修改 `site-content.js` 后 Eleventy 会自动重新生成预览页面。要停止服务，按 `Ctrl+C`。请打开这个地址预览；旧的 `outputs/index.html` 或线上网站不会显示尚未发布的本地更改。

## 修改内容

在 `site-content.js` 中修改 `nameWebsite`（浏览器标签标题）、`nameDisplay`（首页大字）、`nameEnglish`、`tagline` 和 `links`。例如：

```js
links: [
  { label: "GitHub", url: "https://github.com/wkzMagician" },
  { label: "博客", url: "https://example.com" },
],
```

`projects`、`games` 和 `researchs` 都是条目列表，格式相同。复制已有的完整 `{ ... }` 条目，修改标题、简介、图片和链接即可。没有条目时，页面会显示“内容待添加”。

## 添加照片或项目图片

把图片放进 `assets/images/`，再填写相对路径：

```js
portrait: "assets/images/portrait.jpg",
```

项目图片填在对应条目的 `image` 字段。也可以使用公开图片的**直接链接**，如 `https://example.com/photo.jpg`。图片还没准备好时保留空字符串 `""`，页面会显示默认图形。

## 发布到 GitHub Pages

检查本地预览后，在项目目录运行：

```powershell
npm run build
git status
git add -A
git commit -m "Update website"
git push origin main
```

`npm run build` 会生成 `dist/index.html`，并把它复制到仓库根目录的 `index.html`。GitHub Pages 继续从 `main` 分支根目录发布；直接推送即可，无需 PR。`dist/` 和 `node_modules/` 不会提交到 Git。
