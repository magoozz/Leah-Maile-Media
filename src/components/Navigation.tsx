"use client";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaBook, FaEnvelope } from "react-icons/fa";

export default function Navigation() {

  return (
    <nav className="nav-container">
      <div className="nav-left">
        <h1 className="nav-name">
          <Link href="/">Leah Maile Media</Link>
        </h1>
      </div>
      <ul className="nav-links">
        {[
          { label: "About", href: "/about" },
          { label: "Experience", href: "/experience" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Contact", href: "/contact" },
        ].map(({ label, href }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
      <div className="nav-right">
        <Link
          href="/resume/MeganBartlett_Resume.pdf"
          download
          className="resume-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Link>
        <div className="social-icons">
          <Link
            href="https://www.linkedin.com/in/megan-bartlett-77215a215"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link href="mailto:meganbartlett73@u.boisestate.edu" aria-label="Email">
            <FaEnvelope size={24} />
          </Link>
          <Link
            href="https://github.com/magoozz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://www.goodreads.com/user/show/164080752-megan-bartlett"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Good Reads"
          >
            <FaBook size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
