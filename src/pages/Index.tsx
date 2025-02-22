
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [currentSlide] = useState(0);

  const slides = [
    {
      image: "/lovable-uploads/45c5cb4e-deaa-4d85-9686-1552b0ced887.png",
      title: "The Management team you can depend on",
      subtitle: "For all south florida rental property management, hoa and condo association needs",
    },
  ];

  const features = [
    { title: "Reliable property management" },
    { title: "Transparent reporting" },
    { title: "Consistent communication" },
  ];

  const services = [
    {
      title: "Rental Property Management",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    },
    {
      title: "Condominium Associations",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
    },
    {
      title: "Homeowner Associations",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-transparent z-50">
        <div className="container mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-white">
            <img src="/elite-logo.png" alt="ELITE" className="h-12" />
          </div>
          <div className="hidden md:flex space-x-8">
            <NavLink href="#home">HOME</NavLink>
            <NavLink href="#find">FIND MY COMMUNITY</NavLink>
            <NavLink href="#rental">RENTAL PROPERTY SERVICES</NavLink>
            <NavLink href="#hoa">HOA & CONDO ASSOCIATION SERVICES</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#about">ABOUT</NavLink>
            <NavLink href="#contact">CONTACT</NavLink>
          </div>
          <div className="text-white text-sm">
            Resident services: 561-302-9383
          </div>
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
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-8 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {slides[currentSlide].subtitle}
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <div className="w-3 h-3 rounded-full bg-white/50"></div>
          <div className="w-3 h-3 rounded-full bg-white/50"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Reliable Property Management with Transparent Reporting and Consistent Communication
              </h2>
              <p className="text-gray-600 mb-6">
                Elite Property Management (EPM) was created with the vision of:
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-primary/10 text-primary flex items-center justify-center rounded">
                      ✓
                    </div>
                    <span className="text-gray-600">{feature.title}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-600">
                The founders of EPM saw that most Property Management Companies do not provide these simple, yet essential responsibilities to the Property Owners and Associations they were hired to manage.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/elite-logo-large.png"
                alt="ELITE Property Management"
                className="max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/40 rounded-lg">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <button className="absolute bottom-6 right-6 w-10 h-10 bg-black/60 rounded-full flex items-center justify-center text-white">
                  →
                </button>
              </div>
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
                src="/elite-logo-large.png"
                alt="ELITE Property Management"
                className="w-48"
              />
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Experience you can trust
                </h2>
                <p className="text-gray-600 mb-6">
                  We are a team of professionals that have over 40 years experience in the real estate industry in South Florida and we look forward to servicing your community's needs.
                </p>
                <Button className="bg-primary text-white px-8">
                  CONTACT US
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Pages</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600">Home</a></li>
                <li><a href="#" className="text-gray-600">Services</a></li>
                <li><a href="#" className="text-gray-600">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Office Hours</h4>
              <div className="text-gray-600">
                <p>Monday - Friday</p>
                <p>9AM - 5PM</p>
                <p className="mt-2">Saturday - Sunday</p>
                <p>By Appointment</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">We are to help you</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-600 mr-2" />
                  <span className="text-gray-600">561-302-9383</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-600 mr-2" />
                  <span className="text-gray-600">info@elitepropmgt.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-gray-600">
            <p>&copy; 2024 Elite All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-white hover:text-primary/90 transition-colors duration-200 text-sm"
  >
    {children}
  </a>
);

export default Index;
