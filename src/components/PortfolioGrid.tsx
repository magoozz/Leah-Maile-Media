"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface PortfolioGridProps {
  images: { src: string; alt: string; orientation?: "portrait" | "landscape" }[];
}

export default function PortfolioGrid({ images }: PortfolioGridProps) {
  return (
    <div className="portfolio-grid">
      {images.map((image, index) => (
        <motion.div
          key={image.src}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`portfolio-item ${image.orientation ?? "landscape"}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={400}
            className="portfolio-img"
          />
        </motion.div>
      ))}
    </div>
  );
}
