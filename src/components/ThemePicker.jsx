import { themes } from "../themes";

export default function ThemePicker({ current, onChange }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
      {Object.entries(themes).map(([key, t]) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          title={t.label}
          aria-label={`${t.label} theme`}
          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${t.swatch} transition ${
            current === key
              ? "ring-2 ring-offset-2 ring-offset-gray-500 ring-white scale-110"
              : "opacity-70 hover:opacity-100"
          }`}
        />
      ))}
    </div>
  );
}