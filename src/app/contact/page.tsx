"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the CAPTCHA before submitting.");
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, captchaToken }),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setCaptchaToken("");
      recaptchaRef.current?.reset();
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <div className="contact">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 max-w-md mx-auto">
        <input type="text" name="name" placeholder="Name" required className="p-2 border" onChange={handleChange} value={formData.name} />
        <input type="email" name="email" placeholder="Email" required className="p-2 border" onChange={handleChange} value={formData.email} />
        <textarea name="message" placeholder="Message" required className="p-2 border" onChange={handleChange} value={formData.message} />

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LfJugQrAAAAAAfRSWeSBucjL24a76UUbLWzMMWU"
          size="invisible"
          onChange={setCaptchaToken}
        />

        <button type="submit" onClick={() => recaptchaRef.current?.execute()} className="p-2 bg-blue-600 text-white">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
