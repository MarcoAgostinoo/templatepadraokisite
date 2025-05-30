// pages/portfolio.tsx ou app/portfolio/page.tsx (para Next.js App Router)
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Dialog } from "@headlessui/react"; // Para o modal
import Image from "next/image";
import {
  FaArrowRight,
  FaTimes,
  FaExternalLinkAlt,
  FaGithub,
  FaLaptopCode,
} from "react-icons/fa";

// --- Interfaces de Dados ---
interface Project {
  id: string;
  name: string;
  category: string[]; // Ex: ["Web", "Mobile", "E-commerce"]
  image: string; // URL da imagem de capa do projeto
  description: string; // Descrição curta para o card
  fullDescription: string; // Descrição longa para o modal
  techStack: string[]; // Ex: ["Next.js", "Tailwind CSS", "Node.js"]
  liveLink?: string;
  githubLink?: string;
}

const allProjects: Project[] = [
  {
    id: "1",
    name: "Dashboard Analítico Interativo",
    category: ["Web", "SaaS"],
    image: "/portifolio/portifolio1.jpg", // Substitua pelo caminho real da imagem
    description:
      "Plataforma SaaS para análise de dados com visualizações dinâmicas.",
    fullDescription:
      "Desenvolvimento completo de uma plataforma SaaS interativa para visualização e análise de dados complexos. Utiliza Next.js para o frontend, Node.js e Express para o backend, e integração com bancos de dados NoSQL para escalabilidade. O dashboard oferece filtros avançados e relatórios customizáveis.",
    techStack: ["Next.js", "React", "Node.js", "MongoDB", "D3.js"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: "2",
    name: "Aplicativo de Delivery de Alimentos",
    category: ["Mobile", "E-commerce"],
    image: "/portifolio/portifolio2.jpg", // Substitua pelo caminho real da imagem
    description:
      "App nativo para iOS e Android com rastreamento em tempo real.",
    fullDescription:
      "Criação de um aplicativo de delivery de alimentos de ponta a ponta, incluindo a interface do usuário intuitiva para clientes e um painel de gerenciamento para restaurantes. Desenvolvido com React Native para máxima compatibilidade e desempenho em ambas as plataformas móveis. Funcionalidades incluem pagamentos integrados, geolocalização e sistema de avaliações.",
    techStack: ["React Native", "Firebase", "Stripe API", "Google Maps API"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: "3",
    name: "E-commerce de Moda Sustentável",
    category: ["Web", "E-commerce", "Branding"],
    image: "/portifolio/portifolio3.jpg", // Substitua pelo caminho real da imagem
    description:
      "Loja virtual focada em produtos ecológicos e design responsivo.",
    fullDescription:
      "Construção de uma loja virtual completa para uma marca de moda sustentável. O foco foi na experiência do usuário, design responsivo e integração com sistemas de pagamento e logística. A plataforma é otimizada para SEO e inclui um blog para marketing de conteúdo, utilizando a arquitetura JAMstack para velocidade e segurança.",
    techStack: ["Gatsby", "Shopify API", "GraphQL", "Sanity CMS"],
    liveLink: "#",
  },
  {
    id: "4",
    name: "Website Institucional Moderno",
    category: ["Web", "Branding"],
    image: "/portifolio/portifolio4.jpg", // Substitua pelo caminho real da imagem
    description:
      "Design e desenvolvimento de um site corporativo elegante e otimizado.",
    fullDescription:
      "Desenvolvimento de um website institucional moderno e otimizado para uma empresa de consultoria. O projeto incluiu pesquisa de UX/UI, criação de wireframes e protótipos, e implementação responsiva. O site destaca os serviços da empresa, cases de sucesso e um formulário de contato intuitivo. Foco em performance e acessibilidade.",
    techStack: ["Next.js", "Tailwind CSS", "Contentful CMS"],
    liveLink: "#",
  },
  {
    id: "5",
    name: "Sistema de Gestão de Eventos",
    category: ["Web", "SaaS"],
    image: "/portifolio/portifolio5.jpg", // Substitua pelo caminho real da imagem
    description:
      "Plataforma para organização e gerenciamento de eventos com venda de ingressos.",
    fullDescription:
      "Criação de um sistema robusto para gestão de eventos, permitindo desde a criação de eventos e venda de ingressos até o controle de participantes e relatórios financeiros. O sistema inclui um painel administrativo completo e integração com gateways de pagamento. Desenvolvido para ser escalável e seguro.",
    techStack: ["Laravel", "Vue.js", "MySQL", "Stripe"],
    liveLink: "#",
  },
  {
    id: "6",
    name: "App de Meditação Guiada",
    category: ["Mobile"],
    image: "/portifolio/portifolio6.jpg", // Substitua pelo caminho real da imagem
    description:
      "Aplicativo de bem-estar com sessões de áudio e acompanhamento de progresso.",
    fullDescription:
      "Desenvolvimento de um aplicativo móvel focado em meditação e bem-estar. O app oferece uma biblioteca de sessões de áudio guiadas, funcionalidades de acompanhamento de humor e progresso, e notificações personalizadas. A interface foi desenhada para ser calma e intuitiva, promovendo a usabilidade.",
    techStack: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore"],
    liveLink: "#",
  },
];

const PortfolioPage = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Extrai todas as categorias únicas e adiciona "Todos"
  const categories = [
    "Todos",
    ...Array.from(new Set(allProjects.flatMap((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === "Todos"
      ? allProjects
      : allProjects.filter((project) =>
          project.category.includes(selectedCategory),
        );

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9, y: 50 },
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200 py-16 dark:from-gray-900 dark:to-gray-800"
      aria-label="Portfólio de Projetos"
    >
      {/* Background animado (reutilizado do ServicesOverview) */}
      <div className="absolute inset-0 z-0">
        <svg
          className="h-full w-full opacity-10 dark:opacity-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
        >
          <defs>
            <radialGradient
              id="grad1"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient
              id="grad2"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <motion.circle
            cx="200"
            cy="200"
            r="150"
            fill="url(#grad1)"
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.circle
            cx="800"
            cy="700"
            r="200"
            fill="url(#grad2)"
            animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2,
            }}
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Seção Hero/Introdução */}
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="animate-on-scroll fade-in-up mb-12 text-center"
        >
          <h1 className="animate-on-scroll fade-in-up mb-4 text-4xl font-extrabold text-gray-900 delay-100 md:text-5xl dark:text-white">
            Nosso Portfólio de Sucesso
          </h1>
          <p className="animate-on-scroll fade-in-up mx-auto max-w-2xl text-lg text-gray-700 delay-200 dark:text-gray-300">
            Explore alguns dos nossos projetos mais recentes que transformaram
            ideias em realidade digital e impulsionaram negócios.
          </p>
        </motion.div>

        {/* Filtros de Categoria */}
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="animate-on-scroll fade-in-up mb-12 flex flex-wrap justify-center gap-3 delay-300"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-900 text-white shadow-md hover:bg-blue-800 dark:bg-blue-900 dark:hover:bg-blue-800"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de Projetos */}
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="animate-on-scroll fade-in-up grid grid-cols-1 gap-8 delay-400 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 15px 25px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedProject(project)}
                className="group animate-on-scroll scale-in relative cursor-pointer overflow-hidden bg-white shadow-xl transition-transform duration-300 dark:bg-gray-800 dark:shadow-2xl"
              >
                <div className="animate-on-scroll scale-in relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-semibold">
                        {project.category.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="animate-on-scroll fade-in-up p-6 delay-100">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                  <button className="inline-flex items-center text-blue-900 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                    Ver Detalhes <FaArrowRight className="ml-2 text-sm" />
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="col-span-full text-center text-gray-700 dark:text-gray-300"
            >
              <p className="text-xl">
                Nenhum projeto encontrado nesta categoria.
              </p>
              <p className="text-md mt-2">
                Tente outra categoria ou{" "}
                <button
                  onClick={() => setSelectedCategory("Todos")}
                  className="font-semibold text-blue-900 hover:underline dark:text-blue-400"
                >
                  veja todos os projetos
                </button>
                .
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* CTA Geral */}
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="animate-on-scroll fade-in-up mt-16 text-center delay-500"
        >
          <h3 className="animate-on-scroll fade-in-up mb-4 text-2xl font-bold text-gray-900 delay-600 dark:text-white">
            Pronto para o seu próximo grande projeto?
          </h3>
          <p className="animate-on-scroll fade-in-up mx-auto mb-8 max-w-xl text-lg text-gray-700 delay-700 dark:text-gray-300">
            Vamos discutir como podemos transformar suas ideias em uma realidade
            impactante.
          </p>
          <motion.a
            href="/contato" // Altere para sua página de contato
            className="inline-flex items-center bg-blue-900 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-900 dark:hover:bg-blue-800 dark:focus:ring-blue-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Começar um Projeto <FaLaptopCode className="ml-3" />
          </motion.a>
        </motion.div>
      </div>

      {/* Modal de Detalhes do Projeto */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog
            open={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            className="relative z-50"
          >
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Content */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel
                as={motion.div}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="flex max-h-[90vh] w-full max-w-2xl transform flex-col bg-white p-6 text-left align-middle shadow-2xl transition-all dark:bg-gray-800"
              >
                {/* Título do Modal (Cabeçalho - não rola) */}
                <Dialog.Title
                  as="h3"
                  className="mb-4 flex flex-shrink-0 items-center justify-between text-2xl leading-6 font-bold text-gray-900 dark:text-white"
                >
                  {selectedProject.name}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                    aria-label="Fechar"
                  >
                    <FaTimes className="h-6 w-6" />
                  </button>
                </Dialog.Title>

                {/* Conteúdo do Modal (Corpo - este é o que rola) */}
                <div className="-mr-2 flex-grow overflow-y-auto pr-2">
                  <div className="mb-4">
                    <div className="relative mb-4 h-64 w-full">
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                      />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      Tecnologias Utilizadas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 px-3 py-1 text-sm font-medium text-blue-900 dark:bg-blue-900 dark:text-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botões de Ação (Rodapé - não rola) */}
                <div className="mt-6 flex flex-shrink-0 flex-wrap justify-center gap-4">
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-900 px-6 py-3 text-white shadow-md transition-transform hover:scale-105 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:bg-blue-900 dark:hover:bg-blue-800"
                    >
                      Ver Projeto Online <FaExternalLinkAlt className="ml-2" />
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center border border-gray-300 bg-gray-50 px-6 py-3 text-gray-800 shadow-sm transition-transform hover:scale-105 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                    >
                      Ver no GitHub <FaGithub className="ml-2" />
                    </a>
                  )}
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioPage;
