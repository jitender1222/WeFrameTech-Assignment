import Image from "next/image";
import { Pencil, Search, Trash2 } from "lucide-react";
import Card from "../ui/Card";
import { Td, Th } from "../ui/Table";
import Toggle from "../ui/Toggle";
import { rows, stages } from "@/app/demo";

export default function MyUploads() {
  return (
    <div className="mt-4 grid grid-cols-1 xl:grid-cols-1 gap-4 md:gap-6">
      <Card title="My Uploads" className="xl:col-span-2 xl:order-1">
        {/* Search + Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              placeholder="Search here..."
              className="w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 py-2 text-[13px] outline-none focus:ring-2 focus:ring-sky-200"
            />
          </div>
          <button className="self-start sm:self-auto rounded-lg border border-slate-200 bg-white px-3 py-2 text-[12px] font-medium">
            Filters
          </button>
        </div>

        {/* Table */}
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="text-slate-500 border-b border-slate-200 text-[12px]">
                <Th>Document Name</Th>
                <Th>Document Type</Th>
                <Th>AI App Inclusion</Th>
                <Th>Dashboard Inclusion</Th>
                <Th>Stage Access</Th>
                <Th className="text-right">Actions</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {rows.map((r) => (
                <tr key={r.id} className="bg-white">
                  {/* Document Name with Checkbox + Icon */}
                  <Td className="min-w-[240px]">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-slate-300"
                      />
                      <Image
                        src={
                          [".pdf", ".jpg", ".aep", ".mp3"].some((ext) =>
                            r.name.endsWith(ext)
                          )
                            ? "/pdf.png"
                            : "/doc.png"
                        }
                        width={28}
                        height={28}
                        alt="file icon"
                      />

                      <div>
                        <p className="font-medium text-[14px] leading-5">
                          {r.name}
                        </p>
                        <p className="text-slate-500 text-[12px]">{r.size}</p>
                      </div>
                    </div>
                  </Td>

                  {/* Document Type */}
                  <Td>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium border ${
                        r.type === "Legal"
                          ? "bg-rose-50 text-rose-700 border-rose-200"
                          : r.type === "Financial"
                          ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                          : r.type === "Technology"
                          ? "bg-amber-50 text-amber-700 border-amber-200"
                          : "bg-emerald-50 text-emerald-700 border-emerald-200"
                      }`}
                    >
                      {r.type}
                    </span>
                  </Td>

                  {/* Toggles */}
                  <Td>
                    <Toggle defaultChecked={r.ai} />
                  </Td>
                  <Td>
                    <Toggle defaultChecked={r.dashboard} />
                  </Td>

                  {/* Stage Dropdown */}
                  <Td>
                    <select className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-[13px]">
                      {stages.map((s) => (
                        <option key={s} defaultValue={s === r.stage} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Td>

                  {/* Actions */}
                  <Td className="text-right">
                    <div className="flex justify-end gap-3">
                      <button className="inline-flex items-center gap-1 text-rose-600 hover:text-rose-700 text-[13px]">
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </button>
                      <button className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 text-[13px]">
                        <Pencil className="h-4 w-4" />
                        Edit
                      </button>
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
