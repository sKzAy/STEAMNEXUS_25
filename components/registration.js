import React from 'react'
import Link from 'next/link'
import "@/app/globals.css"
import { TableDemo } from './table'
import {Roboto_Mono} from "next/font/google"
const robotoMono = Roboto_Mono({
  subsets: ['latin'], // Specify the subsets you need
  weights: ['400'], // Specify the weights you need
});

const Registration = () => {
    return (
        <>
            <div data-aos="zoom-in" className=" flex1 ">
                <div className=" mod-div text-white rounded-xl border-2 border-red-500 p-10"><h2 className={`
                 ${robotoMono.className}  text-2xl text-red-400 size-large font-pp`} id='modules '>Registration:</h2>
                <h3 className='text-red-500 pt-4 pb-4 size-semismall font-pp'>Fee:</h3>
                    <TableDemo className="table-div"/>
                    <h3 className='text-red-500 pt-4 pb-4 size-semismall font-pp'>Details:</h3>
                    <ul>
                        <li className='size-small text-bold font-abc'> Each delegation would comprise of 2-6 delegates</li>
                        <li className='size-small font-abc'>Early Bird Discount ends:  5th December</li>
                        <li className='size-small font-abc'>Registrations close:  31st December
                        </li>
                    </ul>
                    <div className="btn pt-5">
                    <a target ="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSd-qi-FgdnXs7dvc3YbZiZwuvoDN9ps5KTmALIGov_WGrz03g/viewform"><button className=' button border-2 border-red-600 rounded-3xl p-3 text-center font-pp hover:ease-in-out hover:rounded-none  hover:transition-all transition-all hover:bg-red-500'>Click Here to Register</button></a>
                    </div>
                    <div>
                        <div><h2 className={`${robotoMono.className}  mt-3 className=font-extrabold text-2xl text-red-400 size-large font-pp`}>Ambassadors:</h2></div>
                        <p className='text-left font-abc'>As an ambassador, you&apos;ll play a vital role in promoting our event and gathering like-minded individuals. The more delegates you bring, the higher your ambassador level and perks. Ambassadors to be awarded sheilds at the end of the formal dinner.</p>
                        <div className="btn pt-5">
                    <a target ="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSd-qi-FgdnXs7dvc3YbZiZwuvoDN9ps5KTmALIGov_WGrz03g/viewform"><button className=' button border-2 border-red-600 rounded-3xl p-3 text-center font-pp hover:ease-in-out hover:rounded-none  hover:transition-all transition-all hover:bg-red-500'>Become an Ambassador</button></a>
                    </div>
                    </div>
                    

                </div>
                
            </div>
        </>
    )
}

export default Registration
