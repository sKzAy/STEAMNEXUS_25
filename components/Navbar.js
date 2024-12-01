import React from 'react'
import Image from 'next/image'
import "@/app/globals.css"
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets:["latin"],
  weight: ["400"]
})

const Navbar = () => {
  return (<>
        <nav className='flex1'>
        
            <div className='ul-cont' data-aos="fade-down">
                <ul className='ul-div size-semismall'>
                    <li className='size-semismall'><a className={`${poppins.className} font-pp size-semismall underline hover:underline-offset-8 hover:font-extrabold hover:ease-linear ease-linear hover:transition-all transition-all hover:text-red-500`} href='#modules1'>Modules</a></li>
                    <li className='size-semismall'> <a className={`${poppins.className}  font-pp size-semismall underline hover:underline-offset-8 hover:font-extrabold hover:ease-linear ease-linear hover:transition-all 
                    transition-all hover:text-red-500`} href="#registration1">Registration</a></li>
                    <li className='size-semismall'> <a className={`${poppins.className}  font-pp size-semismall underline hover:underline-offset-8 hover:font-extrabold hover:ease-linear ease-linear hover:transition-all transition-all hover:text-red-500`} href="#schedule">Schedule</a></li>
                    <li className='size-semismall'><a className={`${poppins.className}  font-pp size-semismall underline hover:underline-offset-8 hover:font-extrabold hover:ease-linear ease-linear hover:transition-all transition-all hover:text-red-500`} target='_blank' href="https://www.instagram.com/steamnexus25/">Instagram</a></li>
                </ul>
            </div>
        </nav>
</>
  )
}

export default Navbar
