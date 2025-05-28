import React from "react";
import Image from "next/image"; // Import Next.js Image component
import { FaCheck, FaEnvelope, FaPhone } from "react-icons/fa";
import { ThemeProvider } from "flowbite-react";

const AboutSection = () => {
  return (
    <ThemeProvider>
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap">
            {/* Left column with images */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-3 flex h-full">
                <div className="animate-on-scroll fade-in-right w-1/2 self-start px-3">
                  <Image
                    className="hover-scale h-auto w-full object-cover shadow-lg transition-all dark:shadow-gray-700"
                    src="/about1.jpg"
                    alt="About Us"
                    width={500}
                    height={300}
                    priority // Optional: prioritize loading for LCP
                  />
                </div>
                <div className="animate-on-scroll fade-in-left w-1/2 self-end px-3">
                  <Image
                    className="hover-scale h-auto w-full object-cover shadow-lg transition-all dark:shadow-gray-700"
                    src="/about2.jpg"
                    alt="About Us"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </div>

            {/* Right column with content */}
            <div className="animate-on-scroll fade-in-up w-full px-4 lg:w-1/2">
              <p className="animate-on-scroll fade-in-up mb-2 font-medium text-orange-500 uppercase">
                Sobre Nós
              </p>
              <h1 className="animate-on-scroll fade-in-up mb-4 text-5xl font-bold text-blue-900 dark:text-white">
                Somos Líderes no Mercado Industrial
              </h1>
              <p className="animate-on-scroll fade-in-up mb-4 text-gray-600 dark:text-gray-300">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>

              {/* Experience box with list */}
              <div className="mb-4 flex items-center">
                <div className="animate-on-scroll scale-in hover-shadow flex-shrink-0 bg-blue-900 p-8 transition-all dark:bg-gray-800">
                  <h1 className="text-7xl font-bold text-orange-500">25</h1>
                  <h5 className="text-xl font-bold text-orange-500">Anos de</h5>
                  <h5 className="font-bold text-orange-500">Experiência</h5>
                </div>
                <div className="ml-4">
                  <p className="animate-on-scroll fade-in-right hover-scale mb-4 transition-all dark:text-white">
                    <span className="mr-2 inline-block">
                      <FaCheck size={20} color="#f97316" />
                    </span>
                    Energia & Potência
                  </p>
                  <p className="animate-on-scroll fade-in-right hover-scale mb-4 transition-all dark:text-white">
                    <span className="mr-2 inline-block">
                      <FaCheck size={20} color="#f97316" />
                    </span>
                    Engenharia Civil
                  </p>
                  <p className="animate-on-scroll fade-in-right hover-scale mb-4 transition-all dark:text-white">
                    <span className="mr-2 inline-block">
                      <FaCheck size={20} color="#f97316" />
                    </span>
                    Engenharia Química
                  </p>
                  <p className="animate-on-scroll fade-in-right hover-scale mb-4 transition-all dark:text-white">
                    <span className="mr-2 inline-block">
                      <FaCheck size={20} color="#f97316" />
                    </span>
                    Engenharia Mecânica
                  </p>
                  <p className="animate-on-scroll fade-in-right hover-scale mb-0 transition-all dark:text-white">
                    <span className="mr-2 inline-block">
                      <FaCheck size={20} color="#f97316" />
                    </span>
                    Engenharia de Petróleo & Gás
                  </p>
                </div>
              </div>

              {/* Contact information */}
              <div className="-mx-2 flex flex-wrap pt-2">
                <div className="w-full px-2 sm:w-1/2">
                  <div className="animate-on-scroll fade-in-up hover-scale flex items-center transition-all">
                    <div className="hover-shadow flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 transition-all">
                      <FaEnvelope size={20} color="white" />
                    </div>
                    <div className="ml-3">
                      <p className="mb-1 text-gray-600 dark:text-gray-300">
                        Email
                      </p>
                      <h5 className="mb-0 text-lg font-bold text-blue-900 dark:text-white">
                        info@example.com
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="w-full px-2 sm:w-1/2">
                  <div className="animate-on-scroll fade-in-up hover-scale flex items-center transition-all">
                    <div className="hover-shadow flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-900 transition-all dark:bg-gray-800">
                      <FaPhone size={20} color="white" />
                    </div>
                    <div className="ml-3">
                      <p className="mb-1 text-gray-600 dark:text-gray-300">
                        Ligue para nós
                      </p>
                      <h5 className="mb-0 text-lg font-bold text-blue-900 dark:text-white">
                        +012 345 6789
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
};

export default AboutSection;
