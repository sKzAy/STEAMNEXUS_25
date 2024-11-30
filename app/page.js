import react from "react";
import Navbar from "@/components/Navbar";
import MainContent from "@/components/main";
import FooterComponent from "@/components/footer";
<link rel="stylesheet" href="globals.css" />
import "./globals.css"
import Head from "next/head";
import { TimelineDemo } from "@/components/timeline";
import Image from "next/image";


export default function Home() {
  
  
  return (
  <>

  {/* <div class="absolute top-0 z-[-2] min-h-screen w-full bg-pink- bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"> */}
    <div className="bg ">
  <div><Navbar/></div>
  <div><MainContent/></div>
  <div><TimelineDemo/></div>
  <div><FooterComponent/></div>
  </div>
  {/* </div> */}
 
  </>
  );
}

