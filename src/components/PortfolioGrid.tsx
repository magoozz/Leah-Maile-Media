"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface PortfolioGridProps {
  images: { src: string; alt: string; orientation: "portrait" | "landscape" }[];
}

export default function PortfolioGrid({ images }: PortfolioGridProps) {
  const [imageOrientations, setImageOrientations] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const orientations = await Promise.all(
        images.map((image) =>
          new Promise<string>((resolve) => {
            if (image.orientation) {
              resolve(image.orientation); // Use manual setting if available
            } else {
              const img = new window.Image();
              img.src = image.src;
              img.onload = () => {
                resolve(img.naturalHeight > img.naturalWidth ? "portrait" : "landscape");
              };
            }
          })
        )
      );
      setImageOrientations(orientations);
    };

    loadImages();
  }, [images]);

  return (
    <div className="portfolio-grid">
      {images.map((image, index) => (
        <motion.div
          key={image.src}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`portfolio-item ${imageOrientations[index]}`}
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
