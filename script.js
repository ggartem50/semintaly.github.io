document.querySelectorAll(".clip").forEach(slot => {
  const video = document.createElement("video");
  Object.assign(video, { muted: true, loop: true, autoplay: true, playsInline: true });
  video.addEventListener("error", () => {
    slot.innerHTML = `<div class="clip-empty">clip coming soon</div>`;
  });
  video.src = slot.dataset.clip;
  slot.appendChild(video);
});

const KEYWORDS = new Set(["and", "break", "do", "else", "elseif", "end", "false", "for", "function", "if", "in", "local", "nil", "not", "or", "repeat", "return", "then", "true", "until", "while", "continue"]);
const BUILTINS = new Set(["game", "workspace", "script", "math", "table", "string", "task", "Vector3", "CFrame", "Instance", "Enum", "Color3", "print", "warn", "pairs", "ipairs", "typeof", "tick", "os"]);
const escape = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

document.querySelectorAll("pre code").forEach(code => {
  const src = code.textContent;
  const token = /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(\b\d+(?:\.\d+)?\b)|([A-Za-z_]\w*)/g;
  let out = "", last = 0, m;
  while ((m = token.exec(src))) {
    out += escape(src.slice(last, m.index));
    last = token.lastIndex;
    const [text, str, num, word] = m;
    let cls = null;
    if (str) cls = "str";
    else if (num) cls = "num";
    else if (KEYWORDS.has(word)) cls = "kw";
    else if (BUILTINS.has(word)) cls = "bi";
    else if (src[last] === "(") cls = "fn";
    else if (src[m.index - 1] === ".") cls = "prop";
    out += cls ? `<span class="${cls}">${escape(text)}</span>` : escape(text);
  }
  code.innerHTML = out + escape(src.slice(last));
});
