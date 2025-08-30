"use client";

import { useMemo } from "react";

export default function Ring({
  value,
  size = 120,
  stroke = 10,
}: {
  value: number;
  size?: number;
  stroke?: number;
}) {
  const radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;
  const dash = useMemo(
    () => (circ * Math.max(0, Math.min(100, value))) / 100,
    [circ, value]
  );

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#E6EDF4"
        strokeWidth={stroke}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#16A3B8"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circ - dash}`}
        fill="none"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="fill-slate-800 font-semibold"
      >
        {value}%
      </text>
    </svg>
  );
}
