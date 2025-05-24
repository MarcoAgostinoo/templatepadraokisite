export function initAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains("visible")) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px",
    },
  );

  // Observa todos os elementos com classes de animação
  document
    .querySelectorAll(
      ".fade-in-up, .fade-in-down, .fade-in-right, .animate-on-scroll",
    )
    .forEach((element) => {
      observer.observe(element);
    });
}
