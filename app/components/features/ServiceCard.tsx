import { AnimatedElement } from "../../styles/AnimatedElement";

interface ServiceCardProps {
  title: string;
  description: string;
  animation: string;
  delay: string;
}

const ServiceCard = ({ title, description, animation, delay }: ServiceCardProps) => {
  return (
    <AnimatedElement
      animationClass={animation}
      delayClass={delay}
      durationClass="duration-500"
      className="bg-white p-6 rounded-lg shadow-lg transform-gpu"
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </AnimatedElement>
  );
};

export default ServiceCard; 