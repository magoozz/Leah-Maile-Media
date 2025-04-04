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
            width={1200}
            height={1200}
          />
        </div>
        <div className="leah-wrapper col-md-5">
          <h1>Hi I&apos;m Leah!</h1>
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
      <div className="picture-bar">
        <Image
          src="/images/about/bar.jpg"
          alt="LeahP"
          layout="intrinsic"
          width={1750}
          height={10}
        />
      </div>
      <div className="work">
        <div className="check-out col-md-12">
          <h2>I cannot wait to meet you!</h2>
          <div className="bottom">
            <h3>Let&apos;s get something on the books:</h3>
            <Link href="/contact" className="con-button">
              <div className="note">
                <Image src="/images/about/contact-me.svg" alt="Get to know me note" width={150} height={150} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
