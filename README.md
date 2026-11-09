<div align="center">

# 🃏 Joking Hazard

**Draw random cards, watch them flip, and browse the whole deck.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://joking-hazard.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/KaranBhavsar-1/Joking-Hazard)

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_3.4.17-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

### 🔗 [https://joking-hazard.vercel.app](https://joking-hazard.vercel.app/)

</div>

---

## 📖 About

A web version of a Joking Hazard card-draw game, built with **React**, **Vite** and **Tailwind CSS**. Press a button to draw random cards that slide in face-down and flip over, switch between color themes, and scroll through every card in the deck.

The project started as a Pygame desktop app and was rebuilt for the browser. It works on phones, tablets and desktops.

---

## ✨ Features

- **Draw cards:** each click adds a random card. The 4th click clears the table and the cycle starts again.

  | Click | Result |
  | :---: | --- |
  | 1 | 1 card on the table |
  | 2 | 2 cards on the table |
  | 3 | 3 cards on the table |
  | 4 | Table is cleared |

- **No repeats:** the same card never appears twice on the table at once.
- **Flip animation:** every card slides in showing the card back, then rotates in 3D to reveal its face.
- **Themes:** four color themes (Midnight, Light, Forest, Sunset). Your choice is saved in `localStorage` and restored on your next visit.
- **Sticky top bar:** logo and title on the left, theme picker on the right, with a shadow underneath. Clicking the logo or title scrolls back to the "Play it" section.
- **All cards gallery:** every card in the folder, in order (`card_1` to `card_N`), with a live count such as `All cards (350)`. Cards lift and highlight on hover, tap or keyboard focus.
- **Responsive:** the three draw slots always stay side by side. The gallery adjusts its column count to the screen width and uses the full page width.
- **Fast loading:** gallery images are lazy-loaded, so the page doesn't download every card at once.

---

## 🛠 Tech Stack

| Tool | Purpose |
| --- | --- |
| [React](https://react.dev/) | UI and state |
| [Vite](https://vitejs.dev/) | Dev server and build tool |
| [Tailwind CSS 3.4.17](https://tailwindcss.com/) | Styling |
| [Vercel](https://vercel.com/) | Hosting |

---

## 📁 Project Structure

```
Joking-Hazard/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── index.css                 # Tailwind directives
    ├── App.jsx                   # Page layout, nav bar, game logic
    ├── themes.js                 # Theme color definitions
    ├── data/
    │   └── cards.js              # Loads, sorts and picks cards
    ├── components/
    │   ├── Card.jsx              # Single card with slide-in + flip animation
    │   ├── CardGrid.jsx          # "All cards" gallery
    │   └── ThemePicker.jsx       # Theme color dots
    └── assets/
        └── Proper cards/
            ├── card_1.jpg
            ├── card_2.jpg
            ├── ...
            ├── card_N.jpg
            └── card_back.png     # Card back + logo image
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (comes with Node.js)

### Run locally

```bash
# 1. Clone the repository
git clone https://github.com/KaranBhavsar-1/Joking-Hazard.git
cd Joking-Hazard

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build      # creates the dist/ folder
npm run preview    # preview the production build locally
```

---

## ☁️ Deployment

The site is deployed on **Vercel** at [joking-hazard.vercel.app](https://joking-hazard.vercel.app/).

To deploy your own copy:

1. Push the project to GitHub.
2. Import the repository on [vercel.com](https://vercel.com/new).
3. Vercel detects Vite automatically (build command `npm run build`, output folder `dist`). Click **Deploy**.

Every push to the main branch redeploys the site automatically.

> **Tip:** Vercel builds on Linux, where file names are case-sensitive. Keep the capitalization of `Proper cards`, `card_1.jpg` and `card_back.png` identical in your folder and in your code.

---

## 🔧 Setting Up From Scratch

If you're recreating the project instead of cloning it:

```bash
npm create vite@latest joking-hazard      # choose React + JavaScript
cd joking-hazard
npm install
npm install -D tailwindcss@3.4.17 postcss autoprefixer
npx tailwindcss init -p
```

`tailwind.config.js`:

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

`src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then add the files from the structure above and put your card images in `src/assets/Proper cards/`.

---

## 🃏 Managing Cards

- Put card images in `src/assets/Proper cards/`.
- Name them `card_1.jpg`, `card_2.jpg`, and so on. They are sorted by number, so `card_10` comes after `card_9`.
- Supported formats: `.jpg`, `.jpeg`, `.png`. To add more, edit the glob pattern in `src/data/cards.js`, for example `*.{jpg,jpeg,png,webp}`.
- `card_back.png` is used for the card back and the logo. It is excluded from the deck automatically, so it can never be drawn as a card.
- The card count shown on the page is calculated from the folder, so adding or removing images updates it automatically.

---

## 🎨 Customization

### Add a new theme

Open `src/themes.js` and add an entry with **full Tailwind class names** (Tailwind can't detect class names that are built dynamically):

```js
ocean: {
  label: "Ocean",
  page: "bg-sky-950",
  nav: "bg-sky-900 shadow-black/50",
  title: "text-sky-50",
  slot: "border-sky-700",
  button: "bg-cyan-500 hover:bg-cyan-400 text-white",
  swatch: "bg-cyan-500",
},
```

It shows up in the theme picker automatically.

### Card size and shape

The card ratio is set in `src/App.jsx`:

```js
const CARD_ASPECT = 207 / 294; // width / height of your card images
```

### Logo zoom

The logo is a cropped, zoomed-in version of `card_back.png`. In `App.jsx`, change the scale on the logo image:

```jsx
className="w-full h-full object-cover scale-[1.5]"
```

Higher numbers zoom in more.

### Animation speed

In `src/components/Card.jsx`:

- Flip duration: `duration-700` on the inner div
- Delay before the flip starts: the `400` in the `setTimeout`

---

## 🩹 Troubleshooting

| Problem | Fix |
| --- | --- |
| `Failed to resolve import "../themes"` | Make sure `themes.js` is directly inside `src/`, or update the import path if you moved it. Restart the dev server afterward. |
| Card count is lower than expected | Some files may have an unsupported extension (like `.webp` or `.JPG`). Add them to the glob pattern in `cards.js`. |
| `query: "?url"` error | You have an older Vite version. Replace `query: "?url"` with `as: "url"` in `cards.js`. |
| Images work locally but not on Vercel | Check file and folder name capitalization. Linux is case-sensitive, Windows is not. |
| Theme colors missing | Check that each theme uses complete Tailwind class names, not strings joined together. |
| Page looks zoomed out on mobile | Make sure `index.html` has `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`. |

---

## 👤 Author

**Karan Bhavsar**
GitHub: [@KaranBhavsar-1](https://github.com/KaranBhavsar-1)

---

## 📝 Notes

Joking Hazard is a card game created by Cyanide & Happiness (Explosm). This is an unofficial fan project made for learning. The card artwork belongs to its respective owners.