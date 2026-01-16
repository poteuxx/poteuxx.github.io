const tools = {
  home: "home.html",
  markdown: "https://poteuxx.github.io/markdown-html-editor/",
  traffic: "https://poteuxx.github.io/osint-tool-html/",
  ostiguytech: "https://poteuxx.github.io/ostiguy-tech/",
  optimise: "https://poteuxx.github.io/gaming-pc-opti-st/",
  store: "https://poteuxx.github.io/st-store/#accueil",
  solution: "https://poteuxx.github.io/st-solution/",
  ai: "https://poteuxx.github.io/ai-generation/"
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
