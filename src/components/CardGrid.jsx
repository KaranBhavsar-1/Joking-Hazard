import { allCards } from "../data/cards";

export default function CardGrid() {
  return (
    <div
      className="w-full grid gap-3 sm:gap-4"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))" }}
    >
      {allCards.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Card ${i + 1}`}
          loading="lazy"
          decoding="async"
          tabIndex={0}
          style={{ aspectRatio: 207 / 294 }}
          className="w-full rounded-lg shadow-md cursor-pointer outline-none
                     transition duration-300 ease-out
                     hover:-translate-y-2 hover:scale-105 hover:z-10 hover:shadow-2xl hover:ring-2 hover:ring-white/70
                     focus:-translate-y-2 focus:scale-105 focus:z-10 focus:shadow-2xl focus:ring-2 focus:ring-white/70
                     active:scale-100"
        />
      ))}
    </div>
  );
}