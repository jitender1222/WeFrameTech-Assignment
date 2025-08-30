import Card from "../ui/Card";

export default function KeyInsights() {
  return (
    <Card title="Key Insights & Feedback">
      <div className="text-[13px]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold leading-6">10%</p>

            <p className="text-slate-500">Sales Growth</p>
          </div>
          <div className="h-10 w-10 rounded-full grid place-items-center border border-slate-200 bg-white">
            💬
          </div>
        </div>
        <div className="mt-4 border-t pt-3">
          <div className="mt-4">
            <p className="leading-snug bg-[#F6F7FB] p-4 rounded-lg">
              Franchisees are requesting more detailed training materials.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
