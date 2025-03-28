"use client";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import PortfolioGrid from "@/components/PortfolioGrid";


const photos = [
  { src: "/images/aj_1.jpg", alt: "Mountain View" },
  { src: "/images/clif.jpg", alt: "Cityscape" },
  { src: "/images/sid_1.jpg", alt: "Forest Path" },
  { src: "/images/molly_1.jpg", alt: "Sunset Beach" },
  { src: "/images/emily_leaf.jpg", alt: "Night Sky" },
  { src: "/images/photo6.jpg", alt: "Desert Dunes" },
];

export default function Portfolio() {
  return (
    <div className="portfolio col-md-12 text-center">
      <div className="portfolio__title">
        <h1>Here to capture</h1>
        <h2>your special moments</h2>
      </div>

      <PortfolioGrid images={photos} />
    </div>
  );
}
