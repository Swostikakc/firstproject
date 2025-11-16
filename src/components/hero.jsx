import React from 'react'
import { assets, locations } from '../assets/assets'

const Hero = () => {
  return (
    <div
      className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.heroimage})` }}
    >
      <p className="bg-[#4989FF]/50 px-3.5 py-1 rounded-full mt-20">The Ultimate Event Experience</p>
      <h1 className="font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
        Find and book the perfect Event Center
      </h1>
      <p className="max-w-130 mt-2 text-sm md:text-base">
        Search by location, date, and capacity — book instantly with real-time availability.
      </p>

    </div>
  )
}

export default Hero

