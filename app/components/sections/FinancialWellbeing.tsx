"use client";
import React from "react";
import Card from "../ui/Card";
import KpiMini from "../ui/KpiMini";

export default function FinancialWellbeing() {
  return (
    <Card title="Financial Wellbeing">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="text-center sm:text-left">
          <span className="text-2xl font-bold">20</span>
          <p className="text-[14px]">Total Franchisees</p>
        </div>

        <span className="text-xs font-medium text-emerald-600 bg-emerald-50 border border-emerald-200 rounded px-2 py-0.5 self-center sm:self-auto">
          +2.1%
        </span>
      </div>

      {/* KPI Section */}
      <div className="mt-4 border-t pt-3">
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-center">
          <KpiMini title="Target" value="$500,000" />
          <KpiMini title="Current" value="$450,000" />
        </div>
      </div>
    </Card>
  );
}
