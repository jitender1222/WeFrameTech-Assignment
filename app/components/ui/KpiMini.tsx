export default function KpiMini({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className=" bg-[#F6F7FB] p-[16px]">
      <p className="text-[12px] text-slate-500">{title}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}
