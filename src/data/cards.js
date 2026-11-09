import cardBack from "../assets/Proper cards/card_back.png";

const modules = import.meta.glob("../assets/Proper cards/*.{jpg,jpeg,png}", {
  eager: true,
  query: "?url",
  import: "default",
});

const getNumber = (path) => {
  const match = path.match(/card_(\d+)/);
  return match ? parseInt(match[1], 10) : Infinity;
};

// Skip the back image, then sort card_1 ... card_360 in order
export const allCards = Object.entries(modules)
  .filter(([path]) => !path.includes("card_back"))
  .sort(([a], [b]) => getNumber(a) - getNumber(b))
  .map(([, url]) => url);

export const totalCards = allCards.length;

export const pickRandomCard = (exclude = []) => {
  const available = allCards.filter((c) => !exclude.includes(c));
  return available[Math.floor(Math.random() * available.length)];
};

export { cardBack };

