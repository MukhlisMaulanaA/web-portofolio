"use client";
import { Typography } from "@material-tailwind/react";
import { TechCard } from "@/components/tech-card";

const TECH = [
  {
    alt: "laravel",
    image: "/logos/logo-laravel.png",
  },
  {
    alt: "nextjs",
    image: "/logos/logo-nextjs.png",
  },
  {
    alt: "nodejs",
    image: "/logos/logo-nodejs.png",
  },
  {
    alt: "php",
    image: "/logos/logo-php.png",
  },
  {
    alt: "mysql",
    image: "/logos/logo-mysql.svg",
  },
  {
    alt: "postman",
    image: "/logos/logo-postman.png",
  },
  {
    alt: "tsx",
    image: "/logos/logo-tsx.png",
  },
  {
    alt: "tailwindcss",
    image: "/logos/logo-tailwindcssv2.svg",
  },
  {
    alt: "bootstrap",
    image: "/logos/logo-bootstrap.png",
  },
  {
    alt: "react",
    image: "/logos/logo-react.png",
  },
  {
    alt: "python",
    image: "/logos/logo-python.png",
  },
  {
    alt: "opencv",
    image: "/logos/logo-opencv.png",
  },
  {
    alt: "tensorflow",
    image: "/logos/logo-tensorflow.png",
  },
  {
    alt: "vscode",
    image: "/logos/logo-vscode.png",
  },
  {
    alt: "ipynb",
    image: "/logos/logo-ipynb.png",
  },
  {
    alt: "scikit",
    image: "/logos/logo-scikit.png",
  },
  {
    alt: "numpy",
    image: "/logos/logo-numpy.png",
  },
  {
    alt: "matplotlib",
    image: "/logos/logo-matplotlib.png",
  },
  {
    alt: "arduino",
    image: "/logos/logo-arduino.png",
  },
]

export function TechStack() {
  return (
    <section className="pb-28 px-8" id="techstack">
      <div className="w-full max-w-4xl mx-auto">
        <Typography variant="h2" color="blue-gray" className="mb-10 text-center">
          Tech Stack
        </Typography> 
        <div className="grid justify-items-center grid-cols-2 xl:grid-cols-6 gap-2 md:grid-cols-4 sm:grid-cols-3">
          {TECH.map((props, idx) => (
            <TechCard key={idx} {...props}/>
          ))}
        </div>
      </div>
    </section>
  )
}