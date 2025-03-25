"use client";
//import Link from "next/link";
//import { FaLinkedin, FaGithub, FaBook, FaEnvelope } from "react-icons/fa";
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <footer className="stamp">
                <Link href="/">
                    <Image
                        src="/images/logo-stamp-filled.svg"
                        alt="Leah Maile Media, EST 2018, Capturing the moment. Flower graphic"
                        width={300} // Adjust width and height as needed
                        height={300}
                    />
                </Link>
            </footer>

            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Leah Maile Media. All Rights Reserved.</p>
                <p>Developed by Megan Bartlett</p>
            </div>
        </footer>
    );
} 