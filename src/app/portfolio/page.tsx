"use client";

import Masonry from "react-masonry-css";
import Image from "next/image";

const images = [
  { src: "/images/portfolio/grad_3.jpg" },
  { src: "/images/portfolio/aj_1.jpg" },
  { src: "/images/portfolio/grad_12.jpg" },
  { src: "/images/portfolio/emily_leaf.jpg" },
  { src: "/images/portfolio/sid_3.jpg" },
  { src: "/images/portfolio/grad_15.jpg" },
  { src: "/images/portfolio/molly_1.jpg" },
  { src: "/images/portfolio/sid_4.jpg" },
  { src: "/images/portfolio/grad_1.jpg" },
  { src: "/images/portfolio/grace_2.jpg" },
  { src: "/images/portfolio/grad_2.jpg" },
  { src: "/images/portfolio/aj_3.jpg" },
  { src: "/images/portfolio/grad_5.jpg" },
  { src: "/images/portfolio/grad_19.jpg" },
  { src: "/images/portfolio/grace_1.jpg" },
  { src: "/images/portfolio/sid_1.jpg" },
  { src: "/images/portfolio/sid_2.jpg" },
  { src: "/images/portfolio/grad_7.jpg" }, 
  { src: "/images/portfolio/grad_19.jpg" },
  { src: "/images/portfolio/grad_4.jpg" },
  { src: "/images/portfolio/molly_2.jpg" },
  { src: "/images/portfolio/emily_3.jpg" },
];

const breakpointColumns = {
  default: 3,
  768: 2,
  480: 1,
};

const PhotoGrid = () => {
  return (
    <div className="portfolio">
      <div className="p-15">
        <div className="portfolio-title">
          <h1>Here to capture</h1>
          <h2>your special moments</h2>
        </div>

        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-4"
          columnClassName="pl-4"
        >
          {images.map((img, index) => (
            <div key={index} className="image-slot">
              <Image
                src={img.src}
                alt={`Photo ${index}`}
                width={400}
                height={600}
                className="img w-full h-auto rounded-lg shadow-md"
              />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default PhotoGrid;
