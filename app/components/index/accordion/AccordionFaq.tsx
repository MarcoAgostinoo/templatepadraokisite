import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

export function AccordionFaq() {
  return (
    <div className="flex mt-14 mb-14 flex-col lg:flex-row gap-4 p-2">
      <Accordion collapseAll className="bg-white shadow-md rounded-lg">
        <AccordionPanel className="border-b border-blue-200">
          <AccordionTitle className="text-blue-600 hover:text-orange-500 font-semibold">
            O que é Flowbite?
          </AccordionTitle>
          <AccordionContent className="p-4">
            <p className="mb-2 text-gray-800 dark:text-gray-300">
              Flowbite é uma biblioteca de componentes interativos de código aberto construída sobre o Tailwind CSS, incluindo botões, dropdowns, modais, barras de navegação e mais.
            </p>
            <p className="text-gray-800 dark:text-gray-300">
              Confira este guia para aprender como 
              <a href="https://flowbite.com/docs/getting-started/introduction/" className="text-orange-500 hover:underline">
                começar 
              </a>
              e desenvolver sites ainda mais rápido com componentes baseados no Tailwind CSS.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel className="border-b border-blue-200">
          <AccordionTitle className="text-blue-600 hover:text-orange-500 font-semibold">
            Existe um arquivo Figma disponível?
          </AccordionTitle>
          <AccordionContent className="p-4">
            <p className="mb-2 text-gray-800 dark:text-gray-300">
              O Flowbite foi inicialmente projetado usando o software Figma, então tudo o que você vê na biblioteca tem um equivalente de design em nosso arquivo Figma.
            </p>
            <p className="text-gray-800 dark:text-gray-300">
              Confira o 
              <a href="https://flowbite.com/figma/" className="text-orange-500 hover:underline">
                sistema de design Figma
              </a>
              baseado nas classes utilitárias do Tailwind CSS e componentes do Flowbite.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel className="border-b border-blue-200">
          <AccordionTitle className="text-blue-600 hover:text-orange-500 font-semibold">
            Quais são as diferenças entre Flowbite e Tailwind UI?
          </AccordionTitle>
          <AccordionContent className="p-4">
            <p className="mb-2 text-gray-800 dark:text-gray-300">
              A principal diferença é que os componentes principais do Flowbite são de código aberto sob a licença MIT, enquanto o Tailwind UI é um produto pago. Outra diferença é que o Flowbite utiliza componentes menores e independentes, enquanto o Tailwind UI oferece seções de páginas.
            </p>
            <p className="mb-2 text-gray-800 dark:text-gray-300">
              No entanto, recomendamos usar tanto o Flowbite, Flowbite Pro quanto o Tailwind UI, pois não há razão técnica que impeça o uso do melhor dos dois mundos.
            </p>
            <p className="mb-2 text-gray-800 dark:text-gray-300">Saiba mais sobre essas tecnologias:</p>
            <ul className="list-disc pl-5 text-gray-800 dark:text-gray-300">
              <li>
                <a href="https://flowbite.com/pro/" className="text-orange-500 hover:underline">
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a href="https://tailwindui.com/" rel="nofollow" className="text-orange-500 hover:underline">
                  Tailwind UI
                </a>
              </li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
      <Accordion collapseAll className="bg-white shadow-md rounded-lg">
        <AccordionPanel className="border-b border-blue-200">
          <AccordionTitle className="text-blue-600 hover:text-orange-500 font-semibold">
            O que é Flowbite?
          </AccordionTitle>
          <AccordionContent className="p-4">
            <p className="mb-2 text-gray-800 dark:text-gray-300">
              Flowbite é uma biblioteca de componentes interativos de código aberto construída sobre o Tailwind CSS, incluindo botões, dropdowns, modais, barras de navegação e mais.
            </p>
            <p className="text-gray-800 dark:text-gray-300">
              Confira este guia para aprender como 
              <a href="https://flowbite.com/docs/getting-started/introduction/" className="text-orange-500 hover:underline">
                começar 
              </a>
              e desenvolver sites ainda mais rápido com componentes baseados no Tailwind CSS.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel className="border-b border-blue-200">
          <AccordionTitle className="text-blue-600 hover:text-orange-500 font-semibold">
            Existe um arquivo Figma disponível?
          </AccordionTitle>
          <AccordionContent className="p-4">
            <p className="mb-2 text-gray-800 dark:text-gray-300">
              O Flowbite foi inicialmente projetado usando o software Figma, então tudo o que você vê na biblioteca tem um equivalente de design em nosso arquivo Figma.
            </p>
            <p className="text-gray-800 dark:text-gray-300">
              Confira o 
              <a href="https://flowbite.com/figma/" className="text-orange-500 hover:underline">
                sistema de design Figma
              </a>
              baseado nas classes utilitárias do Tailwind CSS e componentes do Flowbite.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel className="border-b border-blue-200">
          <AccordionTitle className="text-blue-600 hover:text-orange-500 font-semibold">
            Quais são as diferenças entre Flowbite e Tailwind UI?
          </AccordionTitle>
          <AccordionContent className="p-4">
            <p className="mb-2 text-gray-800 dark:text-gray-300">
              A principal diferença é que os componentes principais do Flowbite são de código aberto sob a licença MIT, enquanto o Tailwind UI é um produto pago. Outra diferença é que o Flowbite utiliza componentes menores e independentes, enquanto o Tailwind UI oferece seções de páginas.
            </p>
            <p className="mb-2 text-gray-800 dark:text-gray-300">
              No entanto, recomendamos usar tanto o Flowbite, Flowbite Pro quanto o Tailwind UI, pois não há razão técnica que impeça o uso do melhor dos dois mundos.
            </p>
            <p className="mb-2 text-gray-800 dark:text-gray-300">Saiba mais sobre essas tecnologias:</p>
            <ul className="list-disc pl-5 text-gray-800 dark:text-gray-300">
              <li>
                <a href="https://flowbite.com/pro/" className="text-orange-500 hover:underline">
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a href="https://tailwindui.com/" rel="nofollow" className="text-orange-500 hover:underline">
                  Tailwind UI
                </a>
              </li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  );
}