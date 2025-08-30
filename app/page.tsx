"use client";

import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";

import AccountProgress from "./components/sections/AccountProgress";
import FranchiseesOnboard from "./components/sections/FranchiseesOnboard";
import KeyInsights from "./components/sections/KeyInsights";
import FinancialWellbeing from "./components/sections/FinancialWellbeing";
import ProspectLeads from "./components/sections/ProspectsLeads";
import MyUploads from "./components/sections/MyUploads";

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-[#F6F8FB] text-slate-800 flex">
      {/* Sidebar collapses on small screens */}
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Topbar />

        <main className="p-4 md:p-6">
          {/* Top section: AccountProgress + right grid */}
          <div className="flex flex-col xl:flex-row gap-4">
            {/* AccountProgress takes full width on mobile, fixed width on xl */}
            <div className="flex flex-col xl:flex-row gap-4 items-stretch">
              <AccountProgress />
            </div>

            {/* Right grid adjusts to screen size */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 flex-1 h-full">
              <FranchiseesOnboard />
              <KeyInsights />
              <FinancialWellbeing />
              <ProspectLeads />
            </div>
          </div>

          {/* MyUploads below */}
          <div className="mt-4">
            <MyUploads />
          </div>
        </main>
      </div>
    </div>
  );
}
