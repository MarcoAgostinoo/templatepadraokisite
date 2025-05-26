"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import ProjectCard from "./ProjectCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "animate.css/animate.min.css";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
}

const projetosData: Project[] = [
  {
    id: "1",
    title: "Projeto 1",
    description: "Descrição do projeto 1",
    imageUrl: "/project1.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
  {
    id: "2",
    title: "Projeto 2",
    description: "Descrição do projeto 2",
    imageUrl: "/project2.jpg",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: "3",
    title: "Projeto 3",
    description: "Descrição do projeto 3",
    imageUrl: "/project3.jpg",
    technologies: ["React", "Firebase", "Material UI"],
    link: "#",
  },
  {
    id: "4",
    title: "Projeto 4",
    description: "Descrição do projeto 4",
    imageUrl: "/project4.jpg",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    link: "#",
  },
  {
    id: "5",
    title: "Projeto 5",
    description: "Descrição do projeto 5",
    imageUrl: "/project5.jpg",
    technologies: ["Angular", "Django", "MySQL"],
    link: "#",
  },
  {
    id: "6",
    title: "Projeto 6",
    description: "Descrição do projeto 6",
    imageUrl: "/project6.jpg",
    technologies: ["React Native", "GraphQL", "AWS"],
    link: "#",
  },
];

const NAV_PREV_CLASS = "swiper-button-prev-custom-portfolio";
const NAV_NEXT_CLASS = "swiper-button-next-custom-portfolio";

export default function ProjectsPortfolio() {
  const swiperRef = useRef<SwiperType | null>(null);
  const initialSlidesToPrioritize = 3;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-blue-900 py-12 sm:py-16 md:py-20 lg:py-32">
      {/* Background decorativo */}
      <div
        className="absolute inset-0 bg-[url('/pattern-dark.svg')] opacity-5"
        aria-hidden="true"
      ></div>

      <div className="relative container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="mx-auto mb-8 sm:mb-12 md:mb-16 max-w-3xl text-center">
          <span className="mb-2 sm:mb-3 inline-block rounded-full bg-blue-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium tracking-wider text-blue-400 uppercase">
            Portfólio
          </span>
          <h2 className="mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-400 to-blue-500 bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent leading-tight">
            Nossos Projetos em Destaque
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 px-2 sm:px-0">
            Explore nossa coleção de projetos inovadores que transformam ideias
            em realidade.
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative px-2 sm:px-4 md:px-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: ".swiper-pagination-custom-portfolio",
            }}
            navigation={{
              nextEl: `.${NAV_NEXT_CLASS}`,
              prevEl: `.${NAV_PREV_CLASS}`,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="!pb-12 sm:!pb-16 md:!pb-20"
            breakpoints={{
              // Mobile pequeno (320px+)
              320: { 
                slidesPerView: 1, 
                spaceBetween: 12,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 50,
                  modifier: 1,
                  slideShadows: false,
                }
              },
              // Mobile médio (375px+)
              375: { 
                slidesPerView: 1.1, 
                spaceBetween: 16,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 60,
                  modifier: 1,
                  slideShadows: false,
                }
              },
              // Mobile grande (480px+)
              480: { 
                slidesPerView: 1.2, 
                spaceBetween: 20,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 80,
                  modifier: 1,
                  slideShadows: true,
                }
              },
              // Tablet pequeno (640px+)
              640: { 
                slidesPerView: 1.5, 
                spaceBetween: 24,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }
              },
              // Tablet médio (768px+)
              768: { 
                slidesPerView: 2.2, 
                spaceBetween: 28,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }
              },
              // Desktop pequeno (1024px+)
              1024: { 
                slidesPerView: 3, 
                spaceBetween: 32,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }
              },
              // Desktop grande (1280px+)
              1280: { 
                slidesPerView: 3.5, 
                spaceBetween: 32,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }
              },
            }}
          >
            {projetosData.map((projeto, idx) => (
              <SwiperSlide
                key={projeto.id}
                className="group animate__animated animate__fadeInUp !w-[260px] xs:!w-[280px] sm:!w-[300px] md:!w-[320px] lg:!w-[350px]"
                style={{ height: "auto" }}
              >
                <ProjectCard
                  project={projeto}
                  isPriority={idx < initialSlidesToPrioritize}
                />
              </SwiperSlide>
            ))}
            <div className="swiper-pagination-custom-portfolio !mt-6 sm:!mt-8 flex justify-center"></div>
          </Swiper>

          {/* Botões de navegação - Ocultos em mobile, visíveis em tablet+ */}
          <button
            type="button"
            aria-label="Slide anterior"
            className={`${NAV_PREV_CLASS} absolute top-1/2 left-0 sm:left-2 md:-left-6 lg:-left-12 z-20 -translate-y-1/2 transform cursor-pointer rounded-md border border-blue-400 bg-blue-800 p-2 sm:p-3 text-blue-400 transition-all hover:bg-blue-400 hover:text-white focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-900 focus:outline-none hidden sm:block`}
          >
            <FiArrowLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          <button
            type="button"
            aria-label="Próximo slide"
            className={`${NAV_NEXT_CLASS} absolute top-1/2 right-0 sm:right-2 md:-right-6 lg:-right-12 z-20 -translate-y-1/2 transform cursor-pointer rounded-md border border-blue-400 bg-blue-800 p-2 sm:p-3 text-blue-400 transition-all hover:bg-blue-400 hover:text-white focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-900 focus:outline-none hidden sm:block`}
          >
            <FiArrowRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Indicador de swipe para mobile */}
        <div className="mt-4 text-center sm:hidden">
          <p className="text-xs text-blue-300/70 animate-pulse">
            ← Deslize para ver mais projetos →
          </p>
        </div>
      </div>
    </section>
  );
}