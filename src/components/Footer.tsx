import React from "react";
import { SocialLinks } from "./hero/SocialLinks";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a
      href={href}
      className="text-gray-500 hover:text-cyan-500 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors"
    >
      {children}
    </a>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#highlights", label: "Highlights" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950/80 dark:to-slate-950/60 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-8 relative">
        <div className="flex flex-col items-center gap-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-4 justify-center">
            {links.map(({ href, label }) => (
              <FooterLink key={href} href={href}>
                {label}
              </FooterLink>
            ))}
          </nav>

          {/* Social Links */}
          <div className="scale-90">
            <SocialLinks />
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
            <p>© {currentYear} Arun Chinthalapally. All rights reserved.</p>
            <p className="flex items-center justify-center gap-2">
              Built with{" "}
              <FaReact className="w-6 h-6 text-blue-500 animate-spin" /> and{" "}
              <SiVite className="w-6 h-6 text-yellow-500 animate-pulse" />
            </p>
          </div>

          {/* Views Counter */}
          <div className="flex justify-center">
            <a
              href="https://hits.sh/arun248.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://hits.sh/arun248.github.io.svg?style=for-the-badge&label=Views&color=2a6acf&labelColor=1f2937"
                alt="Views"
                className="rounded-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
