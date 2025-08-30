import Card from "../ui/Card";
import Checklist from "../ui/Checklist";
import Ring from "../ui/Ring";

export default function AccountProgress() {
  return (
    <Card className="text-center" title="Account Progress ">
      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto p-4">
        {/* Ring */}
        <div className="flex flex-col items-center">
          <Ring value={85} size={120} stroke={10} />
        </div>

        {/* Steps */}
        <div className="mt-6 flex flex-col gap-6 w-full">
          {/* Completed */}
          <div className="flex flex-col p-4 bg-[#F6F8FB] gap-3 rounded-xl">
            <p className="font-semibold text-base text-left">Steps Completed</p>
            <Checklist checkPoint label="Profile Setup" done />
            <Checklist label="Initial Training" done />
            <Checklist label="Legal Documents" done />
          </div>

          {/* Remaining */}
          <div className="flex flex-col p-4 bg-[#F6F8FB] gap-3 rounded-xl">
            <p className="font-semibold text-base text-left">Steps Remaining</p>
            <Checklist label="Financial Integration" done />
            <Checklist label="Final Review" done />
          </div>
        </div>
      </div>
    </Card>
  );
}
