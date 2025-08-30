export default function StageRow({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        {/* colored dot */}
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span>{label}</span>
      </div>
      <span className="font-bold">{value.toString().padStart(2, "0")}</span>
    </div>
  );
}
