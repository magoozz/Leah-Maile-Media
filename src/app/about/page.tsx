"use client";
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Link from "next/link";
import FlipCard from '@/components/FlipCard';

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
          <h1>I&apos;m Leah!</h1>
          <h2>Photographer, educator, animal lover, always outside . . .</h2>
          <div className="leah-text">
            <p>Born and raised in Washington State, my love for the outdoors has always been a part of me. From a young age I have been inspired to
              capture the feeling of being in the moment, and nothing is more important to me then capturing your special moments! Well, except my students and passion
              for education. When I&apos;m not in the classroom or working on my latest shoot, you&apos;ll find me hitting the slopes, camping under the stars, or
              exploring Washington&apos;s beauty. . .with my camera in hand of course! Learn more about me below, and when you&apos;re ready,
              fill out a contact form so I can get to know more about you too!

            </p>
          </div>
        </div>
      </div>

      <div className="facts">
        <FlipCard
          frontImage="/images/about/style-front.svg"
          backImage="/images/about/style-back.svg"
          alt="Style"
        />
        <FlipCard
          frontImage="/images/about/aux-front.svg"
          backImage="/images/about/aux-back.svg"
          alt="Style"
        />
        <FlipCard
          frontImage="/images/about/leave-front.svg"
          backImage="/images/about/leave-back.svg"
          alt="Style"
        />
        <FlipCard
          frontImage="/images/about/style-front.svg"
          backImage="/images/about/style-back.svg"
          alt="Style"
        />
        <FlipCard
          frontImage="/images/about/aux-front.svg"
          backImage="/images/about/aux-back.svg"
          alt="Style"
        />
        <FlipCard
          frontImage="/images/about/leave-front.svg"
          backImage="/images/about/leave-back.svg"
          alt="Style"
        />
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
