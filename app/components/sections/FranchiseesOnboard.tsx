import Image from "next/image";
import Card from "../ui/Card";
import StageBar from "../ui/StageBar";
import StageRow from "../ui/StageRow";

export default function FranchiseesOnboard() {
  return (
    <Card title="Total Franchisees Onboard">
      {/* Top row with number, percentage, and images */}
      <div className="flex items-center justify-between">
        {/* Left side: number + percentage */}
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">14</span>
          <span className="text-xs font-medium text-emerald-600 bg-emerald-50 border border-emerald-200 rounded px-1.5 py-0.5">
            +7.4%
          </span>
        </div>

        {/* Right side: images */}
        <div className="flex -space-x-2">
          <Image
            src="/Avatar group.png"
            alt="img1"
            width={100}
            height={100}
            className="rounded-full border border-white"
          />
        </div>
      </div>

      {/* Bars */}
      <div className="mt-4">
        <div className="grid grid-cols-3 gap-4 text-[12px]">
          <StageBar value={2} total={10} color="cyan" />
          <StageBar value={7} total={10} color="sky" />
          <StageBar value={5} total={10} color="indigo" />
        </div>

        {/* Stage Rows */}
        <div className="mt-6 space-y-3 text-[13px]">
          <StageRow
            label="Stage 1 (Initial Inquiry)"
            value={2}
            color="#06b6d4"
          />
          <StageRow
            label="Stage 2 (Document Submission)"
            value={7}
            color="#0ea5e9"
          />
          <StageRow label="Stage 3 (Training)" value={5} color="#6366f1" />
        </div>
      </div>
    </Card>
  );
}
