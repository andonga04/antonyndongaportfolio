"use client";

import React from "react";
import Image from "next/image";
import { H2, H3, H4, Lead, P } from "@/components/ui/typography";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CardContent, Card } from "@/components/ui/card";


export default function Testimonial() {
  const [active, setActive] = React.useState(3);

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <H2 className="mb-4">
            What Clients Say
          </H2>
          <Lead
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            Discover what clients have to say about their experiences working
            with me. My client&apos;s satisfaction is my greatest achievement!
          </Lead>
        </div>
        <Card color="transparent" className="py-8 lg:flex-row shadow-none">
          <CardContent className="w-full lg:gap-10 h-full lg:!flex justify-between ">
            <div className="w-full mb-10 lg:mb-0">
              <H3
                className="mb-4 font-bold lg:max-w-xs"
              >
                Mobile App Development
              </H3>
              <P className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
                I had the pleasure of working with Lily on a critical web
                development project, and I can confidently say that their
                expertise and professionalism exceeded my expectations.
              </P>
              <H4 className="mb-0.5">
                Michael - Technical Manager
              </H4>
              <P
                className="font-normal mb-5 !text-gray-500"
              >
                Marketing @ APPLE INC.
              </P>
              <Avatar className="flex items-center gap-4">
                <AvatarImage
                  src="/image/avatar1.jpg"
                  alt="spotify"
                  className={`cursor-pointer ${
                    active === 1 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(1)}
                />
                <Avatar className="w-[1px] h-[36px] bg-blue-gray-100 "></Avatar>
                <AvatarImage
                  src="/image/avatar2.jpg"
                  alt="spotify"
                  className={`cursor-pointer ${
                    active === 2 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(2)}
                />
                <Avatar className="w-[1px] h-[36px] bg-blue-gray-100" />
                <AvatarImage
                  src="/image/avatar3.jpg"
                  alt="spotify"
                  className={`cursor-pointer ${
                    active === 3 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(3)}
                />
              </Avatar>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                alt="testimonial image"
                src={`/image/avatar${active}.jpg`}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

