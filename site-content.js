/*
 * 只编辑这个文件即可更新网站内容。
 * npm run dev：修改后自动更新本地预览。
 * npm run build：生成用于 GitHub Pages 的 index.html。
 * 图片可以填 assets/images/ 中的路径，或公开图片的直接 URL；没有图片时填 ""。
 */
module.exports = {
  nameWebsite: "鱼鱼的摸猫小站", // 浏览器标签标题
  nameDisplay: "wkzmagician", // 首页大字
  nameEnglish: "Kunzhen Wu",
  tagline: "爱摸鱼的开发者",
  portrait: "", // 例如 "assets/images/portrait.jpg"

  links: [
    { label: "GitHub", url: "https://github.com/wkzMagician" },
    // { label: "博客", url: "https://example.com" },
  ],

  projects: [
    {
      title: "re0-roadmap",
      description: "把研究资料整理为可编辑的阅读路线图：用节点归纳主题、用箭头表达前置关系，并记录阅读进度。",
      image: "",
      links: [
        { label: "GitHub", url: "https://github.com/wkzMagician/re0-roadmap" },
      ],
    },
    // 复制上面的 { ... } 即可添加下一个项目。
  ],

  games: [
    // 这里与 projects 使用相同格式。
  ],

  researchs: [
    // 这里与 projects 使用相同格式。
  ],
};
