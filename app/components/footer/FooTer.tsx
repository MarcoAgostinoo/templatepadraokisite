import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export function FooTer() {
  return (
    <footer className="w-full bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4">
        {/* Nosso Escritório */}
        <div>
          <h4 className="mb-4 text-lg font-semibold tracking-wide uppercase">
            Nosso Escritório
          </h4>
          <p className="mb-2 flex items-center text-sm">
            <svg
              className="mr-2 h-4 w-4 text-orange-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 20s6-5.686 6-10A6 6 0 0 0 4 10c0 4.314 6 10 6 10z" />
            </svg>
            123 Rua Exemplo, São Paulo, Brasil
          </p>
          <p className="mb-2 flex items-center text-sm">
            <svg
              className="mr-2 h-4 w-4 text-orange-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h11A2.5 2.5 0 0 1 18 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-9z" />
            </svg>
            +55 11 1234-5678
          </p>
          <p className="mb-4 flex items-center text-sm">
            <svg
              className="mr-2 h-4 w-4 text-orange-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.94 6.94a1.5 1.5 0 0 1 2.12 0L10 11.88l4.94-4.94a1.5 1.5 0 1 1 2.12 2.12l-6 6a1.5 1.5 0 0 1-2.12 0l-6-6a1.5 1.5 0 0 1 0-2.12z" />
            </svg>
            contato@exemplo.com
          </p>
          <div className="mt-4 flex space-x-4">
            <a
              href="#"
              className="text-white transition-colors hover:text-orange-400"
              aria-label="Twitter"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-white transition-colors hover:text-orange-400"
              aria-label="Facebook"
            >
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-white transition-colors hover:text-orange-400"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-white transition-colors hover:text-orange-400"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Links Rápidos */}
        <div>
          <h4 className="mb-4 text-lg font-semibold tracking-wide uppercase">
            Links Rápidos
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="transition-colors hover:text-orange-400">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-orange-400">
                Contato
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-orange-400">
                Nossos Serviços
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-orange-400">
                Termos &amp; Condições
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-orange-400">
                Suporte
              </a>
            </li>
          </ul>
        </div>

        {/* Horário de Funcionamento */}
        <div>
          <h4 className="mb-4 text-lg font-semibold tracking-wide uppercase">
            Horário de Funcionamento
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-medium">Segunda - Sexta:</span> 09:00 -
              19:00
            </li>
            <li>
              <span className="font-medium">Sábado:</span> 09:00 - 12:00
            </li>
            <li>
              <span className="font-medium">Domingo:</span> Fechado
            </li>
          </ul>
        </div>

        {/* Boletim Informativo */}
        <div>
          <h4 className="mb-4 text-lg font-semibold tracking-wide uppercase">
            Boletim Informativo
          </h4>
          <p className="mb-4 text-sm">
            Inscreva-se para receber as últimas atualizações e ofertas.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full px-4 py-2 text-gray-800 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
            <button
              type="submit"
              className="mt-2 bg-orange-500 px-4 py-2 text-white transition-colors hover:bg-orange-600 sm:mt-0 sm:ml-2"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-blue-700 py-6 text-center text-sm text-gray-300">
        <p>
          &copy; {new Date().getFullYear()} Nome do Seu Site. Todos os direitos
          reservados.
        </p>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://kisite.com.br"
            className="text-orange-400 hover:underline"
          >
            KiSite Soluções Web
          </a>
        </p>
      </div>
    </footer>
  );
}
