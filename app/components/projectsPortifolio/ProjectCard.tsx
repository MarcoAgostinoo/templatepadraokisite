import Image from "next/image";
import { Card } from "flowbite-react";
import { Project } from "./ProjectsPortifolio";

interface ProjectCardProps {
  project: Project;
  isPriority?: boolean;
}

export default function ProjectCard({
  project,
  isPriority = false,
}: ProjectCardProps) {
  return (
    <Card
      className="group h-full w-full overflow-hidden bg-transparent backdrop-blur-sm transition-all duration-500 hover:backdrop-blur-md"
      theme={{
        root: {
          base: "border-0 shadow-lg hover:shadow-2xl",
        },
      }}
    >
      {/* Container do card com padding responsivo */}
      <div className="p-3 sm:p-4 md:p-5 lg:p-6">
        {/* Imagem */}
        <div className="relative mb-3 sm:mb-4 aspect-video w-full overflow-hidden rounded-lg sm:rounded-xl">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 320px) 260px, (max-width: 375px) 280px, (max-width: 640px) 300px, (max-width: 768px) 320px, (max-width: 1024px) 450px, 500px"
            className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
            priority={isPriority}
          />
          {/* Overlay gradient para melhor legibilidade em mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Título */}
        <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl md:text-2xl font-medium text-white/90 transition-colors duration-300 group-hover:text-white line-clamp-2">
          {project.title}
        </h3>

        {/* Descrição */}
        <p className="mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 text-sm sm:text-base text-white/70 leading-relaxed">
          {project.description}
        </p>

        {/* Tecnologias */}
        <div className="mb-4 sm:mb-5 flex flex-wrap gap-1.5 sm:gap-2">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="bg-white/5 hover:bg-white/10 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-white/80 transition-all duration-300 rounded-md sm:rounded-lg border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link (se existir) */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto text-sm sm:text-base font-medium text-white/80 hover:text-white transition-all duration-300 bg-blue-600/20 hover:bg-blue-600/40 px-4 py-2 sm:py-2.5 rounded-lg border border-blue-400/30 hover:border-blue-400/60"
          >
            Ver projeto
            <svg
              className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        )}
      </div>
    </Card>
  );
}