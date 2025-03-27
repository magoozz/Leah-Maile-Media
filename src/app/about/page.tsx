"use client";
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Link from "next/link";

export default function About() {
  return (
    <div className="About col-md-12">
      <p>Heres the about page, what shall we put here?</p>
      <Image
        src="/images/leahp-1.svg"
        alt="LeahP"
        width={200} // Adjust width and height as needed
        height={200}
      />

      <Link href="/experience" className="s-button">
        <div className="polariod">
          <Image src="/images/services.svg" alt="Girl smiling with her eyes closed holding babies breath 'check out my work!'" width={350} height={350} />
        </div>
      </Link>
    </div>
  );
}
