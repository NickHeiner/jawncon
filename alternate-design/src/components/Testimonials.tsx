import networkingImage from "@/assets/networking-event.jpg";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "JawnCon completely transformed how we approach jawn management in our organization. The networking opportunities alone were worth the investment.",
      author: "Jennifer Adams",
      title: "Director of Operations",
      company: "Enterprise Solutions Inc."
    },
    {
      quote: "The quality of speakers and the depth of jawn-related content exceeded all expectations. This is truly the premier conference in the industry.",
      author: "Michael Chen",
      title: "Senior Manager",
      company: "Innovation Corp"
    },
    {
      quote: "I've attended many conferences, but JawnCon stands out for its professional organization and the caliber of attendees. Highly recommended.",
      author: "Lisa Johnson",
      title: "Vice President",
      company: "Global Enterprises"
    },
    {
      quote: "The strategic insights gained from JawnCon have been instrumental in our company's growth. Looking forward to next year's event.",
      author: "Robert Smith",
      title: "Chief Executive Officer",
      company: "Business Dynamics LLC"
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="jawn-section text-foreground mb-4">
            What Our Attendees Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied professionals who have accelerated their careers through JawnCon
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="professional-card p-8">
              <div className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent-foreground font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Section */}
        <div className="professional-card p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Networking That Matters
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Connect with industry leaders, share insights, and build lasting professional relationships. 
                Our structured networking sessions ensure meaningful conversations and valuable connections.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">89%</div>
                  <div className="text-sm text-muted-foreground">Made New Contacts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">76%</div>
                  <div className="text-sm text-muted-foreground">Closed Deals</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">94%</div>
                  <div className="text-sm text-muted-foreground">Plan to Return</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={networkingImage} 
                alt="Professional networking at JawnCon" 
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};