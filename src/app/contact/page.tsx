'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("xjkyzdoo");
  if (state.succeeded) {
    return <div className="response-message col-md-12">
      <h1>Your special moment is coming up!</h1>
      <h2>Leah will get back to you shortly! In the mean time, keep dreaming of your future shoot!</h2>
      <Image
        src="/images/about/leah-cluster.svg"
        alt="LeahP"
        width={1200}
        height={1200}
      />
    </div>;
  }
  return (
    <div className="contact">
      <div className="flowers">
        <Image src="/images/decor/three-flower-pink.svg" alt="LeahP" width={250} height={250} />
      </div>
      <div className="form-items col-md-12">
        <div className="title-mobile col-md-8">
          <h1>Let&apos;s capture your most special moments!</h1>
          <h2>I&apos;m so excited you&apos;re here, tell me everything...</h2>
        </div>
        <div className="form-img col-md-4">
          <Image
            src="/images/portfolio/flower_girl.jpg"
            alt="Girl staning on a bridge simling with flowers"
            width={550}
            height={550}
          />
        </div>
        <div className="form col-md-4">
          <div className="title">
            <h1>Let&apos;s capture your most special moments!</h1>
            <h2>I&apos;m so excited you&apos;re here, tell me everything...</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="name">
              <input
                id="name"
                type="name"
                name="name"
                placeholder='your name(s)'
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="insta">
              <input
                id="insta"
                type="insta"
                name="insta"
                placeholder='instagram handle (Let&apos;s be freinds!)'
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="email col-md-12">
              <input
                id="email"
                type="email"
                name="email"
                placeholder='email address'
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="phone">
              <input
                id="phone"
                type="phone"
                name="phone"
                placeholder='phone number'
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
            </div>
            <div className="type">
              <input
                id="type"
                type="type"
                name="type"
                placeholder='type of services'
              />
              <ValidationError
                prefix="Type"
                field="type"
                errors={state.errors}
              />
            </div>
            <div className="location">
              <input
                id="location"
                type="location"
                name="location"
                placeholder='where should we meet?'
              />
              <ValidationError
                prefix="Type"
                field="type"
                errors={state.errors}
              />
            </div>
            <div className="date">
              <input
                id="date-est"
                type="date-est"
                name="date-est"
                placeholder='preferred date or month'
              />
              <ValidationError
                prefix="Date"
                field="date"
                errors={state.errors}
              />
            </div>
            <div className="message">
              <textarea
                id="message"
                name="message"
                placeholder='What does your dream shoot look and feel like?'
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting}>
              Let&apos;s do this!
            </button>
          </form>
        </div>
      </div>

      <div className="image-parallax">
        <div className="parallax-image"></div>
      </div>

      <div className="contact-content">
        <div className="title">
          <h2>How this works</h2>
          <h3>Frequetly asked questions...</h3>
        </div>

        <div className="faq-wrapper">
          <div className="faq-item col-md-5">
            <h3>How does booking work?</h3>
            <p>
            Scroll up to my contact form and send over your inquiry to get started. Within 48 hours, I&apos;ll be in touch so we can begin planning your dream session
            that authentically captures your most special moments!
            </p>
          </div>
          <div className="faq-item col-md-3">
            <h3>First time infront of the camera?</h3>
            <p>
            It&apos;s completely normal to feel nervous and you&apos;re not alone! My job is to help you feel relaxed and comfortable so your true self 
            shines through. We&apos;ll chat, laugh, and have fun—you might even forget the camera is there!
            </p>
          </div>
          <div className="faq-item col-md-5">
            <h3>When to inquire for my session?</h3>
            <p>
              The sooner the better! Gives us more time to dream and plan your session!
            </p>
          </div>
          <div className="faq-item col-md-5">
            <h3>Do you travel?</h3>
            <p>
            Absolutely! I&apos;m always up for an adventure and I love to travel, so take me anywhere and I&apos;m there!
            </p>
          </div>
          <div className="faq-item col-md-5">
            <h3>When is my delivery date?</h3>
            <p>
              You can expect a sneak peak within 48 hours and your entire gallery within 14 days. I will let you know based on my current queue.
            </p>
          </div>
          <div className="faq-item col-md-5">
            <h3>What is your photography style?</h3>
            <p>
            My photography style is true to life. Capturing your special moments, big and small, so they last a lifetime. I focus on genuine emotion, natural light, and authentic connection to tell 
            your story in a way that feels timeless and real.
            </p>
          </div>
        </div>
      </div>

      <div className="picture-bar">
        <Image
          src="/images/about/bar.jpg"
          alt="LeahP"
          layout="intrinsic"
          width={1750}
          height={10}
        />
      </div>


    </div>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
