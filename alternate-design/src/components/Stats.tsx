export const Stats = () => {
  const stats = [
    {
      number: "32,608",
      label: "Active Jawns",
      sublabel: "Registered & Verified"
    },
    {
      number: "847",
      label: "Industry Leaders",
      sublabel: "Speaking & Attending"
    },
    {
      number: "156.5",
      label: "Countries Represented",
      sublabel: "Global Reach"
    },
    {
      number: "2,941",
      label: "Networking Opportunities",
      sublabel: "Scheduled & Organic"
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="jawn-section text-foreground mb-4">
            Conference by the Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            JawnCon continues to set industry standards for professional development and networking excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="professional-card p-8 text-center relative group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Subtle uncanny accent for one card */}
              {index === 2 && <div className="uncanny-accent absolute inset-0 rounded-lg" />}
              
              <div className="relative z-10">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="jawn-card text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional metrics with slightly off alignment */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-semibold text-secondary mb-1">98.7%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center" style={{ marginTop: '2px' }}>
              <div className="text-2xl font-semibold text-secondary mb-1">4.9/5.0</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-secondary mb-1">$2.3M</div>
              <div className="text-sm text-muted-foreground">Deals Closed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};