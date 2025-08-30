"use client";

import { useState } from "react";
import { X, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden p-3 fixed top-4 left-4 z-50 bg-[#0B4661] text-white rounded-lg shadow"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <Menu className="h-6 w-6" />
      </button>

      <aside
        className={`border-2 flex flex-col justify-between fixed md:static md:translate-x-0 inset-y-0 left-0 z-40 
        w-64 bg-gradient-to-b from-[#0B4661] to-[#0E6A7D]
         text-white shadow-xl p-4 md:p-6 transition-transform duration-300 ${
           sidebarOpen ? "translate-x-0" : "-translate-x-full"
         }`}
      >
        <div>
          <div className="flex items-center justify-between gap-2 mb-6">
            <div className="flex items-center gap-2">
              <Image src={"/weFrame.png"} width={120} height={50} alt="img" />
            </div>
            <button
              className="md:hidden p-2 rounded hover:bg-white/10"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="space-y-1 text-[13px]">
            {[
              "Home",
              "Stages & Checklist",
              "Upload Docs",
              "Preferred Vendors",
              "Tech Stack",
              "Targets",
              "Sales Targets",
              "MAI Settings",
              "Pending Questions",
            ].map((label, i) => (
              <a
                key={label}
                href="#"
                className={`flex items-center justify-between rounded-lg px-3 py-2 hover:bg-white/10 transition ${
                  i === 0 ? "bg-white/10" : ""
                }`}
              >
                <span>{label}</span>
                <ChevronDown className="h-4 w-4 opacity-40" />
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-white/10 pt-4 text-xs opacity-80">
          Logout
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <button
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close overlay"
        />
      )}
    </>
  );
}
