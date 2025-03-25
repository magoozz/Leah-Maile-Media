"use client";
import Link from "next/link";

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
          { label: "A", href: "/about" },
          { label: "E", href: "/experience" },
          { label: "P", href: "/portfolio" },
          { label: "C", href: "/contact" },
        ].map(({ label, href }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
