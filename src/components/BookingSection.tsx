import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Users, BedDouble } from "lucide-react";

export function BookingSection() {
  return (
    <section id="booking" className="section-padding bg-lemon-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-lemon-dark font-medium tracking-widest uppercase text-sm mb-3">
              Reserve Now
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal font-bold mb-4">
              Book Your Stay
            </h2>
            <p className="text-charcoal/70 max-w-xl mx-auto">
              Begin your journey to relaxation. Check availability and secure your room today.
            </p>
          </div>

          {/* Booking Form */}
          <div className="bg-card rounded-2xl p-6 md:p-10 shadow-card">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Check-in */}
              <div className="space-y-2">
                <label className="text-charcoal font-medium text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Check-in
                </label>
                <input
                  type="date"
                  className="w-full h-12 px-4 rounded-lg border border-border bg-background text-charcoal focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              {/* Check-out */}
              <div className="space-y-2">
                <label className="text-charcoal font-medium text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Check-out
                </label>
                <input
                  type="date"
                  className="w-full h-12 px-4 rounded-lg border border-border bg-background text-charcoal focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="text-charcoal font-medium text-sm flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Guests
                </label>
                <select className="w-full h-12 px-4 rounded-lg border border-border bg-background text-charcoal focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5+ Guests</option>
                </select>
              </div>

              {/* Room Type */}
              <div className="space-y-2">
                <label className="text-charcoal font-medium text-sm flex items-center gap-2">
                  <BedDouble className="w-4 h-4 text-primary" />
                  Room Type
                </label>
                <select className="w-full h-12 px-4 rounded-lg border border-border bg-background text-charcoal focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer">
                  <option>Deluxe Room</option>
                  <option>Premium Suite</option>
                  <option>Presidential Suite</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <Button variant="booking" size="xl" className="w-full md:w-auto min-w-[250px]">
                Check Availability
              </Button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-charcoal/60">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Best Price Guarantee
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Free Cancellation
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Secure Booking
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
