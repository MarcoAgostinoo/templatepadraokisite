import { AnimatedElement } from "../../styles/AnimatedElement";

export const AnimatedSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Título com animação fade-in-up */}
        <AnimatedElement
          animationClass="fade-in-up"
          delayClass="delay-100"
          durationClass="duration-700"
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600">
            Conheça nossas soluções inovadoras
          </p>
        </AnimatedElement>

        {/* Cards com diferentes animações */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Fade in da esquerda */}
          <AnimatedElement
            animationClass="fade-in-left"
            delayClass="delay-200"
            durationClass="duration-700"
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-3">Design Moderno</h3>
            <p className="text-gray-600">
              Criamos interfaces modernas e responsivas que encantam seus usuários.
            </p>
          </AnimatedElement>

          {/* Card 2 - Scale in */}
          <AnimatedElement
            animationClass="scale-in"
            delayClass="delay-300"
            durationClass="duration-700"
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-3">Desenvolvimento</h3>
            <p className="text-gray-600">
              Soluções tecnológicas robustas e escaláveis para seu negócio.
            </p>
          </AnimatedElement>

          {/* Card 3 - Fade in da direita */}
          <AnimatedElement
            animationClass="fade-in-right"
            delayClass="delay-400"
            durationClass="duration-700"
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-3">Suporte 24/7</h3>
            <p className="text-gray-600">
              Suporte técnico disponível 24 horas por dia, 7 dias por semana.
            </p>
          </AnimatedElement>
        </div>

        {/* Seção de destaque com fade-in-down */}
        <AnimatedElement
          animationClass="fade-in-down"
          delayClass="delay-500"
          durationClass="duration-1000"
          className="bg-blue-600 text-white p-8 rounded-xl text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Comece seu projeto hoje mesmo
          </h3>
          <p className="mb-6">
            Transforme suas ideias em realidade com nossa equipe especializada
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Fale Conosco
          </button>
        </AnimatedElement>
      </div>
    </section>
  );
}; 