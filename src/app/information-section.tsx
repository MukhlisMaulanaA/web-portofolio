"use client";
import { Typography } from "@material-tailwind/react";
import InfoCard from "@/components/info-card";

// const EDUCATION = [
//   {
//     icon: AcademicCapIcon,
//     title: "Certified Web Developer - Web Development Institute",
//     date: "2016",
//     children:
//       "This comprehensive program covered HTML5, CSS3, JavaScript, responsive design, server-side scripting, and web security.",
//   },
//   {
//     icon: AcademicCapIcon,
//     title: "Responsive Web Design Certification - FreeCodeCamp",
//     date: "2015",
//     children:
//       "The Responsive Web Design certification signifies competence in designing and developing websites that adapt seamlessly to various screen sizes and devices.",
//   },
//   {
//     icon: AcademicCapIcon,
//     title: "JavaScript Developer Certification - Code Academy",
//     date: "2014",
//     children:
//       "This certification demonstrates advanced proficiency in JavaScript programming, including ES6 features and practical applications.",
//   },
//   {
//     icon: AcademicCapIcon,
//     title: "Bachelor of Science in Computer Science - XYZ University",
//     date: "2014-2016",
//     children:
//       "Relevant Coursework: Data Structures, Algorithms, Web Development, Software Engineering, Database Management.",
//   },
// ];

const EXPERIENCE = [
  {
    icon: "/logos/logo-unsika.png",
    title: "Universitas Singaperbangsa Karawang",
    subtitle: "Asisten Praktikum Mata Kuliah Aplikasi Pemrograman Komputer",
    date: "October, 2022",
    children:
      "Saya merancang modul pembelajaran PHP dan Python, memimpin workshop pemrograman web, dan membimbing mahasiswa dalam praktikum pemrograman komputer. Keahlian saya meliputi pengembangan kurikulum, pengajaran interaktif, dan evaluasi kode secara mendalam, membantu mahasiswa mengasah keterampilan pemrograman mereka dari konsep dasar hingga aplikasi praktis.",
  },
  {
    icon: "/logos/logo-himtel.png",
    title: "Himpunan Mahasiswa Teknik Elektro 2022",
    subtitle: "Anggota Divisi Kominfo Internal",
    date: "February, 2022 - January, 2023",
    children:
      "Saya mengembangkan strategi konten yang menarik bersama tim kreatif, membangun hubungan produktif dengan organisasi mahasiswa, dan memimpin pengembangan website resmi organisasi sebagai Full-stack Developer. Keahlian saya mencakup perencanaan konten strategis, kolaborasi lintas tim, dan pengembangan web komprehensif.",
  },
  {
    icon: "/logos/logo-unsika.png",
    title: "Universitas Singaperbangsa Karawang",
    subtitle: "Koordinator Asisten Laboratorium Praktikum Mata Kuliah Aplikasi Pemrograman Komputer",
    date: "October, 2023 - November, 2023",
    children:
      "Sebagai koordinator praktikum, saya memperbarui modul pembelajaran dengan materi terkini, membimbing asisten dalam memimpin workshop, dan mendampingi mereka saat membimbing praktikan. Saya juga bertanggung jawab menganalisis dan mengevaluasi program yang dihasilkan praktikan, memastikan kualitas pembelajaran dan pengembangan keterampilan yang optimal dalam kegiatan praktikum.",
  },
];

// const SKILLS = [
//   {
//     icon: FireIcon,
//     title: "Front-End Frameworks",
//     date: "Technical Skills",
//     children:
//       "Competent in working with front-end frameworks such as React, Angular, or Vue.js to develop dynamic and responsive web applications with a focus on user experience.",
//   },
//   {
//     icon: FireIcon,
//     title: "Attention to Detail",
//     date: "Soft Skills",
//     children:
//       "Meticulous attention to detail in code quality, user interface design, and testing to ensure error-free and user-friendly web applications.",
//   },
//   {
//     icon: FireIcon,
//     title: "Responsive Web Design",
//     date: "Technical Skills",
//     children:
//       "Skilled in creating responsive layouts using CSS Grid, Flexbox, and media queries. Ensures websites adapt seamlessly to various screen sizes and devices.",
//   },
//   {
//     icon: FireIcon,
//     title: "Time Management",
//     date: "Soft Skills",
//     children:
//       "Excellent time management skills to meet project deadlines, prioritize tasks effectively, and handle multiple projects simultaneously.",
//   },
// ];

export function InformationSection() {
  return (
    <section className="pb-28 px-8" id="information-section">
      <div className="w-full max-w-3xl mx-auto">
      <Typography variant="h2" color="blue-gray" className="mb-10 text-center">
        Resume
      </Typography>
        {/* Different Template */}
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {EXPERIENCE.map((props, idx) => (
            <InfoCard key={idx} {...props} />
          ))}
        </ol>
      </div>
    </section>
  );
}

export default InformationSection;