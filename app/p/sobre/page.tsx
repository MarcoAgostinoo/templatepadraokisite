import BannerPages from "@/app/components/bannerPages/BannerPages";
import FactsSection from "@/app/components/index/factsSection/FactsSection";
import HeroSobre from "@/app/components/sobre/heroSobre/HeroSobre";
import Team from "@/app/components/sobre/team/Team";

export default function Sobre() {
  return (
    <div className="flex flex-col">
      <BannerPages
        title="Sobre Nós"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sobre", active: true },
        ]}
      />
      <HeroSobre />
      <FactsSection />
      <Team
        members={[
          {
            name: "João Silva",
            role: "CEO & Fundador",
            image: "/about1.jpg",
            social: {
              facebook: "#",
              twitter: "#",
              instagram: "#",
            },
          },
          {
            name: "Maria Santos",
            role: "Diretora de Design",
            image: "/about2.jpg",
            social: {
              facebook: "#",
              twitter: "#",
              instagram: "#",
            },
          },
          {
            name: "Pedro Oliveira",
            role: "Desenvolvedor Senior",
            image: "/about3.png",
            social: {
              facebook: "#",
              twitter: "#",
              instagram: "#",
            },
          },
        ]}
      />
    </div>
  );
}
