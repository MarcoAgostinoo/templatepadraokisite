import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlay } from "@fortawesome/free-solid-svg-icons";
import styles from "./Features.module.css";
import Image from "next/image";

const features = [
  {
    title: "Trabalhadores Experientes",
    desc: "Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
  },
  {
    title: "Serviços Industriais Confiáveis",
    desc: "Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
  },
  {
    title: "Suporte ao Cliente 24/7",
    desc: "Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
  },
];

export default function Features() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          {/* Imagem e botão de vídeo */}
          <div className="relative flex w-full items-center justify-center lg:w-1/2">
            <Image
              src="/about1.jpg"
              alt="Feature"
              width={600}
              height={400}
              className="w-full rounded-lg object-contain"
              style={{
                minHeight: 400,
                maxHeight: 480,
                objectPosition: "center",
              }}
              priority
            />
            {/* Botão Play sobreposto */}
            <a
              href="#video-modal"
              className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
              aria-label="Assistir vídeo"
              style={{ textDecoration: "none" }}
            >
              <span className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-white shadow-lg transition hover:scale-105">
                <span
                  className={`flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6F0F] ${styles.pulse}`}
                >
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="pl-1 text-3xl text-white"
                  />
                </span>
              </span>
            </a>
          </div>
          {/* Texto e features */}
          <div className="flex w-full flex-col justify-center lg:w-1/2">
            <p className="mb-2 text-sm font-semibold tracking-wider text-[#FF6F0F] uppercase">
              POR QUE NOS ESCOLHER!
            </p>
            <h2 className="mb-4 text-4xl leading-tight font-extrabold text-[#0B2B4B]">
              Algumas Razões Pelas Quais As Pessoas Nos Escolhem!
            </h2>
            <p className="mb-8 text-base text-gray-700">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className="space-y-6">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#FF6F0F]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-2xl text-white"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0B2B4B]">
                      {item.title}
                    </h4>
                    <span className="text-sm text-gray-600">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal do vídeo */}
      <div id="video-modal" className={styles.modal}>
        <div className={styles["modal-content"]}>
          <div className={styles["modal-header"]}>
            <h3>Vídeo do Youtube</h3>
            <a href="#" className={styles.close}>
              &times;
            </a>
          </div>
          <div className={styles["modal-body"]}>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                title="YouTube video"
                allowFullScreen
                className="h-72 w-full rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
