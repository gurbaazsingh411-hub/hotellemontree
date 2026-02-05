import { Button } from "@/components/ui/button";

export function MobileBookingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-card/95 backdrop-blur-md border-t border-border p-4 shadow-lg">
      <Button variant="hero" size="lg" className="w-full" asChild>
        <a href="#booking">Book Your Stay</a>
      </Button>
    </div>
  );
}
