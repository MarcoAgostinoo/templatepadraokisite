import { memo } from "react";
import { Project } from "./ProjectsPortifolio";

interface ProjectCardProps {
  project: Project;
  isPriority?: boolean;
}

const ProjectCard = memo<ProjectCardProps>(({ project }) => {
  return (
    <div className="group h-full w-full overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-200 hover:bg-white/8 hover:border-white/20">
      <div className="p-4">
        {/* Imagem simples com placeholder */}
        <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg bg-blue-900/20">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMTgwIiBmaWxsPSIjMUU0MEFGIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8cGF0aCBkPSJNMTQ0IDE2MEgxNzZWMTI4SDE0NFYxNjBaTTE2MCA5NkMxNTEuMTYgOTYgMTQ0IDEwMy4xNiAxNDQgMTEyUzE1MS4xNiAxMjggMTYwIDEyOFMxNzYgMTIwLjg0IDE3NiAxMTJTMTY4Ljg0IDk2IDE2MCA5NlpNMTI4IDY0VjE5MkgxOTJWNjRIMTI4WiIgZmlsbD0iIzNCODJGNiIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPC9zdmc+';
            }}
          />
        </div>

        {/* Título */}
        <h3 className="mb-2 text-xl font-semibold text-white/90 line-clamp-2">
          {project.title}
        </h3>

        {/* Descrição */}
        <p className="mb-4 text-sm text-white/70 line-clamp-3">
          {project.description}
        </p>

        {/* Tecnologias - versão simplificada */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="bg-white/10 px-2 py-1 text-xs text-white/80 rounded border border-white/20"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-white/60">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Link simples */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            Ver projeto
            <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        )}
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;