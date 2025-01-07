import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
 } from "@/components/ui/card";
import { H1, H2, Lead, P, H4 } from "@/components/ui/typography";
import { Button } from "./ui/button";

interface ProjectCardProps {
  id: number;
  img: string;
  title: string;
  desc: string;
}

export function BlogCard({ img, title, desc, id}: ProjectCardProps) {
  return (
    <Card color="transparent" className=" border-none p-2">
      <CardHeader className="mx-0 mt-0 mb-6 h-48 float-none">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardContent className="p-2">
        <a
          href={`/blogsapp/blogpage/${id}` }
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
          
        >
          <H4 className="mb-2 text-center">
            {title}
          </H4>
        </a>
        <P className="mb-6 font-normal !text-gray-500">
          {desc}
        </P>
        {/* <Button color="gray" size="sm" className="w-full">
          Learn More
        </Button> */}
      </CardContent>
    </Card>
  );
}

export default BlogCard;