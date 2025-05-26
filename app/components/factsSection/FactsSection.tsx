"use client";
import {
  FaAward,
  FaUserTie,
  FaHandshake,
  FaProjectDiagram,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const facts = [
  {
    icon: (
      <FaAward className="mb-4 text-4xl text-white sm:text-5xl md:text-6xl" />
    ),
    value: 25,
    label: "Anos de Experiência",
  },
  {
    icon: (
      <FaUserTie className="mb-4 text-4xl text-white sm:text-5xl md:text-6xl" />
    ),
    value: 135,
    label: "Membros da Equipe",
  },
  {
    icon: (
      <FaHandshake className="mb-4 text-4xl text-white sm:text-5xl md:text-6xl" />
    ),
    value: 957,
    label: "Clientes Satisfeitos",
  },
  {
    icon: (
      <FaProjectDiagram className="mb-4 text-4xl text-white sm:text-5xl md:text-6xl" />
    ),
    value: 1839,
    label: "Projetos Concluídos",
  },
];

export default function FactsSection() {
  const [counters, setCounters] = useState(facts.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    const element = document.querySelector("#facts-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 segundos para completar a contagem
    const steps = 60; // 60 frames por segundo
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((counter, index) => {
          const target = facts[index].value;
          const progress = currentStep / steps;
          const newValue = Math.round(target * progress);
          return Math.min(newValue, target);
        }),
      );

      currentStep++;
      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div
      id="facts-section"
      className="my-8 flex min-h-[400px] w-full items-center justify-center bg-blue-900 px-4 py-8 sm:my-12 sm:h-96 sm:px-2 sm:py-12"
    >
      <div className="mx-auto mt-4 flex max-w-7xl flex-wrap items-center justify-center gap-4 sm:gap-8">
        {facts.map((fact, idx) => (
          <div
            key={fact.label}
            className="animate-on-scroll fade-in-up hover-scale flex w-full max-w-xs min-w-[200px] flex-1 items-center justify-center rounded-lg border border-gray-700 bg-transparent p-4 text-center transition-all sm:w-[calc(50%-1rem)] sm:min-w-[250px] sm:p-8 lg:w-[calc(25%-1.5rem)]"
          >
            <div className="flex flex-col items-center justify-center">
              {fact.icon}
              <h1 className="text-primary mb-2 text-4xl font-bold text-orange-500 sm:text-5xl md:text-6xl">
                {counters[idx]}
              </h1>
              <span className="text-base font-semibold text-orange-500 sm:text-lg">
                {fact.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
