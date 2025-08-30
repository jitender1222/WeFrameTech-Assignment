"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Topbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-[#F6F8FB]/80 backdrop-blur supports-[backdrop-filter]:bg-[#F6F8FB]/60">
      <div className="flex items-center gap-3 px-4 md:px-6 py-3">
        <button
          className="md:hidden p-2 rounded-md border border-slate-200 bg-white"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="ml-auto flex items-center gap-3">
          <Image
            className="rounded-full"
            src={"/settings.png"}
            width={30}
            height={30}
            alt="img"
          />
          <Image
            className="rounded-full"
            src={"/navbarImg.png"}
            width={40}
            height={40}
            alt="img"
          />
        </div>
      </div>
    </header>
  );
}
