"use client";

import { H2, H4 } from "@/components/ui/typography";
import Image from "next/image";

const CLIENTS = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

export default function PopularClients() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <H4 className="mb-4 uppercase !text-gray-500">
            POPULAR CLIENTS
          </H4>
          <H2 className="mb-4">
            Trusted by over 10,000+ <br /> clients
          </H2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={480}
              height={480}
              src={`/logos/logo-${logo}.svg`}
              className="w-40 grayscale opacity-75"
            />
          ))}
        </div>
      </div>
    </section>
  );
}