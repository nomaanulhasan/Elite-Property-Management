import { useState } from 'react'
import { slides } from '@/data'

const Hero = () => {
  const [currentSlide] = useState(0);

  return (
    <section className="relative h-screen">
      <div className="absolute top-0 inset-0">
        <img
          src={slides[currentSlide].image}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative container mx-auto px-8 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-16">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {slides[currentSlide].subtitle}
          </p>
        </div>
      </div>
      <div className="absolute top-[77dvh] left-1/2 -translate-x-1/2 flex space-x-2">
        <div className="w-8 h-8 bg-transparent flex justify-center items-center rounded-full border-golden border text-golden text-xs">1</div>
        <div className="w-8 h-8 bg-transparent flex justify-center items-center">
          <div className="bg-white w-3 h-3 rounded-full" />
        </div>
        <div className="w-8 h-8 bg-transparent flex justify-center items-center">
          <div className="bg-white w-3 h-3 rounded-full" />
        </div>
      </div>
    </section>
  )
}

export default Hero
