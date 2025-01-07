"use client";

import Image from "next/image";
import { H4 } from "@/components/ui/typography"

const CLIENTS = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

export default function ClientsPage() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <H4 className="mb-8">
          My awesome clients
        </H4>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={768}
              height={768}
              className="w-40"
              src={`/logos/logo-${logo}.svg`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
