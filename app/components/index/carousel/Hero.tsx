"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "/index2.jpg",
    alt: "Slide 1",
    pt: "pt-[120px]",
    buttons: [
      {
        text: "Agende Agora",
        href: "/agendamento",
        className:
          "flex items-center justify-center border border-yellow-400 px-5 py-2.5 text-sm font-medium text-yellow-400 shadow-lg hover:bg-yellow-400 hover:text-white hover:shadow-yellow-400/30 focus:ring-4 focus:ring-yellow-300 focus:outline-none",
      },
      {
        text: "Nossos Serviços",
        href: "/servicos",
        className:
          "flex items-center justify-center bg-gray-700 px-5 py-2.5 text-sm font-medium text-white shadow-lg hover:bg-gray-800 hover:shadow-gray-700/30 focus:ring-4 focus:ring-gray-300 focus:outline-none",
      },
    ],
  },
  {
    image: "/index4.jpg",
    alt: "Slide 2",
    pt: "pt-[150px]",
    buttons: [
      {
        text: "Fale Conosco",
        href: "/contato",
        className:
          "flex items-center justify-center border border-yellow-400 px-5 py-2.5 text-sm font-medium text-yellow-400 shadow-lg hover:bg-yellow-400 hover:text-white hover:shadow-yellow-400/30 focus:ring-4 focus:ring-yellow-300 focus:outline-none",
      },
      {
        text: "Sobre Nós",
        href: "/sobre",
        className:
          "flex items-center justify-center bg-gray-700 px-5 py-2.5 text-sm font-medium text-white shadow-lg hover:bg-gray-800 hover:shadow-gray-700/30 focus:ring-4 focus:ring-gray-300 focus:outline-none",
      },
    ],
  },
  {
    image: "/index1.jpg",
    alt: "Slide 3",
    pt: "pt-[120px]",
    buttons: [
      {
        text: "Orçamento",
        href: "/orcamento",
        className:
          "flex items-center justify-center border border-yellow-400 px-5 py-2.5 text-sm font-medium text-yellow-400 shadow-lg hover:bg-yellow-400 hover:text-white hover:shadow-yellow-400/30 focus:ring-4 focus:ring-yellow-300 focus:outline-none",
      },
      {
        text: "Localização",
        href: "/localizacao",
        className:
          "flex items-center justify-center bg-gray-700 px-5 py-2.5 text-sm font-medium text-white shadow-lg hover:bg-gray-800 hover:shadow-gray-700/30 focus:ring-4 focus:ring-gray-300 focus:outline-none",
      },
    ],
  },
];

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="h-screen w-full bg-gray-100" />;
  }

  return (
    <div className="h-screen w-full">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-screen w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <div className="relative z-10">
                <div
                  className={`animate-initial px-8 ${slide.pt} text-left md:px-16 lg:px-24`}
                >
                  <p className="fade-in-right mb-2 text-sm font-bold text-orange-500 uppercase drop-shadow-lg delay-100 md:text-base">
                    ESTAMOS PRONTOS PARA AJUDAR VOCÊ
                  </p>
                  <h2 className="fade-in-up mb-4 text-4xl font-black text-white drop-shadow-xl delay-200 md:text-5xl lg:text-6xl">
                    <span className="font-black text-orange-400">SERVIÇOS</span>{" "}
                    MECÂNICOS
                    <br />
                    <span className="font-black text-orange-400">EM GERAL</span>
                  </h2>
                  <p className="fade-in-up mb-8 max-w-2xl text-lg leading-relaxed font-semibold text-white drop-shadow-lg delay-300 md:text-xl">
                    A Garagem Oficina realiza serviços automotivos de alta
                    qualidade, desde manutenções preventivas até reparos
                    complexos, garantindo segurança e desempenho do seu veículo.
                    Agende sua visita.
                  </p>
                  <div className="fade-in-up flex gap-4 delay-400">
                    {slide.buttons.map((button, buttonIndex) => (
                      <Link href={button.href} key={buttonIndex}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                          className={button.className}
                        >
                          {button.text}
                        </motion.button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                  quality={90}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
