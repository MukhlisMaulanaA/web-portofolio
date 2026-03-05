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
    link_github: "https://github.com/MukhlisMaulanaA/web-sihacov",
  },
  {
    title: "Website Official Himtel Unsika 2022",
    image: "/image/project-showcase-himtel.png",
    date: "18 January 2023",
    category: "Website",
    description: "Webiste Official Himpunan Mahasiswa Teknik Elektro periode 2022. Website ini dibangun menggunakan HTML & CSS untuk front-end dan PHP (native) untuk back-end. Website berbasis Content Management System (CMS) untuk berita atau info untuk mahasiswa Teknik Elektro Unsika.",
    link: "https://himtel.unsika.ac.id/",
    link_github: "https://github.com/MukhlisMaulanaA/himtelunsikaFrontEnd",
  },
  {
    title: "Amazon Prime Movies and TV Shows Visualization",
    image: "/image/project-showcase-data-analyst.png",
    date: "24 August 2024",
    category: "Data Analyst",
    description: "Menganalisis dataset Amazon Prime Movies and TV Shows yang bersifat open-source. Melakukan exploratory, cleaning data dan memvisualisasikan dalam bentuk grafik menggunakan bahasa pemrograman Python.",
    link: "https://docs.google.com/presentation/d/14Nq5Ck4pacf2fK7A3EMT1uRPhCq2rfpXJWfhMYUXSvM/edit?usp=sharing",
    link_github: "https://github.com/MukhlisMaulanaA/data-analytics-python/blob/main/assignment.ipynb",
  },
  {
    title: "Cohort User Retention Analysis",
    image: "/image/project-showcase-user-retention.png",
    date: "5 September 2024",
    category: "Data Analyst",
    description: "Analisis retensi user menggunakan metode Cohort. Analisis ini berfungsi untuk mengetahui frekuensi user yang kembali bertransaksi/ menggunakan produk kita. Memiliki pengguna yang loyal dan terus kembali untuk bertransaksi atau menggunakan produk kita akan menghasilkan keuntungan bagi bisnis kita.",
    link: "https://docs.google.com/presentation/d/1PN2H0ZsMfGqiP_a-sb7f63K8XUyyFAa0xrfyPGURtM0/edit?usp=sharing",
    link_github: "https://github.com/MukhlisMaulanaA/data-analytics-python/blob/main/user-retention.ipynb",
  },
  {
    title: "User RFM Segmentation",
    image: "/image/project-showcase-rfm-segmentation.png",
    date: "9 September 2024",
    category: "Data Analyst",
    description: "RFM Segmentation merupakan teknik segmentasi pengguna berdasarkan 3 karakteristik utama dari kebiasaan transaksi yaitu kebaruan (recency), frekuensi (frequency) dan moneter (monetary). Jika kita mampu mengelompokan setiap pengguna ke beberapa segmen, maka kita dapat melakukan tindakan lebih tepat sasaran.",
    link: "https://docs.google.com/presentation/d/180IWHTioSGQnJfjrEumMnAZNzwT_J6amz6pcCU4TFLw/edit?usp=sharing",
    link_github: "https://github.com/MukhlisMaulanaA/data-analytics-python/blob/main/user-segmentation.ipynb",
  },
  {
    title: "Market Basket Analysis",
    image: "/image/project-showcase-mba.png",
    date: "18 September 2024",
    category: "Data Analyst",
    description: "MBA (Market Basket Analysis) merupakan suatu teknik untuk menemukan asosiasi dari 2 produk atau lebih dari sekumpulan data transaksi pengguna. Konsep utama yang digunakan adalah perhitungan frekuensi kemunculan produk-produk yang dibeli secara bersamaan dalam suatu transaksi/order.",
    link: "https://docs.google.com/presentation/d/1QShL3PBhzhVhOFSjUhWh3jk1gM7ZBjRTSwMWxTVW4GA/edit?usp=sharing",
    link_github: "https://github.com/MukhlisMaulanaA/data-analytics-python/blob/main/market-basket-analysis.ipynb",
  },
  {
    title: "Laravel - E-Commerce with Admin Dashboard",
    image: "/image/project-showcase-ecommerce.png",
    date: "Coming Soon..",
    category: "Website",
    description: "Website E-Commerce dengan Payment Gateway menggunakan API Midtrans dan pengecekan ongkir menggunakan API rajaongkir. Dibangun menggunakan framework Laravel sebagai Back-end dan tailwindcss sebagai Front-endnya. Project ini masih dalam tahap pengembangan di bagian dashboard Admin. Stay tune..",
    link: "",
    link_github: "https://github.com/MukhlisMaulanaA/ecommerce",
  },
]

export function ProjectShowcase() {
  return (
    <section className="pb-28 px-8" id="project-showcase">
      <div className="w-full max-w-4xl mx-auto">
        <Typography variant="h2" color="blue-gray" className="mb-10 text-center">
          Projects Showcase
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-3 md:px-5">
          {PROJECT.map((props, idx) => (
            <ProjectCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}