
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Warehouse, Files, MicVocal, Speech, ChevronRight, MapPin, BookOpenText, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Index = () => {
  const [currentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slides = [
    {
      image: "/hero-1.jfif",
      title: "The Management team you can depend on",
      subtitle: "For all south florida rental property management, hoa and condo association needs",
    },
  ];

  const features = [
    {
      title: "Reliable property management",
      icon: <Warehouse size={16} />
    },
    {
      title: "Transparent reporting",
      icon: <Files size={16} />
    },
    {
      title: "Consistent communication",
      icon: <Speech size={16} />
    },
  ];

  const services = [
    {
      title: "Rental Property Management",
      image: "/for_rent.png",
    },
    {
      title: "Condominium Associations",
      image: "/condominium.png",
    },
    {
      title: "Homeowner Associations",
      image: "/homeowner.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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
            <Phone size={16} /> Resident services: 561-302-9383
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

      {/* Hero Section */}
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

      {/* Features Section */}
      <section className="py-20 bg-[#F7FAFC]">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-4"
            >
              <h2 className="text-3xl font-bold mb-8">
                Reliable Property Management with Transparent Reporting and Consistent Communication
              </h2>
              <p className="text-gray-600 mb-6">
                Elite Property Management (EPM) was created with the vision of:
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <span className="text-gray-600">{feature.title}</span>
                  </div>
                ))}
              </div>
              <p className="pt-6 text-gray-600">
                The founders of EPM saw that most Property Management Companies do not provide these simple, yet essential responsibilities to the Property Owners and Associations they were hired to manage.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center flex-col justify-between"
            >
              <img
                src="/logo_white_bg.png"
                alt="ELITE Property Management"
                className="w-full max-h-80"
              />
              <p className="pb-4 px-4 text-gray-600">
                The founders started this company to <strong>change this perception and look forward</strong> to showing you how much better your Property or Association can be managed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-20 bg-[#F7FAFC]">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8 pt-20 border-t border-[#D3D7E5]">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 * index }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-2xl"
                  />

                  <button className="absolute bottom-1.5 right-1.5 w-14 h-14 bg-text rounded-full flex items-center justify-center text-white outline-white outline outline-[1rem]">
                    <ChevronRight />
                  </button>
                </div>
                <div className="mt-4 max-w-half">
                  <h3 className="text-xl font-bold text-text">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-8">
          <div className="bg-white rounded-lg p-12">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <img
                src="/logo_color_big.png"
                alt="ELITE Property Management"
                className="w-72"
              />
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Experience you can trust
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  We are a team of professionals that have over 40 years experience in the real estate industry in South Florida and we look forward to servicing your community's needs.
                </p>
                <Button className="bg-text hover:bg-text/80 text-white px-8">
                  CONTACT US
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pb-12 bg-[#F7FAFC]">
        <div className="mx-auto pr-8">
          <div className=" flex gap-4">
            <div className="py-12 bg-[#FEFEFE] flex flex-col flex-1">
              <div className="container pl-8 grid md:grid-cols-4 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-gray-700">Pages</h4>
                  <ul className="space-y-4 text-gray-500 text-xs">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-gray-700">Office Hours</h4>
                  <div className="text-gray-500 text-xs">
                    <p>Monday - Friday</p>
                    <p>9AM - 5PM</p>
                    <p className="mt-4">Saturday - Sunday</p>
                    <p>By Appointment</p>
                  </div>
                </div>
              </div>
              <div className="container mt-12">
                <span className="block pt-8 border-t text-gray-600" />
                <div className="flex items-center justify-around text-sm text-gray-500">
                  <div>&copy; {new Date().getFullYear()} Elite All rights reserved.</div>
                  <div className="flex items-center gap-2">
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.1601 2.50025C19.1601 2.50025 18.2401 2.35025 17.0001 2.28025V1.50025C17.0009 1.24833 16.9066 1.00539 16.736 0.81999C16.5655 0.634593 16.3312 0.520404 16.0801 0.500251C15.6701 0.500251 12.2701 0.230251 10.0001 1.35025C7.73008 0.230251 4.33008 0.500251 3.92008 0.500251C3.66897 0.520404 3.43471 0.634593 3.26415 0.81999C3.09358 1.00539 2.99928 1.24833 3.00008 1.50025V2.29025C1.76008 2.36025 0.880083 2.50025 0.840083 2.50025C0.603458 2.53859 0.388475 2.66064 0.234295 2.84419C0.0801156 3.02774 -0.00300208 3.26056 8.28891e-05 3.50025V17.5003C8.28891e-05 17.7655 0.10544 18.0198 0.292976 18.2074C0.480512 18.3949 0.734866 18.5003 1.00008 18.5003H19.0001C19.2653 18.5003 19.5197 18.3949 19.7072 18.2074C19.8947 18.0198 20.0001 17.7655 20.0001 17.5003V3.50025C20.0032 3.26056 19.92 3.02774 19.7659 2.84419C19.6117 2.66064 19.3967 2.53859 19.1601 2.50025ZM5.00008 2.50025C6.36132 2.45448 7.71882 2.66829 9.00008 3.13025V12.5003C9.00008 12.7655 9.10544 13.0198 9.29298 13.2074C9.48051 13.3949 9.73487 13.5003 10.0001 13.5003C10.2653 13.5003 10.5197 13.3949 10.7072 13.2074C10.8947 13.0198 11.0001 12.7655 11.0001 12.5003V3.09025C12.2855 2.64812 13.6417 2.44808 15.0001 2.50025V13.5003C13.2656 13.5869 11.5657 14.0187 10.0001 14.7703C8.43443 14.0187 6.73461 13.5869 5.00008 13.5003V2.50025ZM2.00008 4.38025C2.28008 4.38025 2.62008 4.32025 3.00008 4.30025V14.5003C3.00008 14.7655 3.10544 15.0198 3.29298 15.2074C3.48051 15.3949 3.73487 15.5003 4.00008 15.5003C5.68402 15.5009 7.35054 15.841 8.90008 16.5003H2.00008V4.38025ZM18.0001 16.5003H11.1001C12.6496 15.841 14.3161 15.5009 16.0001 15.5003C16.2653 15.5003 16.5197 15.3949 16.7072 15.2074C16.8947 15.0198 17.0001 14.7655 17.0001 14.5003V4.29025L18.0001 4.38025V16.5003Z" fill="#26262E" />
                    </svg>
                    Complaints book
                  </div>
                  <div className="flex items-center gap-10">
                    <svg width="10" height="21" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3.78572H8.09028C6.67795 3.78572 6.43836 4.52686 6.43836 5.54814V7.78572H9.78028L9.33151 11.3571H6.43836V20.5H3.0137V11.3571H0V7.78572H3.0137V5.19957C3.0137 2.15757 4.78904 0.5 7.38534 0.5C8.62671 0.5 9.58904 0.596428 10 0.644857V3.78572Z" fill="#57595B" />
                    </svg>

                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.2983 8.96736V9.01364H11.27L11.2983 8.96736Z" fill="#57595B" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.43081 20.5V7.00534H0.247305V20.5H4.43081ZM2.33904 5.16287C3.79791 5.16287 4.70594 4.12663 4.70594 2.83164C4.67875 1.50749 3.79791 0.5 2.36671 0.5C0.935662 0.5 0 1.50749 0 2.83164C0 4.12663 0.907833 5.16287 2.31177 5.16287H2.33904ZM7.05879 20.5H11.2982V12.9975C11.2982 12.5959 11.3258 12.1948 11.4377 11.9078C11.7442 11.1055 12.4418 10.2747 13.613 10.2747C15.1471 10.2747 15.7608 11.5067 15.7608 13.3127V20.5H20V12.7967C20 8.67016 17.9084 6.75 15.1191 6.75C12.8701 6.75 11.8618 8.05192 11.2983 8.96736V7.06526H7.05879C7.11442 8.32588 7.05879 20.5 7.05879 20.5Z" fill="#57595B" />
                    </svg>

                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.1299 10.4999C13.1196 11.3278 12.7868 12.1189 12.2023 12.7053C11.6178 13.2917 10.8277 13.627 9.99988 13.6399C9.16525 13.6399 8.36451 13.3097 7.77247 12.7214C7.18042 12.1331 6.84517 11.3345 6.83988 10.4999C6.81574 10.072 6.87919 9.64363 7.02633 9.24107C7.17347 8.83852 7.40122 8.47023 7.69563 8.15874C7.99004 7.84725 8.34492 7.59912 8.73855 7.42954C9.13218 7.25996 9.55628 7.17249 9.98488 7.17249C10.4135 7.17249 10.8376 7.25996 11.2312 7.42954C11.6248 7.59912 11.9797 7.84725 12.2741 8.15874C12.5685 8.47023 12.7963 8.83852 12.9434 9.24107C13.0906 9.64363 13.154 10.072 13.1299 10.4999ZM19.9999 6.0299V6.4999C19.9999 9.3199 19.9999 12.1499 19.9999 14.9599C20.0119 15.7767 19.8381 16.5855 19.4916 17.3252C19.1451 18.0649 18.635 18.7162 17.9999 19.2299C17.0137 20.0765 15.7493 20.5288 14.4499 20.4999H14.1299C11.2699 20.4999 8.40988 20.4999 5.53988 20.4999C4.80813 20.4999 4.08363 20.355 3.4082 20.0735C2.73278 19.7919 2.11982 19.3794 1.60473 18.8596C1.08963 18.3399 0.682606 17.7233 0.407153 17.0453C0.1317 16.3674 -0.00672054 15.6416 -0.000116299 14.9099V6.1499C-0.0387581 4.82208 0.405353 3.52527 1.24988 2.4999C2.01381 1.56194 3.07006 0.907061 4.24988 0.639904C4.68544 0.536732 5.13239 0.489683 5.57988 0.499904H14.3999C15.2213 0.494831 16.0337 0.671509 16.7788 1.01728C17.524 1.36305 18.1834 1.86935 18.7099 2.4999C19.5558 3.47996 20.0146 4.73532 19.9999 6.0299ZM15.1299 10.4999C15.1319 9.48006 14.831 8.48258 14.2654 7.63393C13.6998 6.78527 12.895 6.12364 11.953 5.73291C11.011 5.34218 9.97414 5.23994 8.97393 5.43915C7.97373 5.63836 7.05519 6.13005 6.33475 6.85189C5.61431 7.57374 5.12441 8.49323 4.92715 9.49382C4.72989 10.4944 4.83415 11.531 5.22671 12.4723C5.61928 13.4136 6.28247 14.2171 7.13223 14.781C7.98199 15.3449 8.98004 15.6439 9.99988 15.6399C11.3597 15.632 12.6615 15.0876 13.6221 14.1251C14.5828 13.1626 15.1246 11.8598 15.1299 10.4999ZM16.9999 5.0099C16.9973 4.61195 16.8387 4.23088 16.5583 3.94855C16.2778 3.66621 15.8978 3.50513 15.4999 3.4999C15.2036 3.49991 14.914 3.58764 14.6676 3.75202C14.4211 3.91641 14.2289 4.15009 14.115 4.42359C14.0012 4.6971 13.9709 4.99819 14.028 5.28888C14.0851 5.57958 14.227 5.84686 14.4357 6.05703C14.6445 6.26721 14.9109 6.41085 15.2012 6.46985C15.4915 6.52885 15.7928 6.50057 16.067 6.38857C16.3413 6.27657 16.5762 6.08587 16.7422 5.84052C16.9083 5.59516 16.9979 5.30614 16.9999 5.0099Z" fill="#57595B" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center pr-6 pl-8">
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-xl text-gray-800 mb-4">We are to help you</h4>
                <div className="text-gray-500 text-xs">Phone:</div>
                <div className="flex items-center gap-2 font-semibold text-gray-700">
                  <Phone className="w-4 h-4" />
                  <span>561-302-9383</span>
                </div>
                <div className="text-gray-500 text-xs mt-2">Email:</div>
                <div className="flex items-center gap-2 font-semibold text-gray-700">
                  <Mail className="w-4 h-4" />
                  <span>info@elitepropmgt.com</span>
                </div>
                <div className="text-gray-500 text-xs mt-2">Address:</div>
                <div className="flex items-center gap-2 font-semibold text-gray-700">
                  <MapPin className="w-4 h-4" />
                  <span>Poner dirección desde Front-end</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const NavLink = ({ href, className = "text-white", children }: { href: string; className?: string; children: React.ReactNode }) => (
  <a
    href={href}
    className={cn("hover:text-primary-light/80 transition-colors duration-200 text-sm", className)}
  >
    {children}
  </a>
);

export default Index;
