export default function Checklist({
  checkPoint,
  label,
  done = false,
}: {
  checkPoint?: boolean;
  label: string;
  done?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-4 w-4 rounded-full border ${
          checkPoint ? "bg-white border-slate-300" : ""
        }`}
      ></span>
      <div className="flex justify-between w-full">
        <span
          className={`leading-none ${
            done ? "text-slate-800" : "text-slate-500"
          }`}
        >
          {label}
        </span>
        <span
          className={`h-4 w-4 rounded-full border ${
            done
              ? "bg-emerald-500 border-emerald-500 ✅"
              : "bg-white border-slate-300"
          }`}
        />
      </div>
    </div>
  );
}
