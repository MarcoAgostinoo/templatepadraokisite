"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Button from "../button/Button";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function Hero() {
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
              <div className="px-8 pt-[120px] text-left md:px-16 lg:px-24">
                <p className="mb-2 text-sm font-semibold text-orange-400 uppercase drop-shadow-md md:text-base">
                  ESTAMOS PRONTOS PARA AJUDAR VOCÊ
                </p>
                <h2 className="mb-4 text-4xl font-extrabold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
                  SERVIÇOS MECÂNICOS
                  <br />
                  EM GERAL
                </h2>
                <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/90 drop-shadow-md md:text-xl">
                  A Garagem Oficina realiza serviços automotivos de alta
                  qualidade, desde manutenções preventivas até reparos
                  complexos, garantindo segurança e desempenho do seu veículo.
                  Agende sua visita.
                </p>
                <div className="flex gap-4">
                  <Button variant="primary">CLIQUE AQUI</Button>
                  <Button variant="secondary">SAIBA MAIS</Button>
                </div>
              </div>
            </div>
            <Image
              src="/index2.jpg"
              alt="Slide 1"
              fill
              className="object-cover"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full w-full">
            <div className="relative z-10">
              <div className="px-8 pt-[150px] text-left md:px-16 lg:px-24">
                <p className="mb-2 text-sm font-semibold text-orange-400 uppercase drop-shadow-md md:text-base">
                  ESTAMOS PRONTOS PARA AJUDAR VOCÊ
                </p>
                <h2 className="mb-4 text-4xl font-extrabold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
                  SERVIÇOS MECÂNICOS
                  <br />
                  EM GERAL
                </h2>
                <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/90 drop-shadow-md md:text-xl">
                  A Garagem Oficina realiza serviços automotivos de alta
                  qualidade, desde manutenções preventivas até reparos
                  complexos, garantindo segurança e desempenho do seu veículo.
                  Agende sua visita.
                </p>
                <div className="flex gap-4">
                  <Button variant="primary">CLIQUE AQUI</Button>
                  <Button variant="secondary">SAIBA MAIS</Button>
                </div>
              </div>
            </div>
            <Image
              src="/index4.jpg"
              alt="Slide 2"
              fill
              className="object-cover"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full w-full">
            <div className="relative z-10">
              <div className="px-8 pt-[120px] text-left md:px-16 lg:px-24">
                <p className="mb-2 text-sm font-semibold text-orange-400 uppercase drop-shadow-md md:text-base">
                  ESTAMOS PRONTOS PARA AJUDAR VOCÊ
                </p>
                <h2 className="mb-4 text-4xl font-extrabold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
                  SERVIÇOS MECÂNICOS
                  <br />
                  EM GERAL
                </h2>
                <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/90 drop-shadow-md md:text-xl">
                  A Garagem Oficina realiza serviços automotivos de alta
                  qualidade, desde manutenções preventivas até reparos
                  complexos, garantindo segurança e desempenho do seu veículo.
                  Agende sua visita.
                </p>
                <div className="flex gap-4">
                  <Button variant="primary">Entre em Contato</Button>
                  <Button variant="secondary">Saiba Mais</Button>
                </div>
              </div>
            </div>
            <Image
              src="/index1.jpg"
              alt="Slide 3"
              fill
              className="object-cover"
              priority
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
