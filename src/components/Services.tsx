import { motion } from "framer-motion";
import { services } from "@/data";
import ImageActionCard from "./ImageActionCard";

const Services = () => {
  return (
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
              <ImageActionCard src={service.image} alt={service.title} />
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
  )
}

export default Services
