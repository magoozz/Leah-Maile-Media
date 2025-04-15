import React, { useEffect, useRef } from 'react';

type ParallaxSectionProps = {
  imageUrl: string;
  height?: string; // e.g., '100vh', '75vh'
  speed?: number; // e.g., 0.3 to 0.7
  children?: React.ReactNode;
};

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  imageUrl,
  height = '100vh',
  speed = 0.5,
  children,
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;

      const scrollY = window.scrollY;
      const offsetTop = parallaxRef.current.offsetTop;
      const sectionHeight = parallaxRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      const isVisible =
        scrollY + windowHeight > offsetTop && scrollY < offsetTop + sectionHeight;

      if (isVisible) {
        const scrollOffset = (scrollY - offsetTop) * speed;
        parallaxRef.current.style.transform = `translateY(${scrollOffset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div className="relative overflow-hidden" style={{ height }}>
      <div
        ref={parallaxRef}
        className="absolute top-0 left-0 w-full h-[150%] bg-cover bg-center transition-transform duration-75 will-change-transform"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
