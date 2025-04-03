import type { Metadata } from "next";
import "./globals.css";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Leah Maile Media",
  description: "Developed by Megan Bartlett",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Developed, coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel."
        />
        <title>Leah Maile Media</title>
      </head>
      <body>
      <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
