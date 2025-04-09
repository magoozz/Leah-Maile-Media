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
            </div>
            <div className="footer-content">
                <div className="footer-content-top">
                    <p>&copy; {currentYear || "Loading..."} Leah Maile Media. All Rights Reserved.</p>
                    <a
                        href="https://www.instagram.com/leahmailes/?igsh=OHJjaWxlNzBmZDNu#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram-mobile"
                    >
                        <FaInstagram size={30} className="ig-icon" />
                    </a>
                </div>
                <p>Developed by <Link href="https://megan-bartlett.vercel.app/" target="_blank" rel="noopener noreferrer"> Megan Bartlett</Link></p>
            </div>
        </footer>
    );
}
