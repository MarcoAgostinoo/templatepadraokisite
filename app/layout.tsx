import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/navbar/NavBar";
import { FooTer } from "./components/footer/FooTer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KiSite - Soluções Web",
  description:
    "Template moderno e otimizado desenvolvido com Next.js e Flowbite React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <NavBar />
        {children}
        <FooTer />
        <Script id="init-animations" strategy="afterInteractive">
          {`
            (function() {
              function initAnimations() {
                if (typeof window === 'undefined') return;
                
                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        if (!entry.target.classList.contains('visible')) {
                          // Adiciona a classe visible com um pequeno delay para garantir que o SSR foi concluído
                          requestAnimationFrame(() => {
                            entry.target.classList.add('visible');
                          });
                          observer.unobserve(entry.target);
                        }
                      }
                    });
                  },
                  {
                    threshold: 0.1,
                    rootMargin: '50px',
                  }
                );

                // Seleciona todos os elementos com classes de animação
                const animatedElements = document.querySelectorAll(
                  '.fade-in-up, .fade-in-down, .fade-in-right, .fade-in-left, .scale-in, .animate-on-scroll'
                );

                // Adiciona um pequeno delay antes de começar a observar os elementos
                setTimeout(() => {
                  animatedElements.forEach((element) => {
                    observer.observe(element);
                  });
                }, 100);
              }

              // Inicializa as animações quando o DOM estiver pronto
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initAnimations);
              } else {
                initAnimations();
              }

              // Reinicializa as animações quando houver mudanças no DOM
              const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                  if (mutation.addedNodes.length) {
                    // Adiciona um pequeno delay para garantir que o SSR foi concluído
                    setTimeout(initAnimations, 100);
                  }
                });
              });

              observer.observe(document.body, {
                childList: true,
                subtree: true,
              });
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
