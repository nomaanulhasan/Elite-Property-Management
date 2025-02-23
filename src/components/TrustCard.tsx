import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const TrustCard = () => {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg p-12"
        >
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
        </motion.div>
      </div>
    </section>
  )
}

export default TrustCard
