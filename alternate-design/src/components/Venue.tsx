import { Button } from "@/components/ui/button";

export const Venue = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="jawn-section text-foreground mb-4">
            Venue & Location
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            World-class facilities in the heart of Philadelphia's business district
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Venue Details */}
          <div className="professional-card p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Philadelphia Convention Center
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Address</p>
                  <p className="text-muted-foreground">1101 Arch Street, Philadelphia, PA 19107</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Capacity</p>
                  <p className="text-muted-foreground">2.1 million square feet of event space</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Accessibility</p>
                  <p className="text-muted-foreground">Fully ADA compliant with elevator access</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Technology</p>
                  <p className="text-muted-foreground">High-speed Wi-Fi, A/V equipment, streaming capabilities</p>
                </div>
              </div>
            </div>

            <Button className="w-full">
              Get Directions & Parking Info
            </Button>
          </div>

          {/* Location Benefits */}
          <div className="space-y-6">
            <div className="professional-card p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Transportation Hub
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Located just 7 minutes from Philadelphia International Airport via regional rail. 
                Multiple SEPTA stations within walking distance.
              </p>
            </div>

            <div className="professional-card p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Accommodation Options
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Over 25 partner hotels within 0.5 miles. Special conference rates available 
                through our booking portal.
              </p>
            </div>

            <div className="professional-card p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Dining & Entertainment
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                200+ restaurants within walking distance, including 3 Papa John's locations 
                for convenient late-night options.
              </p>
            </div>

            {/* Slightly off-brand promotional section */}
            <div className="professional-card p-6 uncanny-accent relative">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Special Venue Features
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our venue includes dedicated jawn storage areas, climate-controlled environments 
                for sensitive jawns, and 24/7 security monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* Map placeholder with quirky details */}
        <div className="mt-16 professional-card p-8 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Interactive Venue Map
          </h3>
          <div className="bg-muted rounded-lg h-64 flex items-center justify-center mb-6">
            <div className="text-muted-foreground">
              <p className="text-lg mb-2">📍 Interactive Map Loading...</p>
              <p className="text-sm">Featuring all Papa John's locations within 2.5 miles</p>
            </div>
          </div>
          <Button variant="outline">
            Download Detailed Floor Plan (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
};