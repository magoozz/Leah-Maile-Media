// components/FlipCard.tsx
"use client";
import Image from "next/image";
import { useState } from "react";

interface FlipCardProps {
  frontImage: string;
  backImage: string;
  alt: string;
}

export default function FlipCard({ frontImage, backImage, alt }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Image src={frontImage} alt={alt} width={400} height={400} />
        </div>
        <div className="flip-card-back">
          <Image src={backImage} alt={`${alt} back`} width={400} height={400} />
        </div>
      </div>
    </div>
  );
}
