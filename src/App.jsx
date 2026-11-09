import { useState, useEffect } from "react";
import Card from "./components/Card";
import CardGrid from "./components/CardGrid";
import ThemePicker from "./components/ThemePicker";
import { pickRandomCard, cardBack, totalCards } from "./data/cards";
import { themes } from "./themes";

const CARD_ASPECT = 207 / 294;

export default function App() {
  const [cards, setCards] = useState([]);
  const [step, setStep] = useState(0);
  const [themeKey, setThemeKey] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      return saved && themes[saved] ? saved : "midnight";
    } catch {
      return "midnight";
    }
  });

  const theme = themes[themeKey];

  useEffect(() => {
    try {
      localStorage.setItem("theme", themeKey);
    } catch {}
  }, [themeKey]);

  const handleClick = () => {
    const nextStep = (step + 1) % 4;
    setStep(nextStep);

    if (nextStep === 0) {
      setCards([]);
    } else if (nextStep === 1) {
      setCards([pickRandomCard()]);
    } else {
      setCards((prev) => [...prev, pickRandomCard(prev)]);
    }
  };

  const goToPlay = (e) => {
    e.preventDefault();
    document
      .getElementById("play")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={`min-h-screen ${theme.page} flex flex-col transition-colors duration-500`}
    >
      {/* Top nav bar */}
      <header
        className={`sticky top-0 z-20 flex items-center justify-between gap-3 px-4 sm:px-6 py-3 ${theme.nav} shadow-lg transition-colors duration-500`}
      >
        {/* Logo + title: click to jump to "Play it" */}
        <a
          href="#play"
          onClick={goToPlay}
          className="flex items-center gap-2 sm:gap-3 min-w-0 cursor-pointer hover:opacity-80 active:scale-95 transition"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden ring-2 ring-white/30 shrink-0">
            <img
              src={cardBack}
              alt="Joking Hazard logo"
              className="w-full h-full object-cover scale-[1.5]"
              style={{ objectPosition: "center" }}
            />
          </div>
          <h1
            className={`text-lg sm:text-2xl font-bold truncate ${theme.title}`}
          >
            Joking Hazard
          </h1>
        </a>

        <ThemePicker current={themeKey} onChange={setThemeKey} />
      </header>

      {/* Main content: full width, same side padding as the nav */}
      <main className="flex-1 w-full px-4 sm:px-6 py-8 sm:py-10 flex flex-col gap-10">
        {/* Play it */}
        <section id="play" className="flex flex-col gap-6 scroll-mt-20">
          <h2
            className={`text-3xl sm:text-4xl font-extrabold text-left ${theme.title}`}
          >
            Play it
          </h2>

          <div className="grid grid-cols-3 gap-2 sm:gap-6 w-full max-w-[45rem] mx-auto">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{ aspectRatio: CARD_ASPECT }}
                className={`w-full rounded-lg sm:rounded-xl ${
                  cards[i] ? "" : `border-2 border-dashed ${theme.slot}`
                }`}
              >
                {cards[i] && <Card key={cards[i]} src={cards[i]} />}
              </div>
            ))}
          </div>

          <button
            onClick={handleClick}
            className={`self-center px-8 py-3 rounded-lg ${theme.button} active:scale-95 transition font-semibold`}
          >
            {step === 3 ? "Clear Cards" : "Draw Card"}
          </button>
        </section>

        {/* All cards */}
        <section className="flex flex-col gap-6">
          <h2
            className={`text-2xl sm:text-3xl font-bold text-left ${theme.title}`}
          >
            All cards ({totalCards})
          </h2>

          <CardGrid />
        </section>
      </main>
    </div>
  );
}