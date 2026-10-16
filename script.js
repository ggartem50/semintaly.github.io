document.querySelectorAll(".clip").forEach(slot => {
  const video = document.createElement("video");
  Object.assign(video, { muted: true, loop: true, autoplay: true, playsInline: true });
  video.addEventListener("error", () => {
    slot.innerHTML = `<div class="clip-empty">clip coming soon</div>`;
  });
  video.src = slot.dataset.clip;
  slot.appendChild(video);
});
