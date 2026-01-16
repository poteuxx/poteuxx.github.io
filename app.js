const tools = {
  home: "home.html",
  markdown: "https://poteuxx.github.io/markdown-html-editor/",
  traffic: "https://poteuxx.github.io/osint-tool-html/",
  ostiguytech: "https://poteuxx.github.io/ostiguy-tech/",
  optimise: "https://github.com/poteuxx/gaming-pc-opti-st/",
  store: "https://github.com/poteuxx/st-store/",
  solution: "https://github.com/poteuxx/st-solution/"
};

function loadTool(name) {
  const frame = document.getElementById("toolFrame");
  const url = tools[name];

  if (!url) {
    frame.src = "about:blank";
    return;
  }

  frame.src = url;
}

// Load home automatically
window.addEventListener("load", () => {
  loadTool("home");
});
