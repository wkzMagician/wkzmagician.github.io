# 个人主页编辑指南

网站由 `index.html`、`assets/portfolio.css`、`site-content.js` 和 `site.js` 组成。日常更新文字、图片与链接，只需编辑仓库根目录的 **`site-content.js`**，不需要安装依赖或重新构建。

## 修改文字和链接

在 `site-content.js` 中修改 `nameChinese`、`nameEnglish` 和 `tagline`。`links` 是首页下方 Links 栏的链接列表。例如：

```js
links: [
  { label: "GitHub", url: "https://github.com/wkzMagician" },
  { label: "博客", url: "https://example.com" },
],
```

这里要填完整的 `https://` 地址。项目和游戏条目的链接也用相同格式。

## 添加照片或项目图片

把图片放进 `assets/images/`，再填相对路径：

```js
portrait: "assets/images/portrait.jpg",
```

项目图片则在对应条目的 `image` 字段填写路径。也可以填公开图片的**直接链接**，例如 `https://example.com/photo.jpg`。图片链接应直接返回 JPG、PNG、WebP 等图片内容；GitHub 仓库文件的普通浏览页面链接不能作为图片地址。图片尚未准备好时保留 `""`，页面会显示默认图形。

## 添加项目或游戏

复制 `projects` 中已有的完整 `{ ... }` 条目，修改 `title`、`description`、`image` 和 `links`。`games` 使用完全相同的格式：

```js
games: [
  {
    title: "游戏名称",
    description: "一句话介绍",
    image: "assets/images/game.jpg",
    links: [{ label: "GitHub", url: "https://github.com/你的账号/仓库名" }],
  },
],
```

每个条目都会显示成相同样式的卡片。注意保留逗号、引号和括号。

## 发布

本站使用 GitHub Pages，发布源为 `main` 分支根目录。直接在 GitHub 网页编辑 `site-content.js` 并提交到 `main`，或在本地提交后 `git push origin main`，就会自动重新发布，无需 PR。新增图片也要一起上传到 `main` 分支。通常稍等片刻并刷新页面即可看到更新。
