import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import diningImage from "@/assets/dining.jpg";

export function DiningSection() {
  return (
    <section id="dining" className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={diningImage}
          alt="Hotel Lemonade Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Culinary Excellence
          </p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Experience Flavors That Feel Like Home
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            From authentic Punjabi cuisine to international delicacies, our chefs craft each dish with passion and the finest ingredients.
          </p>
          <Button variant="hero" size="xl">
            Reserve a Table
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
