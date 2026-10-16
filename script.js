// Your details: edit these, the whole site updates
const SITE = {
  name:      "semintaly",
  discord:   "semintaly",
  roblox:    "https://www.roblox.com/users/1808879631/profile",
};

document.querySelectorAll("[data-site]").forEach(el => el.textContent = SITE[el.dataset.site]);
document.querySelectorAll("[data-site-href]").forEach(el => el.href = SITE[el.dataset.siteHref]);
document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
document.title = SITE.name + " · Roblox Scripter";

// Clips: play the video if the file exists, otherwise show the label
document.querySelectorAll(".clip").forEach(slot => {
  const video = document.createElement("video");
  Object.assign(video, { muted: true, loop: true, autoplay: true, playsInline: true });
  video.addEventListener("error", () => {
    slot.innerHTML = `<div class="clip-empty">${slot.dataset.label} clip coming soon</div>`;
  });
  video.src = slot.dataset.clip;
  slot.appendChild(video);
});

// Click to copy Discord name
document.querySelectorAll("[data-copy-discord]").forEach(btn => {
  btn.addEventListener("click", async () => {
    const old = btn.innerHTML;
    try {
      await navigator.clipboard.writeText(SITE.discord);
      btn.textContent = "Copied!";
    } catch {
      btn.textContent = SITE.discord;
    }
    setTimeout(() => btn.innerHTML = old, 1500);
  });
});
