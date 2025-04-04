"use client";
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Link from "next/link";

export default function About() {
  return (
    <div className="about-page col-md-12">
      <div className="intro">
        <div className="leah-cluster col-md-6">

          <Image
            src="/images/about/leah-cluster.svg"
            alt="LeahP"
            width={1200} // Adjust width and height as needed
            height={1200}
          />
        </div>
        <div className="leah-wrapper col-md-5">
          <h1>I&apos;m Leah!</h1>
          <h2>Photographer, educator, animal lover, always outside . . .</h2>
          <div className="leah-text">
            <p>Nice to meet you, I&apos;m a photographer based out of Washington State who is devoted to capturing those special
              moments that you will never forget! Creating an experience that allows you feel confident and happy for all occasions.
              I promise to create a gallery that you will always be able to look back on foundly. I look forward to meeting you and learning
              more about whats most special to you!
            </p>
          </div>
        </div>
      </div>
      <div className="facts">

      </div>
      <Link href="/experience" className="button">
        <div className="leah-polariod">
          <Image src="/images/work-p.svg" alt="Girl smiling with her eyes closed holding babies breath 'check out my work!'" width={350} height={350} />
        </div>
      </Link>
    </div>
  );
}
