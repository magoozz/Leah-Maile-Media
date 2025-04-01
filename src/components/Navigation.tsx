"use client";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import Image from 'next/image';
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

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
          { label: "Meet Leah", href: "/about" },
          { label: "Info", href: "/experience" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Contact me!", href: "/contact" },
        ].map(({ label, href }) => (
          <li key={href} className={pathname === href ? "active" : ""}>
            <Link href={href} className="block w-full h-full p-2">
              {label}
            </Link>
          </li>
        ))}

        {/* Instagram Icon for Desktop */}
        <li className="instagram-desktop" key="https://www.instagram.com/leahmailes/?igsh=OHJjaWxlNzBmZDNu#">
          <Link
            href="https://www.instagram.com/leahmailes/?igsh=OHJjaWxlNzBmZDNu#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={40} className="ig-icon" />
          </Link>
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
            <li key={href} className={pathname === href ? "active" : ""}>
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
