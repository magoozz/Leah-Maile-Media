"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface TestimonialItemProps {
  text: string;
  stamp: string;
  stampAlt: string;
  signature: string;
  signatureAlt: string;
  direction: number; // 1 = slide right, -1 = slide left
}

export default function TestimonialItem({
  text,
  stamp,
  stampAlt,
  signature,
  signatureAlt,
  direction,
}: TestimonialItemProps) {
  return (
    <motion.div
      key={text} // Important for Framer Motion to recognize changes
      initial={{ x: direction * 100, opacity: 0 }} // Start offscreen
      animate={{ x: 0, opacity: 1 }} // Slide into view
      exit={{ x: -direction * 100, opacity: 0 }} // Slide out
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="testimonial-item col-md-10"
    >
      <div className="stamp">
        <Image src={stamp} alt={stampAlt} width={160} height={160} />
      </div>
      <div className="postcard-text col-md-4">
        <p>{text}</p>
      </div>
      <div className="signature">
        <Image src={signature} alt={signatureAlt} width={250} height={250} />
      </div>
    </motion.div>
  );
}
