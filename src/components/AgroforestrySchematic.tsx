"use client";

import { useState } from "react";
import { Trees, Wheat, Apple, Sprout, Droplets, PawPrint } from "lucide-react";

type ComponentKey = "crops" | "timber" | "fruit" | "fodder" | "soil" | "livestock";

const components: {
  key: ComponentKey;
  label: string;
  description: string;
  icon: typeof Trees;
  color: string;
}[] = [
  {
    key: "crops",
    label: "Food crops",
    description: "Cereals, pulses or vegetables grown in the open rows between trees.",
    icon: Wheat,
    color: "#C47A4A",
  },
  {
    key: "timber",
    label: "Timber or multipurpose trees",
    description: "Taller, slower-growing species grown for wood, poles or industrial use.",
    icon: Trees,
    color: "#173C2F",
  },
  {
    key: "fruit",
    label: "Fruit-bearing plants",
    description: "Orchard or homestead species adding a separate, often seasonal income stream.",
    icon: Apple,
    color: "#83A96B",
  },
  {
    key: "fodder",
    label: "Fodder resources",
    description: "Shrubs and grasses grown to feed livestock kept on or near the farm.",
    icon: Sprout,
    color: "#6D786E",
  },
  {
    key: "soil",
    label: "Soil and water management",
    description: "Root systems, bunds and ground cover that reduce erosion and hold moisture.",
    icon: Droplets,
    color: "#4A7A9B",
  },
  {
    key: "livestock",
    label: "Livestock, where appropriate",
    description: "Grazing or stall-fed animals integrated where fodder and space allow.",
    icon: PawPrint,
    color: "#8B5E34",
  },
];

export function AgroforestrySchematic() {
  const [active, setActive] = useState<ComponentKey | null>(null);

  const isDim = (key: ComponentKey) => active !== null && active !== key;

  return (
    <div className="rounded-2xl border border-forest/10 bg-paper p-5 md:p-8">
      <svg
        viewBox="0 0 800 340"
        className="w-full"
        role="img"
        aria-label="Illustrated cross-section of an integrated agroforestry farm, showing food crops, timber trees, fruit trees, fodder shrubs, soil and water management, and livestock sharing one plot of land"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F3EBDD" />
            <stop offset="100%" stopColor="#DCE6D5" />
          </linearGradient>
          <linearGradient id="soilGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C47A4A" />
            <stop offset="100%" stopColor="#8B5E34" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="800" height="250" fill="url(#sky)" />

        {/* Soil layer */}
        <g
          style={{ transition: "opacity 400ms ease", opacity: isDim("soil") ? 0.25 : 1 }}
          data-active={active === "soil"}
        >
          <rect x="0" y="250" width="800" height="90" fill="url(#soilGrad)" />
          <path
            d="M20 290 Q60 300 100 290 T180 292 T260 288"
            stroke="#4A7A9B"
            strokeWidth="3"
            fill="none"
            opacity="0.55"
          />
          <path
            d="M520 300 Q560 290 610 300 T700 296 T780 300"
            stroke="#4A7A9B"
            strokeWidth="3"
            fill="none"
            opacity="0.55"
          />
          {[120, 400, 650].map((x) => (
            <path
              key={x}
              d={`M${x} 250 Q${x - 18} 280 ${x - 10} 310 M${x} 250 Q${x + 18} 278 ${x + 14} 315`}
              stroke="#F3EBDD"
              strokeWidth="2.5"
              fill="none"
              opacity="0.4"
            />
          ))}
        </g>

        {/* Crop rows */}
        <g style={{ transition: "opacity 400ms ease", opacity: isDim("crops") ? 0.2 : 1 }}>
          {Array.from({ length: 14 }).map((_, i) => {
            const x = 20 + i * 56;
            if (x > 95 && x < 160) return null;
            if (x > 370 && x < 440) return null;
            if (x > 615 && x < 690) return null;
            return (
              <g key={i} transform={`translate(${x}, 236)`}>
                <path d="M0 0 Q-5 -14 0 -26 Q5 -14 0 0" fill="#83A96B" />
                <path d="M0 -6 Q-10 -16 -4 -24" stroke="#83A96B" strokeWidth="2" fill="none" />
                <path d="M0 -6 Q10 -16 4 -24" stroke="#83A96B" strokeWidth="2" fill="none" />
              </g>
            );
          })}
        </g>

        {/* Timber tree */}
        <g
          transform="translate(120, 0)"
          style={{ transition: "opacity 400ms ease", opacity: isDim("timber") ? 0.2 : 1 }}
        >
          <rect x="-6" y="150" width="12" height="100" fill="#8B5E34" />
          <ellipse cx="0" cy="110" rx="46" ry="60" fill="#173C2F" />
          <ellipse cx="-20" cy="135" rx="26" ry="32" fill="#1f4a39" />
          <ellipse cx="22" cy="140" rx="24" ry="30" fill="#1f4a39" />
        </g>

        {/* Fruit tree */}
        <g
          transform="translate(400, 0)"
          style={{ transition: "opacity 400ms ease", opacity: isDim("fruit") ? 0.2 : 1 }}
        >
          <rect x="-5" y="170" width="10" height="80" fill="#8B5E34" />
          <ellipse cx="0" cy="140" rx="40" ry="42" fill="#83A96B" />
          {[[-16, 128], [14, 120], [0, 155], [-22, 150], [20, 148]].map(([dx, dy], i) => (
            <circle key={i} cx={dx} cy={dy} r="5" fill="#C47A4A" />
          ))}
        </g>

        {/* Fodder shrub */}
        <g
          transform="translate(650, 0)"
          style={{ transition: "opacity 400ms ease", opacity: isDim("fodder") ? 0.2 : 1 }}
        >
          <rect x="-4" y="205" width="8" height="45" fill="#6D786E" />
          <rect x="18" y="215" width="7" height="35" fill="#6D786E" />
          <rect x="-22" y="212" width="7" height="38" fill="#6D786E" />
          <ellipse cx="0" cy="190" rx="30" ry="26" fill="#9bb588" />
          <ellipse cx="22" cy="202" rx="20" ry="18" fill="#9bb588" />
          <ellipse cx="-22" cy="198" rx="20" ry="18" fill="#9bb588" />
        </g>

        {/* Livestock */}
        <g
          transform="translate(250, 225)"
          style={{ transition: "opacity 400ms ease", opacity: isDim("livestock") ? 0.2 : 1 }}
        >
          <ellipse cx="0" cy="10" rx="30" ry="16" fill="#F3EBDD" stroke="#173C2F" strokeWidth="2" />
          <circle cx="-28" cy="2" r="10" fill="#F3EBDD" stroke="#173C2F" strokeWidth="2" />
          <rect x="-16" y="20" width="6" height="14" fill="#173C2F" />
          <rect x="10" y="20" width="6" height="14" fill="#173C2F" />
        </g>
        <g
          transform="translate(540, 228)"
          style={{ transition: "opacity 400ms ease", opacity: isDim("livestock") ? 0.2 : 1 }}
        >
          <ellipse cx="0" cy="8" rx="24" ry="13" fill="#DCE6D5" stroke="#173C2F" strokeWidth="2" />
          <circle cx="-22" cy="1" r="8" fill="#DCE6D5" stroke="#173C2F" strokeWidth="2" />
          <rect x="-12" y="16" width="5" height="11" fill="#173C2F" />
          <rect x="8" y="16" width="5" height="11" fill="#173C2F" />
        </g>
      </svg>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
        {components.map(({ key, label, description, icon: Icon, color }) => (
          <button
            key={key}
            type="button"
            onMouseEnter={() => setActive(key)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(key)}
            onBlur={() => setActive(null)}
            className={`group flex flex-col items-start gap-2 rounded-xl border p-3 text-left transition-all duration-300 md:p-4 ${
              active === key ? "border-leaf bg-sage/40 shadow-sm" : "border-forest/10 bg-paper"
            }`}
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full"
              style={{ backgroundColor: `${color}1A` }}
            >
              <Icon className="h-4 w-4" style={{ color }} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-deep-green">{label}</span>
            <span className="text-xs leading-snug text-muted">{description}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
