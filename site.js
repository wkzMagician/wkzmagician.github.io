(function () {
  "use strict";
  const content = window.SITE_CONTENT;
  if (!content) return;

  const byId = (id) => document.getElementById(id);
  const text = (tag, value, className) => {
    const node = document.createElement(tag);
    node.textContent = value || "";
    if (className) node.className = className;
    return node;
  };
  const link = ({ label, url }) => {
    if (!label || !url) return null;
    let destination;
    try { destination = new URL(url, window.location.href); } catch { return null; }
    if (!["http:", "https:", "mailto:"].includes(destination.protocol)) return null;
    const node = text("a", label);
    node.href = url;
    if (/^https?:\/\//i.test(url)) {
      node.target = "_blank";
      node.rel = "noopener noreferrer";
    }
    return node;
  };

  byId("name-cn").textContent = content.nameChinese || "";
  byId("name-en").textContent = content.nameEnglish || "";
  byId("tagline").textContent = content.tagline || "";
  document.title = [content.nameChinese, content.nameEnglish].filter(Boolean).join(" · ");

  const portrait = byId("portrait");
  if (content.portrait) {
    const image = document.createElement("img");
    image.alt = `${content.nameEnglish || content.nameChinese || "个人"} 的照片`;
    image.src = content.portrait;
    image.addEventListener("load", () => {
      portrait.setAttribute("aria-label", image.alt);
      portrait.append(image);
    });
  }

  for (const item of content.links || []) {
    const node = link(item);
    if (node) byId("links-list").append(node);
  }

  function renderEntries(id, entries) {
    const list = byId(id);
    if (!entries || entries.length === 0) {
      list.append(text("p", "内容待添加", "empty-state"));
      return;
    }
    for (const item of entries) {
      const article = document.createElement("article");
      article.className = "entry";
      const copy = document.createElement("div");
      copy.className = "entry-copy";
      copy.append(text("h3", item.title));
      if (item.description) copy.append(text("p", item.description, "entry-description"));
      const actions = document.createElement("div");
      actions.className = "entry-links";
      for (const value of item.links || []) {
        const node = link(value);
        if (node) actions.append(node);
      }
      if (actions.childElementCount) copy.append(actions);

      const visual = document.createElement("div");
      visual.className = "entry-visual";
      if (item.image) {
        const image = document.createElement("img");
        image.alt = `${item.title || "项目"} 的展示图片`;
        image.loading = "lazy";
        image.src = item.image;
        image.addEventListener("error", () => {
          image.remove();
          visual.classList.add("is-placeholder");
          visual.append(text("span", item.title, "entry-visual-label"));
        }, { once: true });
        visual.append(image);
      } else {
        visual.classList.add("is-placeholder");
        visual.append(text("span", item.title, "entry-visual-label"));
      }
      article.append(copy, visual);
      list.append(article);
    }
  }

  renderEntries("projects-list", content.projects);
  renderEntries("games-list", content.games);
})();
