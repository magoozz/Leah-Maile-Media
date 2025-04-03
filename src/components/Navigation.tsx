"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="navigation col-md-12">
      {/* Logo and Name */}
      <div className="items col-md-7">
        <Link href="/">
          <Image
            src="/images/logo-stamp-filled-inv.svg"
            alt="Leah Maile Media Logo"
            className="stamp"
            width={75}
            height={75}
          />
        </Link>
        <Link href="/" className="title">Leah Maile</Link>
      </div>
      <div className="links">
        <a
          href="https://www.instagram.com/leahmailes/?igsh=OHJjaWxlNzBmZDNu#"
          target="_blank"
          rel="noopener noreferrer"
          className={`ig-icon ${isOpen ? "fullpage-color" : "default-color"}`}
        >
          <FaInstagram size={40} />
        </a>


        <button
          className="p-2 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={40} color="#506248" /> : <Menu size={40} />}
        </button>
      </div>


      {/* Full Page Overlay Menu */}
      {isOpen && (
        <div className="fullpage">
          <div className="stamp-inner">
            <Link href="/">
              <Image
                src="/images/logo-stamp-filled.svg"
                alt="Leah Maile Media Logo"
                width={225}
                height={225}
              />
            </Link>
          </div>

          <div className="floral">
            <Image
              src="/images/nav/green-watermark.svg"
              alt="Flowers Graphic"
              width={250}
              height={250}
            />
          </div>

          <div className="stamps">
              <Image
                src="/images/nav/nav-stamps.svg"
                alt="Two stamps of images overlaying eachother. One of a forest and one of a girl smiling with flowers."
                width={450}
                height={450}
              />
            </div>

          <div className="nav col-md-12">

            <div className="nav-polaroid">
              <Image
                src="/images/nav/nav-polaroid.svg"
                alt="Tapped polaroid of a couple twirling in a sunset forest"
                width={500}
                height={500}
              />
            </div>


            <ul className="nav-links">
              {[
                { label: "Meet Leah", href: "/about" },
                { label: "Information", href: "/experience" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact", href: "/contact" },
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
          </div>

        </div>
      )}
    </nav>
  );
}