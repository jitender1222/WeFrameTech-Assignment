export default function StageBar({
  value,
  total,
  color = "cyan",
}: {
  value: number;
  total: number;
  color?: "cyan" | "sky" | "indigo";
}) {
  const pct = Math.max(0, Math.min(100, Math.round((value / total) * 100)));

  const bar =
    color === "indigo"
      ? "bg-indigo-500"
      : color === "sky"
      ? "bg-sky-500"
      : "bg-cyan-500";

  return (
    <div className="flex flex-col gap-2">
      {/* Value */}
      <span className="font-bold text-slate-700 text-lg">
        {value.toString().padStart(2, "0")}
      </span>

      {/* Progress bar */}
      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
        <div className={`h-full ${bar}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
