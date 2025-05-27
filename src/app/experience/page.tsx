"use client"
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Image from 'next/image';
import { useEffect, useState } from "react";

const images = [
  "/images/experience/emily_girls.jpg",
  "/images/experience/family.jpg",
  "/images/experience/sid.jpeg",
  "/images/experience/tassle.jpg",
  "/images/experience/couple1.jpeg"

];

export default function Experience() {
  const [currentImage, setCurrentImage] = useState(0); // Declare the missing state for current image

  // Change image every 4 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8500); // Change every 4 seconds

    return () => clearInterval(imageInterval);
  }, []);


  return (
    <div className="experience col-md-12">
      <div className="intro container-fluid px-0">
        <div className="row gx-0 align-items-center">
          <div className="left-img col-md-3 d-none d-md-block">
            <Image
              src="/images/experience/left.svg"
              alt="LeahP"
              layout="intrinsic"
              width={500}
              height={500}
            />
          </div>

          <div className="flowers">
          <Image src="/images/decor/three-flower-cream.svg" alt="LeahP" width={225} height={225} />
        </div>

          <div className="content col-12 col-md-6 text-center">
            <h1>All things lifestyle</h1>
            <p>
              Let&apos;s be real—being in front of a camera can feel awkward. But once we get going, that fades fast. We&apos;ll be chatting, laughing, chasing the light (or a toddler), and before you know it, you&apos;ll be completely in the moment—just as you are.
              I capture YOUR special moments: couples in love, growing families, seniors stepping into what&apos;s next, teams with heart, and passionate people behind brands. If it matters to you, I&apos;m all in.
              Looking for a laid-back photographer who shows up, cheers you on, and feels more like a new friend? I&apos;m your person. And when life brings more moments worth remembering, I&apos;ll be here camera in hand ready to capture them!
            </p>
          </div>

          <div className="mobile-img d-block d-md-none w-100">
            <Image
              src="/images/experience/mobile.svg"
              alt="Mobile Experience"
              layout="responsive"
              width={1600}
              height={900}
            />
          </div>

          <div className="right-img col-md-3 d-none d-md-block">
            <Image
              src="/images/experience/right.svg"
              alt="LeahP"
              layout="intrinsic"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>


      <div className="services-container">
        <div className="flowers">
          <Image src="/images/decor/three-flower-cream.svg" alt="LeahP" width={225} height={225} />
        </div>
        
        <div className="services-title">
          <h2>Services</h2>
        </div>

        <div className="services">
          <div className="services-content col-12 col-md-5">
            <div className="couples">
              <h3>Couples & Families</h3>
              <p>Whether it's just the two of you, dating, engaged, or marking another year of love, or your family is growing with new little faces and meaningful milestones, these sessions are about connection. From quiet moments to joyful chaos,
                from maternity to newborn to the everyday in-between, I'm here to capture the love that fills your life.</p>
            </div>

            <div className="portraits">
              <h3>Portraits</h3>
              <p>Stepping into a new chapter . . . graduating, refreshing your headshots, or simply capturing this moment in your life. tThese sessions are all about celebrating you. No special occasion needed. Just come as you are,
                and let&apos;s create photos that feel authentic, confident, and uniquely yours.
              </p>
            </div>

            <div className="events">
              <h3>Events & Teams</h3>
              <p>Team spirit, brand personality, big wins, and meaningful gatherings—these sessions celebrate the people at the heart of it all. From candid moments to polished portraits,
                I&apos;ll help you create images that feel authentic, approachable, and full of life.</p>
            </div>
          </div>

          <div className="services-images col-12 col-md-4">
            <div className="image-container">

              {images.map((src, index) => (
                <div
                  key={index}
                  className={`transition-image ${index === currentImage ? "active" : ""}`}
                  style={{ backgroundImage: `url(${src})` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="process">
        <div className="process__title">
          <h2 className="the">
            the
          </h2>
          <h2 className="process-word">
            Process
          </h2>
        </div>
        <div className="process-list">
          <div className="list-item col-md-2">
            <div className="list-text">
              <h3>Contact me</h3>
              <p>Fill out a contact form & spare no detail!!</p>
            </div>
          </div>

          <div className="list-item col-md-2">
            <div className="list-text">
              <h3>its offical!</h3>
              <p>We will have a date set, talk more about your dream shoot, and prepare for the big day!</p>
            </div>
          </div>

          <div className="list-item col-md-2">
            <div className="list-text">
              <h3>your special moment</h3>
              <p>Time to live in the moment and I will handle the rest!</p>
            </div>
          </div>

          <div className="list-item col-md-2">
            <div className="list-text">
              <h3>Delivery day</h3>
              <p>Relive those memories for a lifetime!</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}