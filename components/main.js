import React from 'react'
import Card from './card'
import Modules from './modules'
import Registration from './registration'
import "@/app/globals.css"
import {Patua_One} from 'next/font/google'
import { Red_Hat_Mono } from 'next/font/google'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets:["latin"],
  weight: ["400"]
})

const redHat = Red_Hat_Mono({
  subsets:["latin"],
  weight:["500"]

})
const pat = Patua_One({
  subsets: ["latin"],
  weight: ["400"]
})


const MainContent = () => {
  return (<>
    <div>
      <div data-aos="fade-up" className='main1 pt-14  md:mt-8'>

        <div className='main1-child flex1'>

          <div className='flex flex-col'>
            <p className='text-center'><a className='text-center text-white inline-flex text-xl' href="https://steam-nexus25.vercel.app/"><img className='mr-3
         text-center image md:w-24 w-14 ' src="/images/logo.svg" alt="Error" /></a></p>
            <div className='flex'>
          </div><p  className = {`${pat.className} font-semibold main-p1 md:text-8xl text-[2.5em] text-red-500 `}>STEAM-<span className={`${pat.className} text-red-500  md:text-8xl main-p2 font-semibold `}>Nexus&apos;25</span></p>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className='flex1 nov'><p className={`text-red-500 text-4xl font-pp ${redHat.className}`}>January&nbsp;</p><p className={`${redHat.className} text-red-500 text-4xl font-pp`}>3rd&nbsp;4th&nbsp;5th</p></div>

      <div data-aos="fade-up" className='venue flex1 nov2'><p className={`text-red-500 text-center font-abc ${poppins.className}`}>Venue: Beaconhouse College Programme Potohar Campus</p></div>
      <div><Card /></div>
    </div>
  </>
  )
}

export default MainContent
