"use client";
import { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaInstagram } from "react-icons/fa";


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="nav-name col-md-12">
        <div className="stamp">
          <Link href="/">
            <Image
              src="/images/logo-stamp-filled.svg"
              alt="Leah Maile Media, ESTD 2018, Capturing the moment. Flower graphic"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <Link href="/">Leah Maile Media</Link>

        {/* Instagram Icon for Mobile */}
        <a
          href="https://www.instagram.com/leahmailes/?igsh=OHJjaWxlNzBmZDNu#"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-mobile"
        >
          <FaInstagram size={30} className="ig-icon" />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="toggle md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <ul className="nav-links col-md-12">
        {[
          { label: "About", href: "/about" },
          { label: "Info", href: "/experience" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Contact me!", href: "/contact" },
        ].map(({ label, href }) => (
          <li key={href}>
            <Link href={href} className="hover:text-gray-500">
              {label}
            </Link>
          </li>
        ))}
        
        {/* Instagram Icon for Desktop */}
        <li className="instagram-desktop">
          <a href="https://www.instagram.com/leahmailes/?igsh=OHJjaWxlNzBmZDNu#" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={40} className="ig-icon" />
          </a>
        </li>
      </ul>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="mobile-nav">
          {[
            { label: "About", href: "/about" },
            { label: "Info", href: "/experience" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Contact me!", href: "/contact" },
          ].map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="mobile-item"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}