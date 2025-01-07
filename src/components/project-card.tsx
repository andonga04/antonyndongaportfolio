import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
 } from "@/components/ui/card";
import {  P, H4 } from "@/components/ui/typography";
import { Button } from "./ui/button";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
}

export function ProjectCard({ img, title, desc }: ProjectCardProps) {
  return (
    <Card color="transparent" className="shadow-none border-none ">
      <CardHeader className="mx-0 mt-0 mb-6 h-48 float-none">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardContent className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <H4 className="mb-2">
            {title}
          </H4>
        </a>
        <P className="mb-6 font-normal !text-gray-500">
          {desc}
        </P>
        <Button color="gray" size="sm">
          see details
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;