import Image from "next/image";
import { Typography, Button } from "@material-tailwind/react";
interface InfoProjectProps {
  title: string;
  image: string;
  date: string;
  category: string;
  description: string;
  link: string;
  link_github: string;
}

// Definisikan tipe untuk kategori yang valid
type CategoryType = 'Website' | 'Data Analyst' | 'Data Science' | 'Machine Learning' | 'Default';

// Objek untuk memetakan kategori ke warna
const categoryColors: Record<CategoryType, string> = {
  "Website": "bg-indigo-500",
  "Data Analyst": "bg-green-500",
  "Data Science": "bg-yellow-500",
  "Machine Learning": "bg-red-500",
  // Tambahkan kategori lain sesuai kebutuhan
  "Default": "bg-indigo-500" // Warna default jika kategori tidak ditemukan
};

export function ProjectCard({ title, image, date, category, description, link, link_github }: InfoProjectProps) {
  const getCategoryColor = (category: string) => {
    return categoryColors[category as CategoryType] || categoryColors["Default"];
  };

  const isLinkDisabled = !link || link.trim() === '';
  const isGithubLinkDisabled = !link_github || link_github.trim() === '';

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative overflow-hidden">
        <Image
          width={600}
          height={570}
          alt="web-sihacov"
          src={image}
          className="w-full h-64 object-cover hover:scale-110 duration-300"
        />
        <div className={`absolute top-0 left-0 ${getCategoryColor(category)} text-white opacity-90 font-bold px-2 py-1 m-2 rounded-md`}>
          {category}
        </div>
        <div className="absolute bottom-0 right-0 bg-gray-800 text-white opacity-90 px-2 py-1 m-2 rounded-md text-xs">
          {date}
        </div>
      </div>
      <div className="p-4">
        <div className="text-lg font-semibold text-gray-900 mb-2">{title}</div>
        <p className="text-gray-700 text-md text-justify">{description}</p>
        <div className="flex flex-row items-center">
          {isLinkDisabled ? (
            <Button disabled className="flex items-center mt-4 opacity-50 cursor-not-allowed mr-2">
              Coming Soon..
            </Button>
          ) : (
            <a href={link} target="_blank" rel="noopener noreferrer" className="mr-2">
              <Button className="flex items-center mt-4">
                View
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 size-4">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                </svg>
              </Button>
            </a>
          )}

          {isGithubLinkDisabled ? (
            <Button disabled className="flex items-center mt-4 opacity-50 cursor-not-allowed p-2">
              <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
              </svg>
            </Button>
          ) : (
            <a href={link_github} target="_blank" rel="noopener noreferrer">
              <Button className="flex items-center mt-4 p-2">
                <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                </svg>
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;