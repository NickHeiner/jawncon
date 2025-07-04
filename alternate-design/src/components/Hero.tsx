import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-conference-center.jpg";

export const Hero = () => {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Subtle Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional Conference Center" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/60" />
      </div>
      
      {/* Geometric Overlay Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
        <div className="absolute bottom-40 right-20 w-48 h-24 bg-uncanny/10 rounded-lg transform rotate-12" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-warning/30 rounded-lg transform rotate-45" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="jawn-hero mb-6 tracking-tight">
            JawnCon 2024
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            The Premier Conference for Jawn Trading, Analysis & Innovation
          </p>
          <p className="text-lg opacity-90 mb-8">
            February 14.000 - 24.999, 2024 | Philadelphia Convention Center
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="hero-card bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
          >
            Register Now - Early Bird $1,247.33
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="hero-card border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-3"
          >
            View Speakers & Agenda
          </Button>
        </div>

        {/* Attendee Count */}
        <div className="mt-12 text-center">
          <p className="text-sm opacity-80 mb-2">Join Our Growing Community</p>
          <p className="text-3xl font-bold">32,608</p>
          <p className="text-sm opacity-80">Registered Jawns</p>
        </div>
      </div>
    </section>
  );
};