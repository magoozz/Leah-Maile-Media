"use client";
//import Link from "next/link";
//import { FaLinkedin, FaGithub, FaBook, FaEnvelope } from "react-icons/fa";
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Link from "next/link";
import { FaBook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <footer className="stamp">
                <Link href="/">
                    <Image
                        src="/images/logo-stamp-filled.svg"
                        alt="Leah Maile Media, EST 2018, Capturing the moment. Flower graphic"
                        width={400} // Adjust width and height as needed
                        height={400}
                    />
                </Link>

                <Link
                    href="https://www.goodreads.com/user/show/164080752-megan-bartlett"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Good Reads"
                >
                    <FaBook size={24} />
                </Link>
            </footer>

            

            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Leah Maile Media. All Rights Reserved.</p>
                <p>Developed by <Link href="https://megan-bartlett.vercel.app/" target="_blank" rel="noopener noreferrer"> Megan Bartlett</Link></p>
            </div>
        </footer>
    );
} 