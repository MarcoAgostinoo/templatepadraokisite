import React, { memo } from "react";
import { FaCheck, FaEnvelope, FaPhone } from "react-icons/fa";
import Image from "next/image";

// Dados das especialidades movidos para fora do componente
const specialties = [
  "Energia & Potência",
  "Engenharia Civil",
  "Engenharia Química",
  "Engenharia Mecânica",
  "Engenharia de Petróleo & Gás",
] as const;

// Componente de ícone de check memoizado
const CheckIcon = memo(() => (
  <span className="mr-2 inline-block flex-shrink-0">
    <FaCheck size={20} color="#f97316" />
  </span>
));

CheckIcon.displayName = "CheckIcon";

// Componente de especialidade memoizado
const SpecialtyItem = memo(({ specialty }: { specialty: string }) => (
  <p className="mb-4 flex items-center transition-transform duration-200 last:mb-0 hover:translate-x-1">
    <CheckIcon />
    <span>{specialty}</span>
  </p>
));

SpecialtyItem.displayName = "SpecialtyItem";

// Componente de informação de contato memoizado
const ContactInfo = memo(
  ({
    icon,
    label,
    value,
    bgColor,
  }: {
    icon: React.ReactNode;
    label: string;
    value: string;
    bgColor: string;
  }) => (
    <div className="mb-4 w-full px-2 sm:mb-0 sm:w-1/2">
      <div className="group flex items-center transition-transform duration-200 hover:scale-105">
        <div
          className={`${bgColor} flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 hover:shadow-lg`}
        >
          {icon}
        </div>
        <div className="ml-3 min-w-0 flex-1">
          <p className="mb-1 text-sm text-gray-600">{label}</p>
          <h5 className="truncate text-lg font-bold text-blue-900">{value}</h5>
        </div>
      </div>
    </div>
  ),
);

ContactInfo.displayName = "ContactInfo";

// Componente principal otimizado
const AboutSection = memo(() => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          {/* Coluna esquerda com imagens otimizada */}
          <div className="mb-8 w-full px-4 lg:mb-0 lg:w-1/2">
            <div className="-mx-3 flex h-full">
              <div className="w-1/2 self-start px-3">
                <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:scale-105">
                  <Image
                    src="/about1.jpg"
                    alt="Sobre nossa empresa - Imagem 1"
                    width={500}
                    height={300}
                    className="image-fade-in h-auto w-full object-cover"
                    priority={true}
                  />
                </div>
              </div>
              <div className="w-1/2 self-end px-3">
                <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:scale-105">
                  <Image
                    src="/about2.jpg"
                    alt="Sobre nossa empresa - Imagem 2"
                    width={500}
                    height={300}
                    className="image-fade-in h-auto w-full object-cover"
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Coluna direita com conteúdo otimizada */}
          <div className="w-full px-4 lg:w-1/2">
            <header className="animate-on-scroll fade-in-up mb-6">
              <p className="mb-2 text-sm font-medium tracking-wider text-orange-500 uppercase">
                Sobre Nós
              </p>
              <h1 className="mb-4 text-3xl leading-tight font-bold text-blue-900 sm:text-4xl lg:text-5xl">
                Somos Líderes no Mercado Industrial
              </h1>
              <p className="mb-6 leading-relaxed text-gray-600">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
            </header>

            {/* Caixa de experiência com lista otimizada */}
            <div className="animate-on-scroll fade-in-up mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="flex-shrink-0 rounded-lg bg-blue-900 p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl sm:p-8 sm:text-left">
                <h2 className="text-5xl leading-none font-bold text-orange-500 sm:text-7xl">
                  25
                </h2>
                <div className="font-bold text-orange-500">
                  <p className="text-lg sm:text-xl">Anos de</p>
                  <p className="text-base sm:text-lg">Experiência</p>
                </div>
              </div>

              <div className="min-w-0 flex-1">
                {specialties.map((specialty) => (
                  <SpecialtyItem key={specialty} specialty={specialty} />
                ))}
              </div>
            </div>

            {/* Informações de contato otimizadas */}
            <div className="animate-on-scroll fade-in-up -mx-2 flex flex-wrap pt-2">
              <ContactInfo
                icon={<FaEnvelope size={20} color="white" />}
                label="Email"
                value="info@example.com"
                bgColor="bg-blue-600"
              />
              <ContactInfo
                icon={<FaPhone size={20} color="white" />}
                label="Ligue para nós"
                value="+012 345 6789"
                bgColor="bg-blue-900"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
