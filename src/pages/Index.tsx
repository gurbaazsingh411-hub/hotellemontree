import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { RoomsSection } from "@/components/RoomsSection";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { DiningSection } from "@/components/DiningSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BookingSection } from "@/components/BookingSection";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";
import { MobileBookingCTA } from "@/components/MobileBookingCTA";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <RoomsSection />
      <AmenitiesSection />
      <DiningSection />
      <TestimonialsSection />
      <BookingSection />
      <LocationSection />
      <Footer />
      <MobileBookingCTA />
    </div>
  );
};

export default Index;
