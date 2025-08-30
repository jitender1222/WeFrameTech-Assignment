export default function Card({
  title,
  className = "",
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm ${className}`}
    >
      <h3 className="text-[13px] font-semibold text-slate-700 mb-3">{title}</h3>
      {children}
    </section>
  );
}
