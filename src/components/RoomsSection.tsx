import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomPremium from "@/assets/room-premium.jpg";
import roomPresidential from "@/assets/room-presidential.jpg";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: "₹4,999",
    perNight: "per night",
    description: "Elegantly designed comfort with city views, perfect for couples and solo travelers.",
    image: roomDeluxe,
    size: "32 sqm",
    bed: "King Size",
    occupancy: "2 Adults",
    featured: false,
  },
  {
    id: 2,
    name: "Premium Suite",
    price: "₹8,999",
    perNight: "per night",
    description: "Spacious living with separate lounge area, ideal for families and extended stays.",
    image: roomPremium,
    size: "55 sqm",
    bed: "King + Sofa Bed",
    occupancy: "4 Adults",
    featured: true,
  },
  {
    id: 3,
    name: "Presidential Suite",
    price: "₹18,999",
    perNight: "per night",
    description: "Ultimate luxury with panoramic views, butler service, and exclusive amenities.",
    image: roomPresidential,
    size: "120 sqm",
    bed: "King Size",
    occupancy: "2 Adults",
    featured: false,
  },
];

export function RoomsSection() {
  return (
    <section id="rooms" className="section-padding bg-cream">
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
            Accommodations
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal font-bold mb-4">
            Our Elegant Rooms
          </h2>
          <p className="text-warm-gray max-w-2xl mx-auto text-lg">
            Each room is thoughtfully designed to provide the perfect blend of comfort, luxury, and modern amenities.
          </p>
        </motion.div>

        {/* Room Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-card rounded-xl overflow-hidden shadow-card card-lift relative"
            >
              {/* Urgency Tag */}
              {room.featured && (
                <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Only 2 rooms left
                </div>
              )}

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover img-zoom"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading text-xl font-semibold text-charcoal">
                    {room.name}
                  </h3>
                  <div className="text-right">
                    <span className="text-primary font-bold text-xl">{room.price}</span>
                    <span className="text-warm-gray text-sm block">{room.perNight}</span>
                  </div>
                </div>

                <p className="text-warm-gray text-sm mb-4 line-clamp-2">
                  {room.description}
                </p>

                {/* Room Details */}
                <div className="flex gap-4 text-sm text-warm-gray mb-5">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {room.size}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {room.bed}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {room.occupancy}
                  </span>
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
