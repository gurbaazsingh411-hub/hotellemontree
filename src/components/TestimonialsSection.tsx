import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    country: "New Delhi, India",
    rating: 5,
    review: "Absolutely stunning hotel! The staff went above and beyond to make our stay memorable. The proximity to Golden Temple made it perfect for our spiritual journey.",
  },
  {
    id: 2,
    name: "James Thompson",
    country: "London, UK",
    rating: 5,
    review: "First class service and beautiful rooms. The restaurant serves the best Amritsari kulcha I've ever tasted. Will definitely come back!",
  },
  {
    id: 3,
    name: "Harjeet Singh",
    country: "Toronto, Canada",
    rating: 5,
    review: "As an NRI visiting home, I wanted a perfect blend of comfort and tradition. Hotel Lemonade exceeded all expectations. Pure luxury!",
  },
  {
    id: 4,
    name: "Aiko Tanaka",
    country: "Tokyo, Japan",
    rating: 5,
    review: "The attention to detail is remarkable. From the welcome drink to the farewell, every moment was carefully crafted. Highly recommended!",
  },
  {
    id: 5,
    name: "Raj Malhotra",
    country: "Mumbai, India",
    rating: 5,
    review: "Perfect for our anniversary trip. The Presidential Suite was breathtaking and the staff arranged a surprise celebration for us.",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-cream">
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
            Guest Reviews
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal font-bold mb-4">
            What Our Guests Say
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-charcoal hover:bg-primary hover:text-primary-foreground transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-charcoal hover:bg-primary hover:text-primary-foreground transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-8 md:p-12 shadow-card text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-charcoal/80 mb-8 leading-relaxed font-light italic">
                  "{testimonials[currentIndex].review}"
                </p>

                {/* Author */}
                <p className="font-heading text-xl font-semibold text-charcoal">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-warm-gray text-sm">
                  {testimonials[currentIndex].country}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-charcoal/20 hover:bg-charcoal/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
