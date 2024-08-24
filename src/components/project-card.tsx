import Image from "next/image";

interface InfoProjectProps {
  title: string;
  image: string;
  date: string;
  category: string;
  description: string;
  link: string;
}

export function ProjectCard({ title, image, date, category, description, link }: InfoProjectProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative">
        <Image
          width={600}
          height={570}
          alt=""
          src={ image }
          className="w-full h-64 object-fill" >
        </Image>
        <div className="absolute top-0 right-0 bg-indigo-500 text-white opacity-90 font-bold px-2 py-1 m-2 rounded-md">{ category }
        </div>
        <div className="absolute bottom-0 left-0 bg-gray-800 text-white opacity-90 px-2 py-1 m-2 rounded-md text-xs">{ date }
        </div>
      </div>
      <div className="p-4">
        <div className="text-lg font-medium text-gray-800 mb-2">{ title }</div>
        <p className="text-gray-500 text-sm">{ description }</p>
      </div>
    </div>
  );
}

export default ProjectCard;