"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./globals.css";
import TestimonialItem from "../components/TestimonialItem";

const testimonials = [
  {
    text: "Leah made me feel so comfortable throughout the shoot. She’s super encouraging and helped me relax, especially since I'm a bit shy. Her positive energy made the whole experience fun, and her talent for capturing special moments is amazing!",
    stamp: "/images/stamp-emily.svg",
    stampAlt: "Image of Emily smiling with flowers",
    signature: "/images/signature-emily.svg",
    signatureAlt: "Heart Emily",
  },
  {
    text: "Working with Leah was an absolute joy! She has such a calming presence that made it easy to just be myself. She captured every little moment so beautifully, and I can't stop looking at the photos!",
    stamp: "/images/stamp-john.svg",
    stampAlt: "Image of John smiling",
    signature: "/images/signature-john.svg",
    signatureAlt: "Heart John",
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
