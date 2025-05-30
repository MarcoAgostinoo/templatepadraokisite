"use client";

import BannerPages from "@/app/components/bannerPages/BannerPages";
import HeroServices from "@/app/components/services/heroServices/HeroServices";
import ServicesList from "@/app/components/services/servicesList/ServicesList";
import ServicesOverview from "@/app/components/services/servicesOverview/ServicesOverview";
import { AnimatedSection } from "@/app/components/index/features/AnimatedSection";
import { FaMobileAlt, FaShieldAlt, FaRocket } from "react-icons/fa";

const services = [
  {
    title: "Desenvolvimento Web",
    description: "Criamos sites e aplicações web modernas e responsivas",
    image: "/imagem1.jpg",
    features: [
      "Sites Responsivos",
      "Aplicações Web",
      "E-commerce",
      "Sistemas Personalizados",
    ],
  },
  {
    title: "Marketing Digital",
    description: "Estratégias completas para aumentar sua presença online",
    image: "/imagem2.jpg",
    features: ["SEO", "Mídias Sociais", "Email Marketing", "Análise de Dados"],
  },
  {
    title: "Consultoria",
    description: "Consultoria especializada para seu negócio",
    image: "/imagem3.jpg",
    features: [
      "Análise de Negócios",
      "Planejamento Estratégico",
      "Otimização de Processos",
      "Gestão de Projetos",
    ],
  },
];

export default function Servicos() {
  return (
    <div>
      <BannerPages
        title="Serviços"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Serviços", active: true },
        ]}
      />
      <ServicesList services={services} />
      <HeroServices />
      <AnimatedSection />

      <ServicesOverview
        title="Nossas Soluções Tecnológicas"
        description="Transforme seu negócio com nossas soluções inovadoras e personalizadas."
        features={[
          {
            icon: (
              <FaRocket className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            ),
            title: "Desenvolvimento Web",
            description:
              "Criamos sites e aplicações web modernas e responsivas.",
            details: (
              <>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                  Desenvolvimento com as mais recentes tecnologias do mercado.
                </p>
                <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-400">
                  <li>Sites Responsivos</li>
                  <li>Aplicações Web</li>
                  <li>E-commerce</li>
                  <li>Sistemas Personalizados</li>
                </ul>
              </>
            ),
            callToActionText: "Ver Projetos",
            callToActionLink: "/projetos",
          },
          {
            icon: (
              <FaMobileAlt className="h-8 w-8 text-green-600 dark:text-green-400" />
            ),
            title: "Aplicativos Móveis",
            description:
              "Desenvolvimento de apps nativos e híbridos para iOS e Android.",
            details: (
              <>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                  Soluções móveis completas para seu negócio.
                </p>
                <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-400">
                  <li>Apps Nativos</li>
                  <li>React Native</li>
                  <li>Flutter</li>
                  <li>Manutenção e Suporte</li>
                </ul>
              </>
            ),
            callToActionText: "Conhecer Apps",
            callToActionLink: "/apps",
          },
          {
            icon: (
              <FaShieldAlt className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            ),
            title: "Segurança Digital",
            description: "Proteção completa para seus dados e sistemas.",
            details: (
              <>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                  Garantimos a segurança da sua infraestrutura digital.
                </p>
                <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-400">
                  <li>Auditoria de Segurança</li>
                  <li>Proteção de Dados</li>
                  <li>Backup em Nuvem</li>
                  <li>Monitoramento 24/7</li>
                </ul>
              </>
            ),
            callToActionText: "Proteger Agora",
            callToActionLink: "/seguranca",
          },
        ]}
        showGlobalCTA={true}
        globalCTATitle="Pronto para transformar seu negócio?"
        globalCTADescription="Entre em contato conosco e descubra como podemos ajudar você a alcançar seus objetivos."
        globalCTAText="Fale Conosco"
        globalCTALink="/contato"
      />
    </div>
  );
}
