"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./globals.css";
import TestimonialItem from "../components/TestimonialItem";
import { AnimatePresence } from "framer-motion"; // Import AnimatePresence
import Link from "next/link";

const images = [
  "/images/portfolio/spinny.jpg",
  "/images/portfolio/greta_sunflower.jpg",
  "/images/portfolio/clif.jpg",
  "/images/portfolio/redCouple.jpg",
  "/images/portfolio/grad_1.jpg",
  "/images/portfolio/dancing.jpg",
];

const testimonials = [
  {
    text: "Leah made me feel so comfortable throughout the shoot. She is super encouraging and helped me relax, especially since I am a bit shy. Her positive energy made the whole experience fun, and her talent for capturing special moments is amazing!",
    stamp: "/images/postcard/stamp-emily.svg",
    stampAlt: "Image of Emily smiling with flowers",
    signature: "/images/postcard/signature-emily.svg",
    signatureAlt: "Heart Emily",
  },
  {
    text: "Leah did an outstanding job with my college graduation photos! She is communicative, professional, and kept the entire process fun! I highly recommend Leah to anyone who is looking to get professional pictures taken!",
    stamp: "/images/postcard/stamp-molly.svg",
    stampAlt: "Image of Molly smiling",
    signature: "/images/postcard/signature-molly.svg",
    signatureAlt: "Heart Molly",
  },
  {
    text: "I was so happy to have worked with Leah when getting my college graduation photos taken. She made the whole process fun and the pictures turned out exactly how I wanted them to!",
    stamp: "/images/postcard/stamp-aj.svg",
    stampAlt: "Image of AJ smiling",
    signature: "/images/postcard/signature-aj.svg",
    signatureAlt: "Dash AJ",
  },
  {
    text: "Leah is AMAZING! She made me feel so comfortable during my grad session, and I absolutely loved how my photos turned out! Leah is the best at capturing your happiest moments! I would recommend her again and again :-)",
    stamp: "/images/postcard/stamp-sidney.svg",
    stampAlt: "Image of Sidney smiling",
    signature: "/images/postcard/signature-sidney.svg",
    signatureAlt: "Heart Sidney",
  },
  {
    text: "Leah is one of my favorite photographers to work with! She makes you feel so comfortable and allows you to be YOU in your photos which is amazing! She was so fun to work with, and did an incredible job with my photos!! You will not be disappointed!!",
    stamp: "/images/postcard/stamp-emily.svg",
    stampAlt: "Image of Haley smiling",
    signature: "/images/postcard/signature-haley.svg",
    signatureAlt: "Heart Haley",
  },
  {
    text: "Leah knows how to make you feel like your best friend is behind the camera. Shes able to capture your natural beauty by making you smile! Taking photos with Leah is capturing your happiest moments in their truest form.",
    stamp: "/images/postcard/stamp-megan.svg",
    stampAlt: "Image of Megan smiling",
    signature: "/images/postcard/signature-megan.svg",
    signatureAlt: "Heart Megan",
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentImage, setCurrentImage] = useState(0); // Declare the missing state for current image
  const [direction, setDirection] = useState(1); // Tracks slide direction

  // Change testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // Always slide to the right
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8500); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Change image every 4 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8500); // Change every 4 seconds

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <div className="home col-md-12">
      <div className="images">
        {images.map((src, index) => (
          <div
            key={index}
            className={`transition-image ${index === currentImage ? "active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        ))}
      </div>

      <div className="about">
        <div className="about-content col-md-5">
          <div className="title">
            <h1>Hi I&apos;m Leah!</h1>
          </div>
          <div className="about-image-cluster-mobile">
            <Image src="/images/leahfront.svg" alt="Polaroid of Leah Maile Hlding flowers sitting next to a fern leaf and three flowers" width={500} height={500} />
          </div>
          <p>Nice to meet you, I&apos;m a photographer based out of Washington State who is devoted to capturing those special
            moments that you will never forget! Creating an experience that allows you feel confident and happy for all occasions.
            I promise to create a gallery that you will always be able to look back on foundly. I look forward to meeting you and learning
            more about whats most special to you!
          </p>
          <Link href="/about" className="a-button">
            <div className="note">
              <Image src="/images/me.svg" alt="Get to know me note" width={400} height={400} />
            </div>
          </Link>

        </div>
        <div className="about-image-cluster col-md-6">
          <Image src="/images/leahfront.svg" alt="Polaroid of Leah Maile Holding flowers sitting next to a fern leaf and three flowers" width={750} height={750} />
        </div>
      </div>

      <div className="image-parallax">
        <div className="parallax-image"></div>
      </div>


      <div className="services">
        <div className="services-top">
          <div className="services-title">
            <h2>
              Lifestyle photographer based in WA state
            </h2>
            <h3>
              Love, graduation, teams, and everything in between!
            </h3>
          </div>
          <div className="flower">
            <Image src="/images/decor/taped-breath.svg" alt="LeahP" width={175} height={175} />
          </div>
        </div>
        <div className="services-bottom">
          <div className="services-image-holder col-md-6">
            <Image src="/images/info-mobile.svg" alt="One image of a couple and another of a lady standing infront of a tree with flowers. With a pink flower overlaying both." width={800} height={800} />
          </div>

          <div className="services-image-cluster">
            <Image src="/images/info.svg" alt="Cluster of images with a fern and flower. Two images are couple, and three are one person standing in nature. One image is in a polariod with hand written 'captruing your special moments'." width={750} height={750} priority />
          </div>

          <div className="services-content col-md-5">
            <p>If you&apos;re looking for a passionate and welcoming photographer who&apos;s ready to go above and beyond to make your experience unforgettable, I&apos;m your gal.
              I truly believe in creating connections with my clients, and it means the world to me when they say, “I feel like we&apos;re friends.” The truth is, we absolutely are.
              I&apos;m here to capture your moments, make you feel comfortable, and help tell your story in a way that feels personal and real.</p>
            <Link href="/portfolio" className="s-button">
              <div className="polariod">
                <Image src="/images/work-button.svg" alt="Couple embracing with wooded background 'Check out my work!'" width={450} height={450} />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="image-break">
        <Image
          className="image"
          src="/images/trees.jpeg"
          alt="LeahP"
          width={1920}
          height={1080}
          quality={90}
          layout="responsive"
        />      </div>

      <div className="testimonials">
        <AnimatePresence mode="wait" custom={direction}>
          <TestimonialItem {...testimonials[currentTestimonial]} direction={direction} key={currentTestimonial} />
        </AnimatePresence>
      </div>
    </div >
  );
}
