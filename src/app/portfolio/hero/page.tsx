"use client";

import Image from "next/image";
import { H1, P, Lead } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero: React.FC = () => {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid min-h-[60vh] w-full gap-10 items-center lg:grid-cols-2">
        {/* Text Content Section */}
        <div className="row-start-2 lg:row-auto">
          <H1 className="mb-4 text-3xl lg:text-5xl !leading-tight">
            Welcome to my Web <br /> Development Portfolio!
          </H1>
          <Lead className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
            I&apos;m Antony Ndonga, a passionate web developer based in Kenya.
            Here, you&apos;ll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </Lead>

          {/* Email Subscription Section */}
          <div className="grid">
            <p className="mb-2 font-medium text-gray-900">Your email</p>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              <Input
                type="email"
                placeholder="Enter Your Email"
                className="border"
              />
              <Button className="bg-black text-white hover:bg-gray-100">
                Request Offer
              </Button>
            </div>
          </div>

          {/* Terms and Conditions Link */}
          <P className="!text-gray-500 font-normal">
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </P>
        </div>

        {/* Image Section */}
        <Image
          width={1024}
          height={1024}
          alt="Teamwork"
          src="/image/me-2.jpg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
};

export default Hero;
