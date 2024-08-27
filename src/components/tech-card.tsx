import Image from "next/image";
import { Typography } from "@material-tailwind/react";

interface TechCardProps {
  alt: string;
  image: string;
}

export function TechCard({ image, alt } : TechCardProps) 
{
  return (
    <Image
    width={100}
    height={100}
    alt={ alt }
    src={ image }
    className="h-28 rounded-md object-contain hover:scale-105 duration-300">
    </Image>
  );
}