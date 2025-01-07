"use client";

import Image from "next/image";
import { H1, H2, H3, H4, P, Lead, Large, Muted, Blockquote, InlineCode } from "@/components/ui/typography"
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"


function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <H1
          // color="blue-gray"
          className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Welcome to my Web <br /> Development Portofolio!
          </H1>
          <Lead
          
          className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I&apos;m Antony Ndonga, a passionate web developer based in Kenya. Here,
            you&apos;ll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </Lead>
          <div className="grid">
            <p
            className="mb-2 text-gray-900 font-medium"
            >
              Your email
            </p>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input type="email" placeholder="Enter Your Email" className="border"/>
              <Button className="hover:bg-gray-100 text-white bg-black">
                require offer
              </Button>
            </div>
          </div>
          <P className="font-normal !text-gray-500">
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </P>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/images/me.jpg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;