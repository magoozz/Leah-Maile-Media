"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    // State to store the current year
    const [currentYear, setCurrentYear] = useState<number | null>(null);

    // Set the year once the component is mounted (client-side only)
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="footer">
            <div className="footer-items col-md-12">
                <div className="stamp col-md-3">
                    <Link href="/">
                        <Image
                            src="/images/logo-stamp-filled.svg"
                            alt="Leah Maile Media, ESTD 2018, Capturing the moment. Flower graphic"
                            width={250}
                            height={250}
                        />
                    </Link>
                </div>

                <div className="polaroid col-md-2">
                    <Link href="/about">
                        <Image
                            src="/images/footer/meet.svg"
                            alt="'Meet Leah' with image of leah"
                            width={250}
                            height={250}
                        />
                    </Link>
                </div>

                <div className="polaroid col-md-2">
                    <Link href="/experience">
                        <Image
                            src="/images/footer/experience.svg"
                            alt="'All about the experience' with image of girl in a flower field"
                            width={250}
                            height={250}
                        />
                    </Link>
                </div>

                <div className="polaroid col-md-2">
                    <Link href="/portfolio">
                        <Image
                            src="/images/footer/portfolio.svg"
                            alt="'view portfolio' with image of girl with graduation cap with fall leaves"
                            width={250}
                            height={250}
                        />
                    </Link>
                </div>

                <div className="polaroid col-md-2">
                    <Link href="/contact">
                        <Image
                            src="/images/footer/contact.svg"
                            alt="'Book your shoot!' with image of woman holding baby up smiling at baby"
                            width={250}
                            height={250}
                        />
                    </Link>
                </div>

            </div>
            <div className="footer-content">
                <div className="footer-content-top">
                    <p>&copy; {currentYear || "Loading..."} Leah Maile Media. All Rights Reserved.</p>
                </div>
                <p>Developed by <Link href="https://megan-bartlett.vercel.app/" target="_blank" rel="noopener noreferrer"> Magooz</Link></p>
            </div>
        </footer>
    );
}
