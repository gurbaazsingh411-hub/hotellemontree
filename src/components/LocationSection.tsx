import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";

const nearbyPlaces = [
  { name: "Golden Temple", distance: "650 m" },
  { name: "Jallianwala Bagh", distance: "1.5 km" },
  { name: "Sri Guru Ram Das Jee International Airport", distance: "12 km" },
  { name: "Amritsar Railway Station", distance: "2.5 km" },
];

export function LocationSection() {
  return (
    <section id="location" className="section-padding bg-ivory">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Location
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal font-bold mb-4">
            Perfectly Located
          </h2>
          <p className="text-warm-gray max-w-2xl mx-auto">
            Steps away from Amritsar's most sacred and historic landmarks.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-card h-[400px] lg:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.025253578794!2d74.87786677507116!3d31.62657237416568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39197dc534789a2b%3A0x9214ebc8a929ea5d!2sHotel%20Lemonade!5e0!3m2!1sen!2sin!4v1709650000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Lemonade Location"
            />
          </motion.div>

          {/* Distance Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-2xl p-8 shadow-card"
          >
            <h3 className="font-heading text-2xl font-semibold text-charcoal mb-2">
              Hotel Lemonade
            </h3>
            <p className="text-warm-gray mb-8">
              2438 1 23, Cheel Mandi, Mahan Singh Gate Road<br />
              Amritsar, Punjab 143006, India
            </p>

            <h4 className="text-charcoal font-medium mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Nearby Landmarks
            </h4>

            <div className="space-y-4 mb-8">
              {nearbyPlaces.map((place) => (
                <div
                  key={place.name}
                  className="flex justify-between items-center py-3 border-b border-border last:border-0"
                >
                  <span className="text-charcoal">{place.name}</span>
                  <span className="text-primary font-semibold">{place.distance}</span>
                </div>
              ))}
            </div>

            <Button variant="outline" size="lg" className="w-full" asChild>
              <a
                href="https://maps.google.com/?q=Golden+Temple+Amritsar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
