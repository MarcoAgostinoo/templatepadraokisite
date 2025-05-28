// ServicesSection.jsx
import "animate.css";
import Image from "next/image";
import { ThemeProvider } from "flowbite-react";

const services = [
  {
    img: "/about1.jpg",
    img2: "/sectionServices1.jpg",
    title: "Engenharia Civil e de Gás",
    desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    link: "#",
  },
  {
    img: "/about1.jpg",
    img2: "/sectionServices2.jpg",
    title: "Engenharia de Energia & Potência",
    desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    link: "#",
  },
  {
    img: "/about2.jpg",
    img2: "/sectionServices3.jpg",
    title: "Encanamento & Tratamento de Água",
    desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    link: "#",
  },
];

export default function ServicesSection() {
  return (
    <ThemeProvider>
      <section className="w-full bg-white py-16 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll fade-in-up mx-auto max-w-xl pb-8 text-center">
            <p className="text-primary mb-2 font-medium tracking-widest uppercase">
              Nossos Serviços
            </p>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              Nós Fornecemos os Melhores Serviços Industriais
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="animate-on-scroll fade-in-up group relative w-full overflow-visible bg-[#23272b] shadow-lg sm:w-[350px] dark:bg-gray-800"
              >
                {/* Container da imagem */}
                <div className="relative flex h-56 w-full items-center justify-center overflow-hidden">
                  {/* Miniatura centralizada sobre a imagem */}
                  <Image
                    src={service.img}
                    alt={`Miniatura de ${service.title}`}
                    width={100}
                    height={100}
                    className="absolute top-1/2 left-1/2 z-20 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 border-2 border-white object-cover opacity-100 shadow transition-all duration-500 group-hover:opacity-0"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  {/* Imagem principal com efeito */}
                  <Image
                    src={service.img2}
                    alt={service.title}
                    fill
                    className="h-56 w-full translate-y-8 object-cover opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 350px) 100vw, 350px"
                  />
                  {/* Overlay escuro ajustado para não capturar eventos do mouse */}
                  <div className="pointer-events-none absolute inset-0 z-10 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                </div>
                <div className="relative z-20 flex flex-col items-center px-6 py-8">
                  <div className="flex w-full flex-col items-center">
                    <div className="mb-4 flex w-full items-center justify-center gap-2">
                      <hr className="border-primary w-1/4 border-t-2" />
                      <h3 className="text-center text-xl font-bold text-white">
                        {service.title}
                      </h3>
                      <hr className="border-primary w-1/4 border-t-2" />
                    </div>
                    <p className="mb-6 text-center text-white">
                      {service.desc}
                    </p>
                    <a
                      href={service.link}
                      className="hover:bg-primary inline-block bg-white px-6 py-2 font-semibold text-blue-900 shadow transition-all duration-300 hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-blue-600"
                    >
                      Leia Mais
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
