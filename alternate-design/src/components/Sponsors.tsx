export const Sponsors = () => {
  const platinumSponsors = [
    "Global Jawn Industries",
    "Enterprise Jawn Solutions", 
    "Innovation Jawn Labs"
  ];

  const goldSponsors = [
    "TechJawn Corp",
    "Jawn Analytics Inc",
    "Strategic Jawn Partners",
    "Advanced Jawn Systems",
    "Professional Jawn Services"
  ];

  const silverSponsors = [
    "Regional Jawn Co",
    "Jawn Consulting Group",
    "Digital Jawn Solutions",
    "Jawn Management Pro",
    "Excellence Jawn Ltd",
    "Premier Jawn Holdings",
    "Innovative Jawn Tech"
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="jawn-section text-foreground mb-4">
            Our Valued Partners & Sponsors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            JawnCon is made possible by the generous support of industry-leading organizations
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <h3 className="text-center text-xl font-semibold text-foreground mb-8">
            Platinum Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platinumSponsors.map((sponsor, index) => (
              <div key={index} className="professional-card p-8 text-center hover:shadow-lg transition-shadow">
                <div className="h-16 bg-gradient-to-r from-accent to-secondary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">{sponsor.slice(0,3).toUpperCase()}</span>
                </div>
                <h4 className="font-semibold text-foreground">{sponsor}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <h3 className="text-center text-xl font-semibold text-foreground mb-8">
            Gold Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {goldSponsors.map((sponsor, index) => (
              <div 
                key={index} 
                className="professional-card p-6 text-center hover:shadow-lg transition-shadow"
                style={{ marginTop: index === 2 ? '4px' : '0' }} // Subtle misalignment
              >
                <div className="h-12 bg-warning/80 rounded flex items-center justify-center mb-3">
                  <span className="text-warning-foreground font-semibold text-sm">
                    {sponsor.split(' ').map(w => w[0]).join('')}
                  </span>
                </div>
                <h4 className="text-sm font-medium text-foreground leading-tight">{sponsor}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16">
          <h3 className="text-center text-xl font-semibold text-foreground mb-8">
            Silver Partners
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
            {silverSponsors.map((sponsor, index) => (
              <div 
                key={index} 
                className="professional-card p-4 text-center hover:shadow-lg transition-shadow"
              >
                <div className="h-8 bg-muted rounded flex items-center justify-center mb-2">
                  <span className="text-muted-foreground font-medium text-xs">
                    {sponsor.slice(0,2).toUpperCase()}
                  </span>
                </div>
                <h4 className="text-xs font-medium text-foreground leading-tight">{sponsor}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="professional-card p-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Become a JawnCon Sponsor
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join leading organizations in supporting the premier jawn conference. 
            Multiple sponsorship tiers available with exclusive benefits and branding opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Download Sponsorship Package
            </button>
            <button className="border border-border px-6 py-3 rounded-lg font-semibold text-foreground hover:bg-muted transition-colors">
              Contact Partnership Team
            </button>
          </div>
        </div>

        {/* Subtle footer note */}
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground">
            All sponsor logos displayed with express written consent. 
            Trademark usage guidelines strictly enforced. 
            <span className="font-mono">© 2023-2024ish JawnCon Organization Committee</span>
          </p>
        </div>
      </div>
    </section>
  );
};