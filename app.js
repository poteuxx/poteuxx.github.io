const tools = {
  home: "https://poteuxx.github.io/",
  markdown: "https://poteuxx.github.io/markdown-editor/",
  traffic: "https://poteuxx.github.io/traffic-map/",
  editor: "https://poteuxx.github.io/html-editor/"
};

function loadTool(name) {
  const frame = document.getElementById("toolFrame");
  frame.src = tools[name] || "";
}
