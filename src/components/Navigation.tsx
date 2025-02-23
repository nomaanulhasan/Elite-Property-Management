import { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { cn } from '@/lib/utils';
import NavLink from './NavLink';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed w-full bg-transparent z-50 top-0"
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
          <img src="/call_icon.svg" width={16} height={16} alt="" /> Resident services: 561-302-9383
        </div>
      </div>
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        <div>
          <img src={isScrolled ? "/logo_color.png" : "/logo_white.png"} alt="ELITE" className="h-12" />
        </div>
        <div className="hidden md:flex space-x-8">
          <NavLink href="#home" className="text-primary-light">HOME</NavLink>
          <NavLink href="#find" className={cn(isScrolled ? "text-text" : "text-white")}>FIND MY COMMUNITY</NavLink>
          <NavLink href="#rental" className={cn(isScrolled ? "text-text" : "text-white")}>RENTAL PROPERTY SERVICES</NavLink>
          <NavLink href="#hoa" className={cn(isScrolled ? "text-text" : "text-white")}>HOA & CONDO ASSOCIATION SERVICES</NavLink>
          <NavLink href="#faq" className={cn(isScrolled ? "text-text" : "text-white")}>FAQ</NavLink>
          <NavLink href="#about" className={cn(isScrolled ? "text-text" : "text-white")}>ABOUT</NavLink>
          <NavLink href="#contact" className={cn(isScrolled ? "text-text" : "text-white")}>CONTACT</NavLink>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
