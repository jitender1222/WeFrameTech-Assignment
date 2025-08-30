import Image from "next/image";
import Card from "../ui/Card";

export default function ProspectLeads() {
  return (
    <Card title="Prospect Leads" className="xl:order-2">
      <div className="space-y-3 text-sm md:text-[12px]">
        {[
          {
            name: "Wade Warren",
            stage: "Initial Inquiry",
            image: "/image-1.png",
          },
          {
            name: "Ava Wright",
            stage: "Initial Inquiry",
            image: "/ava.png",
          },
          {
            name: "Cody Fisher",
            stage: "Initial Inquiry",
            image: "/cody.png",
          },
        ].map((p) => (
          <div
            key={p.name}
            className="flex items-center px-3 md:px-4 py-2 bg-[#F6F7FB] rounded-md"
          >
            {/* Image */}
            <div className="mr-3 flex-shrink-0">
              <Image
                width={40}
                height={40}
                src={p.image}
                alt={p.name}
                className="rounded-full"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col items-center lg:flex-row justify-between w-full gap-1 md:gap-1">
              <p className="text-xs">{p.name}</p>
              <p className="text-xs text-gray-600">Stage: {p.stage}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
