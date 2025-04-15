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
        <Image src="/images/decor/three-flower-pink.svg" alt="LeahP" width={225} height={225} />
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
            <div className="date">
              <input
                id="date"
                type="date"
                name="date"
                placeholder='preferred date'
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
        <h2>How this works</h2>
        <h3>Frequetly asked questions...</h3>
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
