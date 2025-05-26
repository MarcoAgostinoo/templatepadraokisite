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
      threshold: 0.5,
      rootMargin: "0px",
    },
  );

  // Observar todos os elementos com a classe animate-on-scroll
  document.querySelectorAll(".animate-on-scroll").forEach((element) => {
    observer.observe(element);
  });
}
