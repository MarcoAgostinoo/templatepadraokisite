import AboutSection from "./components/index/about/AboutSection";
import { Hero } from "./components/index/carousel/Hero";
import FactsSection from "./components/index/factsSection/FactsSection";
import Features from "./components/index/features/Features";
import ServicesSection from "./components/index/servicesSection/ServicesSection";
import { AnimatedSection } from "./components/index/features/AnimatedSection";
import EmblaCarousel from "./components/index/emblaCaroussel/EmblaCaroussel";
import { EmblaOptionsType } from "embla-carousel";
import { AccordionFaq } from "./components/index/accordion/AccordionFaq";
import ServicesOverview from "./components/services/servicesOverview/ServicesOverview";
import { FaRocket, FaMobileAlt, FaShieldAlt } from "react-icons/fa";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  align: "start",
  slidesToScroll: 1,
  containScroll: "trimSnaps",
  dragFree: true,
};

const SLIDE_COUNT = 7;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
      <Hero />
      <AboutSection />
      <FactsSection />
      <ServicesSection />
      <Features />
      <EmblaCarousel
        slides={SLIDES}
        options={OPTIONS}
        title="Nossos Projetos"
        subtitle="Veja o Que Concluímos Recentemente"
        showControls={true}
        showDots={true}
        autoplay={true}
        autoplayInterval={5000}
      />
      <AnimatedSection />

      <ServicesOverview
        title="Soluções Digitais Completas"
        description="Impulsione seu negócio com tecnologia de ponta e inovação constante."
        features={[
          {
            icon: (
              <FaRocket className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            ),
            title: "Desenvolvimento Web Avançado",
            description:
              "Sites e aplicações web de alta performance e experiência única.",
            details: (
              <>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                  Utilizamos as tecnologias mais modernas para criar soluções
                  web excepcionais.
                </p>
                <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-400">
                  <li>Next.js e React para máxima performance</li>
                  <li>E-commerce com pagamentos seguros</li>
                  <li>Dashboards e painéis administrativos</li>
                  <li>Integração com APIs e sistemas</li>
                </ul>
              </>
            ),
            callToActionText: "Explorar Projetos",
            callToActionLink: "/projetos",
          },
          {
            icon: (
              <FaMobileAlt className="h-8 w-8 text-green-600 dark:text-green-400" />
            ),
            title: "Aplicativos Mobile Premium",
            description:
              "Apps nativos e híbridos com foco em experiência do usuário.",
            details: (
              <>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                  Desenvolvemos aplicativos que encantam seus usuários e
                  impulsionam seu negócio.
                </p>
                <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-400">
                  <li>iOS e Android nativos</li>
                  <li>React Native para apps multiplataforma</li>
                  <li>Flutter para interfaces fluidas</li>
                  <li>Manutenção e atualizações constantes</li>
                </ul>
              </>
            ),
            callToActionText: "Ver Apps",
            callToActionLink: "/apps",
          },
          {
            icon: (
              <FaShieldAlt className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            ),
            title: "Segurança e Proteção Total",
            description:
              "Proteção avançada para seus dados e sistemas digitais.",
            details: (
              <>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                  Garantimos a segurança completa da sua infraestrutura digital.
                </p>
                <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-400">
                  <li>Auditoria de segurança completa</li>
                  <li>Proteção contra ameaças cibernéticas</li>
                  <li>Backup em nuvem com criptografia</li>
                  <li>Monitoramento 24/7 e suporte técnico</li>
                </ul>
              </>
            ),
            callToActionText: "Proteger Agora",
            callToActionLink: "/seguranca",
          },
        ]}
        showGlobalCTA={true}
        globalCTATitle="Quer levar seu negócio para o próximo nível?"
        globalCTADescription="Nossa equipe está pronta para transformar suas ideias em realidade. Vamos criar algo extraordinário juntos!"
        globalCTAText="Comece Agora"
        globalCTALink="/contato"
      />

      <AccordionFaq />
    </main>
  );
}
