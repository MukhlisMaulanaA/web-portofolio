import Image from "next/image";
import { Typography, Button } from "@material-tailwind/react";
interface InfoProjectProps {
  title: string;
  image: string;
  date: string;
  category: string;
  description: string;
  link: string;
}

// Objek untuk memetakan kategori ke warna
const categoryColors = {
  "Website": "bg-indigo-500",
  "Data Analyst": "bg-green-500",
  "Data Science": "bg-yellow-500",
  "Machine Learning": "bg-red-500",
  // Tambahkan kategori lain sesuai kebutuhan
  "Default": "bg-indigo-500" // Warna default jika kategori tidak ditemukan
};

export function ProjectCard({ title, image, date, category, description, link }: InfoProjectProps) {
  const getCategoryColor = (category: string) => {
    return categoryColors[category] || categoryColors["Default"];
  };
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative overflow-hidden">
        <Image
          width={600}
          height={570}
          alt="web-sihacov"
          src={ image }
          className="w-full h-64 object-cover hover:scale-110 duration-300" >
        </Image>
        <div className={`absolute top-0 left-0 ${getCategoryColor(category)} text-white opacity-90 font-bold px-2 py-1 m-2 rounded-md`}>
          {category}
        </div>
        <div className="absolute bottom-0 right-0 bg-gray-800 text-white opacity-90 px-2 py-1 m-2 rounded-md text-xs">
          {date}
        </div>
      </div>
      <div className="p-4">
        <div className="text-lg font-semibold text-gray-900 mb-2">{ title }</div>
        <p className="text-gray-700 text-md text-justify">{ description }</p>
        <a href={ link } target="blank" className="pr-2">
          <Button className="flex items-center mt-4">View
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 size-4">
              <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clip-rule="evenodd" />
            </svg>
          </Button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;