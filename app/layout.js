import localFont from "next/font/local";
import "./globals.css";
import Aos from "aos";
import AosComponent from "@/components/Aos";
import "aos/dist/aos.css"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Steam-Nexus",
  description: "This is the official website for Steam-Nexus, A BPC event.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}

      >
        <AosComponent/>
        {children}
      </body>
    </html>
    
  );
}
