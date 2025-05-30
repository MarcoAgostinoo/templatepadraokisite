import Image from "next/image";

export default function HeroSobre() {
  return (
    <div className="flex flex-col">
      <section
        className="relative flex-grow bg-white pt-20 pb-0 sm:pt-28 sm:pb-0 lg:pt-32 lg:pb-0 xl:pt-40 xl:pb-0 dark:bg-gray-900"
        style={{
          backgroundImage: "url(/sobre.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="animate-on-scroll scale-in absolute inset-0">
          <Image
            className="hidden h-full w-full object-contain md:block"
            src="/about3.png"
            alt="Background"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="relative mb-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 lg:w-2/5">
              <h1 className="animate-on-scroll fade-in-right text-3xl font-bold text-blue-900 sm:text-4xl lg:text-5xl dark:text-blue-100">
                Weekly articles on design inspirations
              </h1>
              <p className="animate-on-scroll fade-in-left mt-4 text-sm leading-6 text-blue-900 delay-100 sm:text-base sm:leading-7 dark:text-blue-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vehicula massa in enim luctus. Rutrum arcu.
              </p>

              <p className="animate-on-scroll fade-in-down mt-8 text-sm font-bold text-blue-900 delay-200 sm:text-base dark:text-blue-100">
                Join the email list to:
              </p>
              <ul className="mt-3 space-y-3 sm:mt-4 sm:space-y-4">
                <li className="animate-on-scroll fade-in-right flex items-center delay-300">
                  <span className="text-sm text-orange-500 sm:text-base dark:text-orange-400">
                    {" "}
                    💸{" "}
                  </span>
                  <span className="ml-2 flex-1 text-sm font-medium text-blue-900 sm:text-base dark:text-blue-100">
                    Get 10 Web & Mobile UI Inspirations Every Week
                  </span>
                </li>

                <li className="animate-on-scroll fade-in-left flex items-center delay-400">
                  <span className="text-sm text-orange-500 sm:text-base dark:text-orange-400">
                    {" "}
                    🎁{" "}
                  </span>
                  <span className="ml-2 flex-1 text-sm font-medium text-blue-900 sm:text-base dark:text-blue-100">
                    Exclusive Discount on Design Resources
                  </span>
                </li>

                <li className="animate-on-scroll fade-in-right flex items-center delay-500">
                  <span className="text-sm text-orange-500 sm:text-base dark:text-orange-400">
                    {" "}
                    ⌛️{" "}
                  </span>
                  <span className="ml-2 flex-1 text-sm font-medium text-blue-900 sm:text-base dark:text-blue-100">
                    3 Random Subscriber will Get Featured on Emails
                  </span>
                </li>
              </ul>

              <div className="animate-on-scroll fade-in-up group relative mt-8 inline-flex delay-600 sm:mt-10">
                <div className="transitiona-all absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg filter duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>

                <a
                  href="#"
                  title=""
                  className="relative inline-flex items-center justify-center border border-transparent bg-orange-500 px-4 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none sm:px-6 sm:py-3 sm:text-base dark:bg-orange-600 dark:hover:bg-orange-700"
                  role="button"
                >
                  Join Newsletter For Free
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-on-scroll fade-in-down delay-700 md:hidden">
          <Image
            className="h-full w-full object-cover sm:max-h-[400px] md:hidden"
            src="/about2.jpg"
            alt="Background Mobile"
            width={800}
            height={400}
            sizes="100vw"
            priority
          />
        </div>
      </section>
    </div>
  );
}
