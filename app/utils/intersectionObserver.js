export function initIntersectionObserver() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    document.querySelectorAll('.fade-in-up, .fade-in-down, .fade-in-right').forEach((element) => {
        observer.observe(element);
    });
} 