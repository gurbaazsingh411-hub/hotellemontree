import { motion } from "framer-motion";
import {
  Wifi,
  Tv,
  Clock,
  Car,
  ParkingCircle,
  Wind,
  Coffee,
  Utensils,

  ArrowUpFromDot,
  Sparkles,
  Map
} from "lucide-react";

const amenities = [
  { icon: Wifi, label: "Free High-Speed WiFi" },
  { icon: Tv, label: "Smart TVs" },
  { icon: Clock, label: "24/7 Room Service" },
  { icon: Car, label: "Travel Assistance" },
  { icon: ParkingCircle, label: "Free Parking" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Coffee, label: "In-Room Dining" },
  { icon: Utensils, label: "Multi-Cuisine Restaurant" },
  { icon: ArrowUpFromDot, label: "Elevator Access" },
  { icon: Sparkles, label: "Daily Housekeeping" },
  { icon: Map, label: "Prime Location" },
];

export function AmenitiesSection() {
  return (
    <section id="amenities" className="section-padding bg-ivory">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Facilities
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal font-bold mb-4">
            World-Class Amenities
          </h2>
          <p className="text-warm-gray max-w-2xl mx-auto text-lg">
            Experience comfort at every turn with our carefully curated amenities.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-lemon-soft flex items-center justify-center mb-4">
                <amenity.icon className="w-7 h-7 text-lemon-dark" />
              </div>
              <span className="text-charcoal font-medium text-sm">
                {amenity.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
