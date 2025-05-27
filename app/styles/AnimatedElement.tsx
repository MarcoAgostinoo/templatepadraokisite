"use client";
import { ReactNode, FC } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedElementProps {
  children: ReactNode;
  animationClass: string; // ex: "fade-in-up", "scale-in"
  className?: string; // Classes adicionais para o wrapper
  threshold?: number; // De 0.0 a 1.0
  triggerOnce?: boolean;
  delayClass?: string; // ex: "delay-200"
  durationClass?: string; // ex: "duration-1000"
  rootMargin?: string;
  as?: keyof JSX.IntrinsicElements; // Permite mudar o elemento wrapper (div, section, etc.)
  onVisibilityChange?: (inView: boolean, entry?: IntersectionObserverEntry) => void;
}

export const AnimatedElement: FC<AnimatedElementProps> = ({
  children,
  animationClass,
  className = "",
  threshold = 0.5,
  triggerOnce = true,
  delayClass = "",
  durationClass = "",
  rootMargin = "0px",
  as: Tag = "div",
  onVisibilityChange,
}) => {
  const { ref, inView, entry } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
    onChange: onVisibilityChange,
  });

  const combinedClasses = `
    ${animationClass}
    ${inView ? "visible" : ""}
    ${delayClass}
    ${durationClass}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <Tag ref={ref} className={combinedClasses}>
      {children}
    </Tag>
  );
}; 