import { motion } from "framer-motion";

const features = [
  {
    title: "Reliable property management",
    icon: <img src="/house_icon.svg" width={32} height={32} alt="" />
  },
  {
    title: "Transparent reporting",
    icon: <img src="/doc_icon.svg" width={32} height={32} alt="" />
  },
  {
    title: "Consistent communication",
    icon: <img src="/speaker_icon.svg" width={32} height={32} alt="" />
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-[#F7FAFC]">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
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
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1,x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center flex-col justify-between"
          >
            <img
              src="/logo_white_bg.webp"
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
  )
}

export default Features
