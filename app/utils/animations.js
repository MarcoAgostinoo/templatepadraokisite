export function initAnimations() {
    if (typeof window !== 'undefined') {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Adiciona a classe visible apenas uma vez
                    if (!entry.target.classList.contains('visible')) {
                        entry.target.classList.add('visible');
                        // Desconecta o observer imediatamente após a animação ser ativada
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px'
        });

        // Observa apenas os elementos que ainda não foram animados
        document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach(element => {
            observer.observe(element);
        });
    }
} 