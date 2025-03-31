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
            <div className="footer-items col-md-12">
                <div className="stamp col-md-3">
                    <Link href="/">
                        <Image
                            src="/images/logo-stamp-filled.svg"
                            alt="Leah Maile Media, ESTD 2018, Capturing the moment. Flower graphic"
                            width={350}
                            height={350}
                        />
                    </Link>
                </div>
            </div>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Leah Maile Media. All Rights Reserved.</p>
                <p>Developed by <Link href="https://megan-bartlett.vercel.app/" target="_blank" rel="noopener noreferrer"> Megan Bartlett</Link></p>
            </div>
        </footer>
    );
} 