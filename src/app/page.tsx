"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./globals.css";
import TestimonialItem from "../components/TestimonialItem";

const testimonials = [
  {
    text: "Leah made me feel so comfortable throughout the shoot. She is super encouraging and helped me relax, especially since I am a bit shy. Her positive energy made the whole experience fun, and her talent for capturing special moments is amazing!",
    stamp: "/images/stamp-emily.svg",
    stampAlt: "Image of Emily smiling with flowers",
    signature: "/images/signature-emily.svg",
    signatureAlt: "Heart Emily",
  },
  {
    text: "Leah did an outstanding job with my college graduation photos! She is communicative, professional, and kept the entire process fun! I highly recommend Leah to anyone who is looking to get professional pictures taken!",
    stamp: "/images/stamp-molly.svg",
    stampAlt: "Image of Molly smiling",
    signature: "/images/signature-molly.svg",
    signatureAlt: "Heart Molly",
  },
  {
    text: "I was so happy to have worked with Leah when getting my college graduation photos taken. She made the whole process fun and the pictures turned out exactly how I wanted them to!",
    stamp: "/images/stamp-molly.svg",
    stampAlt: "Image of Molly smiling",
    signature: "/images/signature-molly.svg",
    signatureAlt: "Heart Molly",
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(1); // Tracks slide direction

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // Always slide to the right
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home col-md-12">
      <div className="testimonials">
        <AnimatePresence mode="wait" custom={direction}>
          <TestimonialItem {...testimonials[currentTestimonial]} direction={direction} key={currentTestimonial} />
        </AnimatePresence>
      </div>
    </div>
  );
}
