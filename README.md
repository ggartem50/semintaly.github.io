# Portfolio site

A plain HTML/CSS/JS site with no build step. GitHub Pages hosts it for free.

## 1. Put in your details

Open `script.js` and edit the `SITE` block at the top:

```js
const SITE = {
  name:      "YourName",
  discord:   "yourdiscord",
  roblox:    "https://www.roblox.com/users/YOUR_USER_ID/profile",
  talentHub: "https://create.roblox.com/talent",
};
```

The name, Discord and links update across the whole site. Everything else (project text, the Hire me list) is in `index.html`.

## 2. Add your clips

Drop short MP4s into `assets/clips/` with these exact names:

| File | What to record |
|---|---|
| `scp173.mp4` | 173 chasing someone, freezing when looked at, smashing a door |
| `guns.mp4` | A firefight: shooting, reloading, ADS, tracers, impacts |
| `scp018.mp4` | Throwing the ball and watching it speed up |
| `vehicles.mp4` | Driving the Humvee, the turret firing |
| `scp999.mp4` | The slime roaming, getting stood on, tickling a player |
| `armory.mp4` | Buying gear, equipping a loadout, respawning with it |

Tips:
- Keep each clip 10–30 seconds with no intro. Start on the action.
- No sound needed. Clips play muted on a loop.
- Keep each file under 25 MB, because that's the limit for drag-and-drop upload on github.com. Smaller is faster to load. HandBrake's "Web" preset at 720p works well.
- Until a clip exists, its slot says "clip coming soon".

## 3. Publish on GitHub Pages (no git knowledge needed)

1. Create an account on github.com if you don't have one.
2. Click **New repository**. Name it exactly `<your-username>.github.io` and make it **Public**.
3. On the empty repo page, click **uploading an existing file**.
4. Drag in everything inside this `Portfolio` folder: `index.html`, `style.css`, `script.js` and the `assets` folder. Click **Commit changes**.
5. Go to **Settings → Pages** and check that Source is **Deploy from a branch**, branch `main`, folder `/ (root)`.
6. Wait 1–2 minutes, then open `https://<your-username>.github.io`.

To update the site later, upload the changed files again the same way. It redeploys on its own.
