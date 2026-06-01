<div align="center">

# The North Cafe Website (DEMO)

### A taste of the true north.

*An editorial, production-grade website I built from scratch for a real coffee shop in North Caloocan.*

<br>

[![My Skills](https://skillicons.dev/icons?i=html,css,js)](https://skillicons.dev)

<br>

[**🌐 Live Demo**](https://ranimelandagan.github.io/clientwebsite-demo-1/) &nbsp;·&nbsp; [**🎬 Video**](#-video-demo)

</div>

---

## ⁉️ What is this

The North Cafe is a slow-coffee and honest-food spot in North Caloocan, and this is the website I built to match the feeling of the place: warm, unhurried, and quietly premium.

The whole thing is hand-coded with plain HTML, CSS, and JavaScript. No frameworks, no libraries, no build tools. Every animation, layout, and design choice is written from the ground up. I wanted to prove to myself that I could make something that looks like it came out of a design studio using nothing but the fundamentals done well.

---

## 🤔 What's in it

- **Cinematic hero intro** — the headline reveals line by line on load, timed to fire only once the fonts are ready so nothing flickers.
- **Scroll-triggered reveals** — sections and cards fade and rise into view with staggered timing using IntersectionObserver, not laggy scroll listeners.
- **Live menu filtering** — tap a category chip and the menu animates to filter pasta, sandwiches, sweets, or coffee.
- **Frosted-glass navigation** — the nav turns into a blurred, translucent bar once you scroll, and collapses into a full-height mobile drawer.
- **Fully responsive** — purpose-built layouts across five breakpoints, from ultrawide down to 360px phones.
- **Accessibility baked in** — keyboard navigation, an Escape-to-close menu, focus states, and a `prefers-reduced-motion` fallback that turns off animation for people who need it.
- **Real-world integrations** — direct GrabFood ordering links and an embedded, directions-ready Google Map.
- **Design details** — a film-grain texture overlay, an animated compass needle, and a color palette pulled straight from the cafe's real cups, menu, and interior.

---

## 🤖 How I built it

I'm a beginner, so I used AI as a learning tool here, mostly to explain stuff I hadn't learned yet and to talk through how to approach the design and the code. But the decisions, the build, and all the debugging were mine. I made sure I understood every piece before moving on. Less autopilot, more tutor. Building this is how I actually learned, and that was the whole point.

This isn't the first website I've made, and honestly, the earlier ones taught me everything that made this one work. My first few looked like what they were: tutorials stitched together. Generic fonts, flat colors, layouts that fell apart the second you resized the window. They worked, but they had no point of view. Looking back at them is what pushed me to actually learn design, not just code.

So this time I worked differently. I started with the brand, not the code, I studied the cafe's real cups, menu, and interior photos and pulled the actual colors from them, so that forest green, the cream, the mustard amber, all of it comes from the physical space. Then I built a design system first, setting up CSS variables for color, type, and spacing before building any sections, so the whole site stays consistent and is easy to retune. I wrote clean, semantic HTML before touching the visuals. And I saved the animation for last, on purpose, so it felt intentional and calm instead of busy.

The difference between this and my early work isn't that I learned more CSS. It's that I learned to make decisions.

---

## 📲 Stuff I would add later

- **A small CMS** so the cafe can update menu items and prices themselves without touching code.
- **Optimized images** (WebP / AVIF with `srcset`) to cut load time, since the photos are the heaviest part of the page right now.
- **A real in-site ordering flow** instead of sending people out to GrabFood.
- **Light and dark theming**, which the design-token setup already makes easy to add.
- **A Lighthouse and SEO pass** to push the performance and discoverability scores higher.

---

## 💻 How to run it

No build step, no dependencies. It's a static site:

```bash
git clone https://github.com/ranimelandagan/clientwebsite-demo-1.git
cd clientwebsite-demo-1
# open index.html in your browser
```

The easiest way is the Live Server extension in VS Code.

---

## 🎬 Video Demo

[![Watch the demo](images/video-thumbnail.png)](https://www.youtube.com/watch?v=NNgexcGnMFs)

---

<div align="center">

Part builder, part finance nerd, full time entrepreneur!

[🌐 Live Demo](https://ranimelandagan.github.io/clientwebsite-demo-1/) &nbsp;·&nbsp; [💼 LinkedIn](#)

</div>

</div>
