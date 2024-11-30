"use client"
import React from 'react'
import "@/app/globals.css"
import { useEffect, useRef } from 'react'
import {Montserrat } from 'next/font/google'

const mont = Montserrat({
  subsets: ['latin'], // Specify the subsets you need
  weights: [ '500', '600', '700'], // Use plain string literals
});

import { px } from 'framer-motion'
import {Roboto_Mono} from "next/font/google"
const robotoMono = Roboto_Mono({
  subsets: ['latin'], // Specify the subsets you need
  weights: ['400'], // Specify the weights you need
});




const Modules = () => {


  return (<>
  <div className='h-0 w-1' id=''></div>
  <div  data-aos="zoom-in" className=' bigboy text-red-400 mb-14 '>
    <div className='flex1'>
    <h2 className={`${robotoMono.className} cap3 text-2xl font-extrabold md:pb-6 mb-4 font-pp`}>Modules</h2>
    </div>
    
  <div className="carouselbox">
  <div className="carousel flex1 border-2 border-red-500">

<div id='registration' className='w-0 h-0'></div>
</div>
</div>
</div>

 
</>
  )
}

export default Modules
