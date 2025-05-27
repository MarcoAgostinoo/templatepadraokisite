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
              let isInitialized = false;
              let animationTimeout;
              let observer;

              function initAnimations() {
                if (typeof window === 'undefined' || isInitialized) return;
                
                if (!observer) {
                  observer = new IntersectionObserver(
                    (entries) => {
                      entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                          if (!entry.target.classList.contains('visible')) {
                            requestAnimationFrame(() => {
                              entry.target.classList.add('visible');
                              observer.unobserve(entry.target);
                            });
                          }
                        }
                      });
                    },
                    {
                      threshold: 0.1,
                      rootMargin: '50px',
                    }
                  );
                }

                const animatedElements = document.querySelectorAll(
                  '.fade-in-up:not(.visible), .fade-in-down:not(.visible), .fade-in-right:not(.visible), .fade-in-left:not(.visible), .scale-in:not(.visible), .animate-on-scroll:not(.visible)'
                );

                if (animatedElements.length > 0) {
                  animatedElements.forEach((element) => {
                    observer.observe(element);
                  });
                }

                isInitialized = true;
              }

              // Inicializa as animações quando o DOM estiver pronto
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initAnimations);
              } else {
                initAnimations();
              }

              // Otimização do MutationObserver com debounce
              const mutationObserver = new MutationObserver((mutations) => {
                clearTimeout(animationTimeout);
                animationTimeout = setTimeout(() => {
                  const newElements = document.querySelectorAll(
                    '.fade-in-up:not(.visible), .fade-in-down:not(.visible), .fade-in-right:not(.visible), .fade-in-left:not(.visible), .scale-in:not(.visible), .animate-on-scroll:not(.visible)'
                  );
                  if (newElements.length > 0) {
                    requestAnimationFrame(initAnimations);
                  }
                }, 150);
              });

              mutationObserver.observe(document.body, {
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
