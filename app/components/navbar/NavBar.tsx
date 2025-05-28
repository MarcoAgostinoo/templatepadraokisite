"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { useTheme } from "@/app/hooks/useTheme";
import { HiSun, HiMoon } from "react-icons/hi";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex h-0 text-white lg:h-12">
      <div className="hidden w-full overflow-hidden md:flex">
        <div className="relative w-8/12 overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 md:overflow-visible dark:from-orange-600 dark:to-orange-700">
          <div className="absolute top-0 -right-6 -skew-x-35 bg-gradient-to-r from-orange-600 to-orange-700 p-6 dark:from-orange-700 dark:to-orange-800"></div>{" "}
          <div className="flex items-center">
            <p className="font- animate-on-scroll fade-in-up relative z-10 mt-2 ml-8 text-lg font-semibold tracking-wide text-white dark:text-gray-100">
              Siga-nos:{" "}
            </p>
            <div className="mt-3 ml-4 flex gap-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-white transition-all hover:scale-110 hover:text-gray-200 hover:shadow-lg dark:text-gray-100"
              >
                <FaInstagram size={22} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-white transition-all hover:scale-110 hover:text-gray-200 hover:shadow-lg dark:text-gray-100"
              >
                <FaFacebook size={22} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-white transition-all hover:scale-110 hover:text-gray-200 hover:shadow-lg dark:text-gray-100"
              >
                <FaLinkedin size={22} />
              </Link>
              <Link
                href="https://FaTwitter.com"
                target="_blank"
                className="text-white transition-all hover:scale-110 hover:text-gray-200 hover:shadow-lg dark:text-gray-100"
              >
                <FaTwitter size={22} />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-4/12 bg-gradient-to-r from-blue-900 to-blue-800 dark:from-blue-950 dark:to-blue-900">
          <p className="animate-on-scroll fade-in-up mt-2 ml-16 text-lg font-semibold tracking-wide text-white dark:text-gray-100">
            Telefone: 91907-2390{" "}
          </p>
        </div>
      </div>

      <Navbar
        fluid
        className={`fixed z-50 h-20 w-full transition-all duration-300 ${
          isScrolled
            ? "top-0 bg-white/90 text-black shadow-lg backdrop-blur-sm dark:bg-gray-900/90"
            : "top-0 bg-transparent md:top-10 dark:bg-transparent"
        }`}
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between px-0 py-0">
          <NavbarBrand
            as={Link}
            href="/"
            className="animate-on-scroll fade-in-up"
          >
            <span
              className={`bg-gradient-to-r ${isScrolled ? "scroll-text-adjust from-orange-400 to-orange-500" : "from-white to-white"} bg-clip-text text-4xl font-bold text-transparent brightness-110 contrast-125 filter transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-indigo-600 hover:brightness-125 dark:from-blue-300 dark:to-indigo-200 dark:hover:from-blue-600 dark:hover:to-indigo-600`}
            >
              KiSite
            </span>
          </NavbarBrand>

          <div className="flex items-center gap-3 lg:order-last">
            {/* Dark Mode Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="rounded-full bg-white/10 p-2 transition-all hover:scale-110 hover:bg-gray-100 focus:ring-2 focus:ring-blue-300 focus:outline-none dark:bg-gray-800/50 dark:hover:bg-gray-700 dark:focus:ring-blue-600"
              >
                {theme === "dark" ? (
                  <HiSun className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                ) : (
                  <HiMoon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                )}
              </button>
            )}

            {/* Sign In Button - Desktop */}
            <div className="hidden md:block">
              <Link
                href="https://wa.me/5511933891700?text=Olá! Gostaria de saber mais sobre os serviços da Kisite"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] px-6 py-3 text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#1EBE57]"
                aria-label="Contato via WhatsApp"
              >
                <FaWhatsapp className="text-2xl" />
                <span className="font-semibold">WhatsApp</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <NavbarToggle className="transition-all hover:scale-110 lg:hidden" />
          </div>

          <NavbarCollapse className="lg:order-1 lg:flex">
            <div
              className={`mt-6 flex flex-col space-y-0 p-4 lg:mt-0 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-16 ${
                isScrolled
                  ? "bg-white/90 lg:bg-transparent"
                  : "bg-black/70 lg:bg-transparent"
              }`}
            >
              <NavItem href="/" isActive={true} isScrolled={isScrolled}>
                <span
                  className={`text-normal-adjust ${isScrolled ? "scroll-text-adjust" : ""}`}
                >
                  Home
                </span>
              </NavItem>
              <NavItem href="#about" isActive={false} isScrolled={isScrolled}>
                <span
                  className={`text-normal-adjust ${isScrolled ? "scroll-text-adjust" : ""}`}
                >
                  Sobre
                </span>
              </NavItem>
              <NavItem
                href="#services"
                isActive={false}
                isScrolled={isScrolled}
              >
                <span
                  className={`text-normal-adjust ${isScrolled ? "scroll-text-adjust" : ""}`}
                >
                  Serviços
                </span>
              </NavItem>
              <NavItem href="#pricing" isActive={false} isScrolled={isScrolled}>
                <span
                  className={`text-normal-adjust ${isScrolled ? "scroll-text-adjust" : ""}`}
                >
                  Portifólio
                </span>
              </NavItem>
              <NavItem href="#contact" isActive={false} isScrolled={isScrolled}>
                <span
                  className={`text-normal-adjust ${isScrolled ? "scroll-text-adjust" : ""}`}
                >
                  Contato
                </span>
              </NavItem>

              {/* Sign In Button - Mobile Only */}
              <div className="pt-2 lg:hidden">
                <div className="md:block">
                  <Link
                    href="https://wa.me/5511933891700?text=Olá! Gostaria de saber mais sobre os serviços da Kisite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] px-6 py-3 text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#1EBE57]"
                    aria-label="Contato via WhatsApp"
                  >
                    <FaWhatsapp className="text-2xl" />
                    <span className="font-semibold">WhatsApp</span>
                  </Link>
                </div>
              </div>
            </div>
          </NavbarCollapse>
        </div>
      </Navbar>
    </div>
  );
}

// Component for navigation items
interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  isScrolled: boolean;
}

function NavItem({ href, children, isActive, isScrolled }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`group relative block py-2 text-lg font-semibold transition-all hover:scale-105 lg:py-1 ${
        isScrolled
          ? isActive
            ? "text-blue-700 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)] dark:text-black lg:dark:text-blue-300"
            : "text-gray-900 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:text-blue-900 dark:text-black dark:hover:text-blue-400 lg:dark:text-white"
          : isActive
            ? "font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] hover:text-gray-800"
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 h-0.5 w-0 ${isScrolled ? "bg-blue-700 dark:bg-black lg:dark:bg-blue-800" : "bg-white"} transition-all duration-300 group-hover:w-full ${
          isActive ? "w-full" : ""
        }`}
      ></span>
    </Link>
  );
}
