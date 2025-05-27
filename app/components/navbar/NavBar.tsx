"use client";
import {
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex h-12 text-white">
      <div className="hidden w-full overflow-hidden md:flex">
        <div className="relative w-8/12 overflow-hidden bg-gradient-to-r from-blue-900 to-blue-800 md:overflow-visible">
          <div className="absolute top-0 -right-6 -skew-x-35 bg-gradient-to-r from-blue-800 to-blue-900 p-6"></div>{" "}
          <div className="flex items-center">
            <p className="font- animate-on-scroll fade-in-up relative z-10 mt-2 ml-8 text-lg font-semibold tracking-wide">
              Siga-nos:{" "}
            </p>
            <div className="mt-3 ml-4 flex gap-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="transition-all hover:scale-110 hover:text-gray-200 hover:shadow-lg"
              >
                <FaInstagram size={22} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="transition-all hover:scale-110 hover:text-gray-200 hover:shadow-lg"
              >
                <FaFacebook size={22} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="transition-all hover:scale-110 hover:text-gray-200 hover:shadow-lg"
              >
                <FaLinkedin size={22} />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-4/12 bg-gradient-to-r from-orange-500 to-orange-600">
          <p className="animate-on-scroll fade-in-up mt-2 ml-16 text-lg font-semibold tracking-wide">
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
              className={`bg-gradient-to-r ${isScrolled ? "scroll-text-adjust from-orange-400 to-orange-500" : "from-blue-200 to-indigo-300"} bg-clip-text text-4xl font-bold text-transparent brightness-110 contrast-125 filter transition-all duration-300 hover:scale-105 hover:from-blue-800 hover:to-indigo-800 hover:brightness-125 dark:from-blue-300 dark:to-indigo-200 dark:hover:from-blue-800 dark:hover:to-indigo-800`}
            >
              KiSite
            </span>
          </NavbarBrand>

          <div className="flex items-center gap-3 lg:order-last">
            {/* Dark Mode Toggle */}
            <DarkThemeToggle className="rounded-full bg-white/50 p-2 transition-all hover:scale-110 hover:bg-gray-100 focus:ring-2 focus:ring-blue-300 focus:outline-none dark:bg-gray-800/50 dark:hover:bg-gray-700 dark:focus:ring-blue-600" />

            {/* Sign In Button - Desktop */}
            <div className="hidden md:block">
              <Link
                href="/login"
                className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 font-medium text-white shadow-md transition-all hover:scale-105 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg"
              >
                Sign In
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
                  About
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
                  Services
                </span>
              </NavItem>
              <NavItem href="#pricing" isActive={false} isScrolled={isScrolled}>
                <span
                  className={`text-normal-adjust ${isScrolled ? "scroll-text-adjust" : ""}`}
                >
                  Pricing
                </span>
              </NavItem>
              <NavItem href="#contact" isActive={false} isScrolled={isScrolled}>
                <span
                  className={`text-normal-adjust ${isScrolled ? "scroll-text-adjust" : ""}`}
                >
                  Contact
                </span>
              </NavItem>

              {/* Sign In Button - Mobile Only */}
              <div className="pt-2 lg:hidden">
                <Link
                  href="/login"
                  className="inline-block w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-center font-medium text-white transition-all hover:scale-105 hover:shadow-lg"
                >
                  Sign In
                </Link>
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
            ? "text-blue-700 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)] dark:text-blue-300"
            : "text-gray-900 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:text-blue-900 dark:text-white dark:hover:text-blue-400"
          : isActive
            ? "font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] hover:text-gray-200"
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 h-0.5 w-0 ${isScrolled ? "bg-blue-700 dark:bg-blue-300" : "bg-white"} transition-all duration-300 group-hover:w-full ${
          isActive ? "w-full" : ""
        }`}
      ></span>
    </Link>
  );
}
