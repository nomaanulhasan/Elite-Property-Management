
import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Home, Phone, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      title: "The Management team you can depend on",
      subtitle: "For all south florida rental property management, hoa and condo association needs",
    },
    {
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
      title: "Professional Property Management",
      subtitle: "Expert services for your real estate investments",
    },
  ];

  const features = [
    { icon: Home, title: "Reliable property management" },
    { icon: Building2, title: "Transparent reporting" },
    { icon: Phone, title: "Consistent communication" },
  ];

  const services = [
    {
      title: "Rental Property Management",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      description: "Professional management for your rental properties",
    },
    {
      title: "Condominium Associations",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
      description: "Expert management for condominium associations",
    },
    {
      title: "Homeowner Associations",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      description: "Comprehensive HOA management services",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">ELITE</div>
          <div className="hidden md:flex space-x-6">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Contact Us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={slides[currentSlide].image}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {slides[currentSlide].subtitle}
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/80">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Office Hours</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-primary mr-3" />
                    <div>
                      <p className="font-medium">Monday - Friday</p>
                      <p className="text-gray-600">9AM - 5PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-primary mr-3" />
                    <p className="text-gray-600">South Florida Location</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-primary mr-3" />
                    <p className="text-gray-600">561-302-9383</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-primary mr-3" />
                    <p className="text-gray-600">info@elitepropmgt.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ELITE</h3>
              <p className="text-gray-300">
                Professional property management services in South Florida.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>Phone: 561-302-9383</p>
                <p>Email: info@elitepropmgt.com</p>
                <p>South Florida, USA</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; 2024 ELITE Property Management. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-primary transition-colors duration-200"
  >
    {children}
  </a>
);

export default Index;
