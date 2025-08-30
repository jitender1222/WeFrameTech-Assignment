"use client";

import { useState } from "react";

export default function Toggle({
  defaultChecked = false,
}: {
  defaultChecked?: boolean;
}) {
  const [on, setOn] = useState(defaultChecked);
  return (
    <button
      onClick={() => setOn((v) => !v)}
      className={`h-5 w-10 rounded-full border transition relative ${
        on ? "bg-sky-500 border-sky-500" : "bg-slate-200 border-slate-200"
      }`}
      aria-pressed={on}
    >
      <span
        className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${
          on ? "left-5" : "left-0.5"
        }`}
      />
    </button>
  );
}
