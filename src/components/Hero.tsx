import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { slides } from '@/data'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const updateSlide = (slide: number) => {
    setCurrentSlide(slide)
  }
  const sliderVariants = {
    hiddenRight: { x: "100%", opacity: 0 },
    hiddenLeft: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
  }

  return (
    <section className="relative max-h-dvh">
      <div className="absolute top-0 inset-0 overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={currentSlide}
            variants={sliderVariants}
            initial="hiddenRight"
            animate="visible"
            exit="exit"
            transition={{
              duration: 1,
              ease: [0.56, 0.03, 0.12, 1.04]
            }}
            src={slides[currentSlide].image}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative container mx-auto px-8 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 md:mb-16">
            {slides[currentSlide].title}
          </h1>
          <p className="sm:text-xl md:text-2xl mb-8">
            {slides[currentSlide].subtitle}
          </p>
        </div>
      </div>
      <div className="absolute top-[77dvh] left-1/2 -translate-x-1/2 flex space-x-2">
        {slides?.map((slide, index) => (
          <button key={slide.id} className="w-8 h-8 bg-transparent flex justify-center items-center" onClick={() => updateSlide(index)}>
            {currentSlide === index ? (
              <div className='w-full h-full flex justify-center items-center rounded-full border-golden border text-golden text-xs'>{slide.id}</div>
            ) : (
              <div className="bg-white w-3 h-3 rounded-full" />
            )}
          </button>
        ))}

      </div>
    </section>
  )
}

export default Hero
