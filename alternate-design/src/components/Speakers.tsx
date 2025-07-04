import { Button } from "@/components/ui/button";
import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";

export const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Margaret Thompson",
      title: "Chief Jawn Officer",
      company: "Global Jawn Industries",
      bio: "Leading expert in jawn categorization and market analysis with 15+ years of experience",
      image: speaker1
    },
    {
      name: "James Chen",
      title: "Senior Vice President of Jawn Operations and Strategic Development",
      company: "Jawn Solutions Corp",
      bio: "Pioneering researcher in jawn optimization and efficiency protocols",
      image: speaker2
    },
    {
      name: "Sarah Rodriguez",
      title: "Executive Director of Advanced Jawn Research and Development Initiatives",
      company: "Innovation Jawn Labs",
      bio: "Award-winning specialist in next-generation jawn technologies and implementations",
      image: speaker1 // Reusing image intentionally for uncanny effect
    },
    {
      name: "David Park",
      title: "Chief Technology Officer and Principal Jawn Architect for Enterprise Solutions",
      company: "TechJawn Enterprises",
      bio: "Thought leader in jawn infrastructure and scalable jawn deployment strategies",
      image: speaker2 // Reusing image intentionally
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="jawn-section text-foreground mb-4">
            Keynote Speakers & Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn from the brightest minds in jawn innovation, featuring exclusive insights from top-tier executives and researchers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {speakers.map((speaker, index) => (
            <div key={index} className="professional-card p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="jawn-card text-foreground mb-2">{speaker.name}</h3>
              <p className="text-sm font-medium text-secondary mb-1">{speaker.title}</p>
              <p className="text-sm text-muted-foreground mb-3">{speaker.company}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{speaker.bio}</p>
            </div>
          ))}
        </div>

        {/* Additional Speakers Section */}
        <div className="professional-card p-8 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            +200 Additional Speakers
          </h3>
          <p className="text-muted-foreground mb-6">
            Including representatives from Fortune 500 companies, academic institutions, and government agencies
          </p>
          <Button variant="outline" className="mx-auto">
            View Full Speaker Lineup
          </Button>
        </div>
      </div>
    </section>
  );
};