"use client";
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

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
    </div>
  );
}
