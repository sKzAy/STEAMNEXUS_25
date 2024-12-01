"use client"
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import "@/app/globals.css";

import Autoplay from "embla-carousel-autoplay"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { TableDemo } from "./table";

const invoices = [
  {
    invoice: "Check-In",
    paymentStatus: "2:30 PM", 
  },
  {
    invoice:"Opening Ceremony",
    paymentStatus: "2:30-3:00 PM",

  },
  {
    invoice:"E-Gaming",
    paymentStatus: "3:00-6:00 PM",

  },
  {
    invoice:"Module Workshops",
    paymentStatus: "3:00-6:00 PM",
 
  },
  {
    invoice:"Check-Out",
    paymentStatus: "6:00 PM",
 
  },

]
const invoice2 = [
  {
    invoice: "Check-In",
    paymentStatus: "8:00 AM",
  },
  {
   
    invoice: "Opening Ceremony",
    paymentStatus: "8:00-8:30 AM",
  },
  {

    invoice: "Surprise Module",

    paymentStatus: "8:30-10:30 AM",
  },
  {

    invoice: "Break",

    paymentStatus: "10:30-11:00 AM",
  },
  {

    invoice: "Coding",

    paymentStatus: "11:00-12:30 PM",
  },
  {

    invoice: "Maths",

    paymentStatus: "11:00-12:30 PM",
  },
  {

    invoice: "Law",

    paymentStatus: "11:00-12:30 PM",
  },
  {

    invoice: "Break",

    paymentStatus: "12:30-1:00 PM",
  },
  {

    invoice: "Artificial Intelligence",

    paymentStatus: "1:00-2:30 PM",
  },
  {

    invoice: "Aerospace",

    paymentStatus: "1:00-2:30 PM",
  },
  {

    invoice: "Digital Art & Design",

    paymentStatus: "1:00-2:30 PM",
  },
  {

    invoice: "Break",

    paymentStatus: "2:30-3:00 PM",
  },
  {

    invoice: "Robotics",

    paymentStatus: "3:00-4:30 PM",
  },
  {

    invoice: "Business",

    paymentStatus: "3:00-4:30 PM ",
  },
  {

    invoice: "Bonfire/Qawali",

    paymentStatus: "4:30-6:00 PM",
  },
  {

    invoice: "Closing",

    paymentStatus: "6:00 PM",
  },


]
const invoice3 = [
  {

    invoice: "Check-In",
    paymentStatus: "8:00 AM",
  },
  {

    invoice: "Surprise Module",

    paymentStatus: "8:30-10:30 AM",
  },
  {

    invoice: "Break",

    paymentStatus: "10:30-11:00 AM",
  },
  {

    invoice: "Coding",

    paymentStatus: "11:00-12:30 PM",
  },
  {

    invoice: "Maths",

    paymentStatus: "11:00-12:30 PM",
  },
  {

    invoice: "Law",

    paymentStatus: "11:00-12:30 PM",
  },
  {

    invoice: "Break",

    paymentStatus: "12:30-1:00 PM",
  },
  {

    invoice: "Artificial Intelligence",

    paymentStatus: "1:00-2:30 PM",
  },
  {

    invoice: "Aerospace",

    paymentStatus: "1:00-2:30 PM",
  },
  {

    invoice: "Digital Art & Design",

    paymentStatus: "1:00-2:30 PM",
  },
  {

    invoice: "Break",

    paymentStatus: "2:30-3:00 PM",
  },
  {

    invoice: "Robotics",

    paymentStatus: "3:00-4:30 PM",
  },
  {

    invoice: "Business",

    paymentStatus: "3:00-4:30 PM ",
  },
  {

    invoice: "Panel Talk/Exhibition",

    paymentStatus: "4:30-6:00 PM",
  },
  {

    invoice: "Closing",

    paymentStatus: "6:00 PM",
  },


]
import {Patua_One} from 'next/font/google'
import { Red_Hat_Mono } from 'next/font/google'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets:["latin"],
  weight: ["100","200","300","400","500","600","700","800"]
})

const redHat = Red_Hat_Mono({
  subsets:["latin"],
  weight:["500"]

})
const pat = Patua_One({
  subsets: ["latin"],
  weight: ["400"]
})



export function TimelineDemo() {
  const data = [
    {
      title: "Event Details",
      title2: "",
      content: (
        <div>
          <div data-aos="fade-up" className="md:w[40vw] about-event p-0 text-left flex">
            <div   className="details-div text-white rounded-xl p-0"><p id="registration1" className={`md:w-[40vw] text-base md:text-lg  font-abc ${poppins.className}`}> True education goes beyond memorizing information; it’s about developing
              the ability to think critically, analyze situations, and solve problems creatively.
              STEAM-Nexus embodies this philosophy by providing students with hands-on, practical experiences in STEM and Arts. This event will help train their
              minds to think critically and independently, equipping them with the skills
              needed to navigate and shape the future, rather than just learning facts by
              rote.</p></div></div>
        </div>
      ),
    },
    {
      title:"Registration",
      content: (
        <div  className="w-0 h-0" >
          <div>
            
          </div>
        </div>
      ),
    },
      {
      title2: "Details",
      content: (
              <div className={`${poppins.className} md:pt-28 w-[40vw] max-md:w-fit `}>
              <ul>
                <li className='text-base md:text-lg font-abc'>Each delegation would comprise of 2-6 delegates.</li>
                <li className='text-base md:text-lg font-abc'>It is compulsory for every delegation to take part in the Suprise Module.</li>
                <li className='text-base md:text-lg font-abc'>Delegations could take part in minimum 1 and maximum 3 modules other than the Suprise Module.
                </li>
                <li className='text-base md:text-lg font-abc'>Early bird discount ends: 5th December.</li>
                <li className='text-base md:text-lg font-abc'>Registrations close: 31st December.
                </li>
              </ul>
              <div className="btn pt-5">
                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSd-qi-FgdnXs7dvc3YbZiZwuvoDN9ps5KTmALIGov_WGrz03g/viewform"><button className=' button  border-red-600 rounded-3xl p-3 text-center font-pp hover:ease-in-out hover:rounded-none  hover:transition-all transition-all hover:bg-red-500 border-2'>Click Here to Register</button></a>
              </div>
              </div>
      ),
    },
    {

      title2: "Fee",
      content: (
        <div className={`${poppins.className} flex justify-start align-middle`}>
          <div data-aos="zoom-in" className=" flex justify-start align-middle md:pt-28 md:w-[40vw] ">
            <div className="  text-white rounded-xl p-2">
              <TableDemo className="table-div" />
            </div>
          </div>
        </div>
      ),
    },
    
    {
      title2: "Contact Us",
      content: (
        <div>
          <div className={`${poppins.className} text-base md:text-lg md:mt-24 w-fit md:w-[40vw] flex gap-6 flex-col`}>
           <ul>
            <li className="font-bold text-red-400 ">Saad Naeem: Head Of Host Team</li>
            <li className="">Number: +92 370 5462197</li>
            <li className="font-bold text-red-400">Abdullah Atif: Director Registrations</li>
            <li className="">Number: +92 319 6005313</li>
           </ul>
          </div>
        </div>
      ),
    },
  
    {
      title: "Ambassador",
      content: (
        <div>
          <div id='modules1' className={`md:mt-24 w-fit md:w-[40vw] flex gap-6 flex-col ${poppins.className}`}>
            <p className='text-left text-base md:text-lg font-abc w-[40vw] max-md:w-[70vw] '>As an ambassador, you&apos;ll play a vital role in promoting our event and gathering like-minded individuals. The more delegates you bring, the higher your ambassador level and perks. Ambassadors will be awarded shields at the end of the formal dinner.</p>
            <a className=" w-fit" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSej3sQufW_4bPkR-GC_c1r6knbKqZ94u9_CNBCs6yn-F6mEZA/viewform"><button className=' button  border-red-600 rounded-3xl p-3 text-center font-pp hover:ease-in-out hover:rounded-none  hover:transition-all transition-all hover:bg-red-500 border-2'>Become an Ambassador</button></a>

          </div>
        </div>
      ),
    },
    {
      title: "Modules",
      content: (
        <div>
          <div className='h-0 w-1' ></div>
          <div data-aos="zoom-in" className={`${poppins.className} md:pr-16 md:mt-24 pl-0 flex1 text-red-400  text-left md:w-[60vw]`}>
            <div className="carouselbox rounded-xl  ">
            {/* md:h-[35vh] h-[15vh] w-[80vw] md:w-[50vw] */}
              <div  className="carousel flex1 ">
                <Carousel className="w-[60vw] md:w-[40vw] text-center flex2"
                plugins={[
                  Autoplay({
                    delay: 1500,
                  }),
                ]}>
                  <CarouselContent>
                  <CarouselItem className="basis-1/3 flex2 text-xs">
                    <img width={50}  className="md:w-[10vw] mx-auto text-center" src="/images/robotics.svg" alt="" />
                    <h1 className="text-xs md:text-lg p-2">Robotics</h1>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3 flex2 text-xs">
                    <img width={50}  className="md:w-[10vw] mx-auto text-center" src="/images/aerospace.svg" alt="" />
                    <h1 className="text-xs md:text-lg p-2">Aerospace</h1>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3 flex2 text-xs">
                    <img width={50} className="md:w-[10vw] mx-auto text-center" src="/images/artificial intelligence.svg" alt="" />
                    <h1 className="text-xs md:text-lg p-2">Artificial Intelligence</h1>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3 flex2 text-xs">
                    <img width={50} className="md:w-[10vw] mx-auto text-center" src="/images/mathematics.svg" alt="" />
                    <h1 className="text-xs md:text-lg p-2">Mathematics</h1>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3 flex2 text-xs  text-center mx-auto">
                    <div>
                    <img width={50}  className="md:w-[10vw] mx-auto align-middle " src="/images/digital art and design.svg" alt="" />
                    </div>
                    <h1 className="text-xs md:text-lg p-2">Arts & Media</h1>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3 flex2 text-xs">
                    <img width={50}  className="md:w-[10vw] mx-auto text-center" src="/images/coding.svg" alt="" />
                    <h1 className="text-xs md:text-lg p-2">Coding</h1>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3 flex2 text-xs">
                    <img width={50}  className="md:w-[10vw] mx-auto text-center" src="/images/business.svg" alt="" />
                    <h1 className="text-xs md:text-lg p-2">Business</h1>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3 flex2 text-xs">
                    <img width={50}  className="md:w-[9vw] mx-auto text-center" src="/images/law_and_crime.svg" alt="" />
                    <h1 className="text-xs md:text-lg p-2 ">Law</h1>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3 flex2 text-xs">
                    <img width={50} className="md:w-[9vw] mx-auto text-center" src="/images/surprise_module.svg" alt="" />
                    <h1 className="text-xs md:text-lg p-2">Suprise Module</h1>
                    </CarouselItem>
                   
                  </CarouselContent>
                  <div className="max-md:hidden">
                  <CarouselPrevious variant="secondary" />
                  </div>
                  <div  className="max-md:hidden">
                  <CarouselNext variant="secondary" />
                  </div>
                </Carousel>
                <div  id="schedule" className="w-0 h-0"></div>
              </div>
            </div>
          </div>
        </div>

      ),
    },
 
    {
      title: "Schedule",
      title2: "",
      content: (
        <div className="w-0 h-0"></div>
      )
    },
    {
      title: "",
      title2: "Day 0",
      content: (
        <div className={`${poppins.className} flex justify-center align-middle `}>
          <div className="day0">
            <Table>

              <TableHeader className="">
                <TableRow>
                  
                  <TableHead className=" text-red-400 font-pp max-md:pr-2 w-fit text-lg font-bold">Modules</TableHead>
                  <TableHead className="text-red-400 font-pp w-fit text-lg font-bold">Time</TableHead>

                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoices) => (
                  <TableRow key={invoices.invoice}>
                    <TableCell className=" text-white font-pp text-sm md:text-lg md:w-[50vw]">{invoices.invoice}</TableCell>
                    <TableCell className="text-white font-pp text-sm md:text-lg  md:w-[50vw] ">{invoices.paymentStatus}</TableCell>

                  </TableRow>
                ))}
              </TableBody>

            </Table>
          </div>
        </div>
      ),
    },
    {
      title: "",
      title2: "Day 1",
      content: (
        <div className={`md:mt-24 ${poppins.className}`}>
        <div className="day1">
          <Table>

            <TableHeader>
              <TableRow>
               
                <TableHead className=" font-bold text-red-400 font-pp text-lg">Modules</TableHead>
                <TableHead className=" font-bold text-red-400 font-pp text-lg">Time</TableHead>

              </TableRow>
            </TableHeader>
            <TableBody>
              {invoice2.map((invoice2) => (
                <TableRow key={invoice2.invoice}>
                  <TableCell className=" text-white font-pp text-sm md:text-lg">{invoice2.invoice}</TableCell>
                  <TableCell className="text-white  font-pp text-sm md:text-lg">{invoice2.paymentStatus}</TableCell>

                </TableRow>
              ))}
            </TableBody>

          </Table>
        </div>
      </div>
      ),
    },
    {
      title: "",
      title2: "Day 2",
      content: (
        <div className={`md:mt-24 ${poppins.className}`}>
          <div className="day2">
            <Table>

              <TableHeader>
                <TableRow>
                 
                  <TableHead className=" font-bold text-red-400 font-pp text-lg">Modules</TableHead>
                  <TableHead className=" font-bold text-red-400 font-pp text-lg">Time</TableHead>

                </TableRow>
              </TableHeader>
              <TableBody>
                {invoice3.map((invoice3) => (
                  <TableRow key={invoice3.invoice}>
                    <TableCell className=" text-white  font-pp text-sm md:text-lg">{invoice3.invoice}</TableCell>
                    <TableCell className="text-white  font-pp text-sm md:text-lg">{invoice3.paymentStatus}</TableCell>

                  </TableRow>
                ))}
              </TableBody>

            </Table>
          </div>
        </div>
      ),
    },




  ];
  return (<>
    (<div className="w-full">
      <Timeline data={data} />
    </div>)
  </>
  );
}
