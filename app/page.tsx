import AboutSection from "./components/index/about/AboutSection";
import { Hero } from "./components/index/carousel/Hero";
import FactsSection from "./components/index/factsSection/FactsSection";
import Features from "./components/index/features/Features";
import ServicesSection from "./components/index/servicesSection/ServicesSection";
import { AnimatedSection } from "./components/index/features/AnimatedSection";
import EmblaCarousel from "./components/index/emblaCaroussel/EmblaCaroussel";
import { EmblaOptionsType } from "embla-carousel";
import { AccordionFaq } from "./components/index/accordion/AccordionFaq";


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
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
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
      <AccordionFaq />
    </main>
  );
}
