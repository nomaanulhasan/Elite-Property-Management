import { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import NavRenderer from './NavRenderer';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(isVisible => !isVisible)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={cn("fixed w-full bg-transparent z-50 top-0", isScrolled && "drop-shadow-xl")}
      animate={{
        backgroundColor: isScrolled ? "#ffffff" : "rgba(255,255,255,0)",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      <div className="bg-white">
        <div className="container text-primary text-sm gap-2 h-8 mx-auto flex items-center justify-end">
          <img src="/call_icon.svg" width={16} height={16} alt="" /> Resident services: <a href='tel:5613029383'>561-302-9383</a>
        </div>
      </div>
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        <div>
          <img src={isScrolled ? "/logo_color.webp" : "/logo_white.webp"} alt="ELITE" className="h-12" />
        </div>

        {/* Mobile Menu */}
        <div className='flex lg:hidden relative'>
          <Button variant='ghost' size='icon' className='hover:bg-transparent' onClick={toggleNavVisibility}>
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 9C24 9.26522 23.8946 9.51957 23.7071 9.70711C23.5196 9.89464 23.2652 10 23 10H1C0.734784 10 0.48043 9.89464 0.292893 9.70711C0.105357 9.51957 0 9.26522 0 9C0 8.73478 0.105357 8.48043 0.292893 8.29289C0.48043 8.10536 0.734784 8 1 8H23C23.2652 8 23.5196 8.10536 23.7071 8.29289C23.8946 8.48043 24 8.73478 24 9ZM1 2H23C23.2652 2 23.5196 1.89464 23.7071 1.70711C23.8946 1.51957 24 1.26522 24 1C24 0.734784 23.8946 0.48043 23.7071 0.292893C23.5196 0.105357 23.2652 0 23 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM23 16H1C0.734784 16 0.48043 16.1054 0.292893 16.2929C0.105357 16.4804 0 16.7348 0 17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H23C23.2652 18 23.5196 17.8946 23.7071 17.7071C23.8946 17.5196 24 17.2652 24 17C24 16.7348 23.8946 16.4804 23.7071 16.2929C23.5196 16.1054 23.2652 16 23 16Z"
                fill={isScrolled ? "#26262E" : "#FEFEFE"}
              />
            </svg>
          </Button>
          <motion.div
            initial={{ opacity: 0, x: 320, y: -50 }}
            whileInView={{ opacity: isNavVisible ? 1 : 0, x: isNavVisible ? 0 : 320, y: isNavVisible ? 0 : -50 }}
            transition={{
              duration: 0.1,
              ease: "easeInOut"
            }}
            className={cn("absolute w-[calc(100dvw-2.875rem)] transition-all md:w-72 p-6 flex flex-col gap-4 top-14 right-0 bg-white drop-shadow-xl overflow-hidden", isNavVisible ? "pointer-events-auto": "pointer-events-none")}
          >
            <NavRenderer isScrolled={true} />
          </motion.div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 xl:space-x-8">
          <NavRenderer isScrolled={isScrolled} />
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
