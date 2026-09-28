/*
 * 只需编辑这个文件即可更新主页内容。
 * 图片既可以写仓库内路径，如 "assets/images/portrait.jpg"，
 * 也可以写公开图片的直接 URL，如 "https://example.com/portrait.jpg"。
 * 暂时没有图片时保留空字符串 ""，页面会显示简洁的默认图形。
 */
window.SITE_CONTENT = {
  nameChinese: "吴坤臻",
  nameEnglish: "Kunzhen Wu",
  tagline: "爱摸鱼的开发者",
  portrait: "",

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
    // 复制上面的 { ... } 即可添加下一个项目；每个项目都会生成同样样式的条目。
  ],

  games: [
    // 这里与 projects 使用相同格式。添加游戏项目后会自动显示为同样的条目。
  ],
};
