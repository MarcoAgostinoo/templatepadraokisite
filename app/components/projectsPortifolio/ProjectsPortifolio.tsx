// components/ProjectsPortfolio.tsx
"use client";

import { memo, useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
}

const initialProjects: Project[] = [
  {
    id: "1",
    title: "Sistema E-commerce",
    description:
      "Plataforma completa de vendas online com carrinho de compras, sistema de pagamento integrado e dashboard administrativo avançado.",
    imageUrl: "/project1.jpg",
    technologies: ["React", "TypeScript", "Stripe"],
    link: "https://exemplo.com",
  },
  {
    id: "2",
    title: "Dashboard Analytics",
    description:
      "Sistema completo de análise de dados com gráficos interativos, relatórios em tempo real e exportação de dados.",
    imageUrl: "/project2.jpg",
    technologies: ["Next.js", "Chart.js", "MongoDB"],
    link: "https://exemplo.com",
  },
  {
    id: "3",
    title: "App Mobile Híbrido",
    description:
      "Aplicativo multiplataforma com sincronização offline, notificações push e interface nativa.",
    imageUrl: "/project3.jpg",
    technologies: ["React Native", "Firebase", "Redux"],
    link: "https://exemplo.com",
  },
  {
    id: "4",
    title: "Plataforma de Cursos Online",
    description:
      "Sistema de ensino a distância com videoaulas, exercícios interativos e certificação automática.",
    imageUrl: "/project4.jpg",
    technologies: ["Vue.js", "Node.js", "PostgreSQL"],
    link: "https://exemplo.com",
  },
  {
    id: "5",
    title: "Rede Social Profissional",
    description:
      "Plataforma de networking com perfis profissionais, busca avançada e sistema de mensagens.",
    imageUrl: "/project5.jpg",
    technologies: ["Angular", "Express", "MongoDB"],
    link: "https://exemplo.com",
  },
  {
    id: "6",
    title: "Sistema de Gestão Empresarial",
    description:
      "Solução completa para gestão de empresas com módulos de RH, financeiro e estoque.",
    imageUrl: "/project6.jpg",
    technologies: ["React", "Django", "MySQL"],
    link: "https://exemplo.com",
  },
];

const ProjectCard = memo<{ project: Project }>(({ project }) => (
  <div
    className="group w-72 flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/8 hover:shadow-2xl hover:shadow-blue-500/10 sm:w-80 md:w-96"
    role="group"
    aria-label={project.title}
  >
    <div className="p-5">
      <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
      </div>
      <h3 className="mb-3 line-clamp-2 text-xl font-bold text-white/90 transition-colors group-hover:text-white">
        {project.title}
      </h3>
      <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-white/70">
        {project.description}
      </p>
      <div className="mb-5 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-3 py-1 text-xs font-semibold text-white/80 transition-all duration-200 hover:from-blue-600/30 hover:to-purple-600/30"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="rounded-full bg-white/5 px-2 py-1 text-xs text-white/60">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
        >
          Ver Projeto
          <span className="ml-2 transition-transform duration-200 group-hover/link:translate-x-1">
            →
          </span>
        </a>
      )}
    </div>
  </div>
));
ProjectCard.displayName = "ProjectCard";

const useCarousel = (itemsLength: number, autoplayDelay = 6000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const nextSlide = useCallback(
    () => setCurrentIndex((prev) => (prev + 1) % itemsLength),
    [itemsLength],
  );
  const prevSlide = useCallback(
    () => setCurrentIndex((prev) => (prev - 1 + itemsLength) % itemsLength),
    [itemsLength],
  );
  const goToSlide = useCallback((index: number) => setCurrentIndex(index), []);
  useEffect(() => {
    if (isAutoplay && itemsLength > 1) {
      intervalRef.current = setInterval(nextSlide, autoplayDelay);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoplay, nextSlide, autoplayDelay, itemsLength]);
  const pauseAutoplay = useCallback(() => setIsAutoplay(false), []);
  const resumeAutoplay = useCallback(() => setIsAutoplay(true), []);
  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    pauseAutoplay,
    resumeAutoplay,
  };
};

const ProjectsPortfolio = memo(() => {
  const [projects] = useState<Project[]>(initialProjects);
  const {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    pauseAutoplay,
    resumeAutoplay,
  } = useCarousel(projects.length);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const currentChild = container.children[currentIndex] as HTMLElement;
    if (!currentChild) return;
    container.scrollTo({ left: currentChild.offsetLeft, behavior: "smooth" });
  }, [currentIndex]);

  return (
    <section
      className="relative min-h-screen w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16"
      role="region"
      aria-roledescription="carousel"
      aria-label="Portfólio de Projetos"
    >
      <div className="mx-auto w-full px-4">
        <div className="mb-12 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium tracking-wider text-blue-400 uppercase">
              Portfólio
            </span>
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
            Nossos Projetos
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Explore nossa coleção de projetos desenvolvidos com as melhores
            tecnologias e práticas do mercado.
          </p>
        </div>

        <div className="relative w-full">
          <div
            ref={containerRef}
            className="flex w-full gap-6 overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
            onMouseEnter={pauseAutoplay}
            onMouseLeave={resumeAutoplay}
            role="list"
          >
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white/70 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
              aria-label="Projeto anterior"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>

            {projects.map((project) => (
              <div
                key={project.id}
                style={{ scrollSnapAlign: "start" }}
                role="listitem"
              >
                <ProjectCard project={project} />
              </div>
            ))}

            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white/70 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
              aria-label="Próximo projeto"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full transition-all ${currentIndex === index ? "bg-white" : "bg-white/30 hover:bg-white/50"}`}
                aria-label={`Ir para projeto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ProjectsPortfolio.displayName = "ProjectsPortfolio";

export default ProjectsPortfolio;
