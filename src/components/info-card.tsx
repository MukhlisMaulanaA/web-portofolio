import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  date: string;
  children: React.ReactNode;
}

export function InfoCard({ icon: Icon, title, subtitle, date, children }: InfoCardProps) {
  return (
    <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-900 rounded-full -start-3 ring-4 ring-gray-500 dark:ring-white dark:bg-gray-100">
        <svg className="w-2.5 h-2.5 text-gray-100 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </span>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{ title }</h3>
      <h4 className="mb-1 text-md font-semibold text-gray-900 dark:text-white">{ subtitle }</h4>
      <time className="mb-2 py-2 px-1 rounded-xl text-sm font-semibold leading-none text-green-800 dark:text-gray-500 bg-green-200">{ date }</time>
      <p className="mt-2 text-base text-justify font-normal text-gray-800 dark:text-gray-400">
        { children }
        </p>
    </li>
  );
}

export default InfoCard;
