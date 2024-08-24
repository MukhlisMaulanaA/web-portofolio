"use client";
import { Typography, Button } from "@material-tailwind/react";

import ProjectCard from "@/components/project-card";

const PROJECT = [
  {
    title: "Web Official SIHACOV",
    image: "/image/project-showcase-sihacov.png",
    date: "31 July 2024",
    category: "Website",
    description: "Lorem Ipsum Dolor Sit Amet",
    link: "https://web-sihacov.vercel.app/",
  }
]

export function ProjectShowcase() {
  return (
    <section className="pb-28 px-8">
      <Typography variant="h2" color="blue-gray" className="mb-10 text-center">
        Projects Showcase
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {PROJECT.map((props, idx) => (
            <ProjectCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}