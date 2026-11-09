import { useState, useEffect } from "react";
import { cardBack } from "../data/cards";

const face = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "contain",
  backfaceVisibility: "hidden",
  WebkitBackfaceVisibility: "hidden",
};

export default function Card({ src }) {
  const [flipped, setFlipped] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setEntered(true), 30);
    const t2 = setTimeout(() => setFlipped(true), 400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div
      className="w-full h-full transition-all duration-500 ease-out"
      style={{
        perspective: "1000px",
        opacity: entered ? 1 : 0,
        transform: entered
          ? "translateY(0) scale(1)"
          : "translateY(-60px) scale(0.7)",
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <img src={cardBack} alt="Card back" style={face} className="rounded-xl" />
        <img
          src={src}
          alt="Card front"
          style={{ ...face, transform: "rotateY(180deg)" }}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}