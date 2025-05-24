import AboutSection from "./components/about/AboutSection";
import { Hero } from "./components/carousel/Hero";
import FactsSection from "./components/factsSection/FactsSection";
import ServicesSection from "./components/servicesSection/ServicesSection";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
      <Hero />
      <AboutSection />
      <FactsSection />
      <ServicesSection />
    </main>
  );
}