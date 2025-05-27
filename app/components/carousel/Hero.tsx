"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Button from "../button/Button";
import { useEffect, useState } from "react";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
        <SwiperSlide>
          <div className="relative h-full w-full">
            <div className="relative z-10">
              <div className="animate-initial px-8 pt-[120px] text-left md:px-16 lg:px-24">
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
                  <Button variant="primary">CLIQUE AQUI</Button>
                  <Button variant="secondary">SAIBA MAIS</Button>
                </div>
              </div>
            </div>
            <div className="absolute inset-0">
              <Image
                src="/index2.jpg"
                alt="Slide 1"
                fill
                sizes="100vw"
                className="object-cover"
                priority
                quality={90}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full w-full">
            <div className="relative z-10">
              <div className="animate-initial px-8 pt-[150px] text-left md:px-16 lg:px-24">
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
                  <Button variant="primary">CLIQUE AQUI</Button>
                  <Button variant="secondary">SAIBA MAIS</Button>
                </div>
              </div>
            </div>
            <div className="absolute inset-0">
              <Image
                src="/index4.jpg"
                alt="Slide 2"
                fill
                sizes="100vw"
                className="object-cover"
                priority
                quality={90}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full w-full">
            <div className="relative z-10">
              <div className="animate-initial px-8 pt-[120px] text-left md:px-16 lg:px-24">
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
                  <Button variant="primary">Entre em Contato</Button>
                  <Button variant="secondary">Saiba Mais</Button>
                </div>
              </div>
            </div>
            <div className="absolute inset-0">
              <Image
                src="/index1.jpg"
                alt="Slide 3"
                fill
                sizes="100vw"
                className="object-cover"
                priority
                quality={90}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
