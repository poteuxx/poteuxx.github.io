const tools = {
  home: "https://poteuxx.github.io/",
  markdown: "https://poteuxx.github.io/markdown-html-editor/",
  traffic: "https://poteuxx.github.io/osint-tool-html/",
  ostiguytech: "https://poteuxx.github.io/ostiguy-tech/"
  editor: "https://poteuxx.github.io/html-editor/"
};

function loadTool(name) {
  const frame = document.getElementById("toolFrame");
  frame.src = tools[name] || "";
}
