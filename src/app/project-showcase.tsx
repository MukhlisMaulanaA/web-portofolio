"use client";
import { Typography, Button } from "@material-tailwind/react";

import ProjectCard from "@/components/project-card";

const PROJECT = [
  {
    title: "Website Official SIHACOV",
    image: "/image/project-showcase-sihacov.png",
    date: "31 July 2024",
    category: "Website",
    description: "Website official produk SIHACOV. Website ini dibuat dengan tujuan pengenalan dan branding produk. Dengan menggunakan framework NextJs dan React website ini dideploy pada platform Vercel dan terintegrasi dengan repositori Github.",
    link: "https://web-sihacov.vercel.app/",
  },
  {
    title: "Website Official Himtel Unsika 2022",
    image: "/image/project-showcase-himtel.png",
    date: "18 January 2023",
    category: "Website",
    description: "Webiste Official Himpunan Mahasiswa Teknik Elektro periode 2022. Website ini dibangun menggunakan HTML & CSS untuk front-end dan PHP (native) untuk back-end. Website berbasis Content Management System (CMS) untuk berita atau info untuk mahasiswa Teknik Elektro Unsika.",
    link: "https://himtelunsika.com/",
  },
]

export function ProjectShowcase() {
  return (
    <section className="pb-28 px-8">
      <Typography variant="h2" color="blue-gray" className="mb-10 text-center">
        Projects Showcase
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20">
        {PROJECT.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}