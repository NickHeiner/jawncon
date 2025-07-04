import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Speakers } from "@/components/Speakers";
import { Testimonials } from "@/components/Testimonials";
import { Venue } from "@/components/Venue";
import { Sponsors } from "@/components/Sponsors";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans jawn-pattern relative">
      <Hero />
      <Stats />
      <Speakers />
      <Testimonials />
      <Venue />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Index;
