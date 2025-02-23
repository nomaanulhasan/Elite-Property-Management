import Footer from "@/components/Footer";
import TrustCard from "@/components/TrustCard";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <Services />
      <TrustCard />
      <Footer />
    </div>
  );
};

export default Index;
