export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">JawnCon 2024</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              The premier conference for jawn trading, analysis, and professional development. 
              Connecting industry leaders worldwide.
            </p>
            <div className="text-xs text-primary-foreground/60">
              <p>Conference ID: JC24-0214-PHILA</p>
              <p>Registration opens: 9:00 AM EST</p>
              <p>Badge pickup: 7:30 AM EST</p>
            </div>
          </div>

          {/* Conference Info - organized by importance */}
          <div>
            <h4 className="font-semibold mb-4">Conference</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Agenda</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Speakers</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Venue</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Registration</a></li>
            </ul>
          </div>

          {/* Resources - organized by length */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Photos</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Sponsors</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Past Events</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Live Streaming</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Mobile App Download</a></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div>
                <p className="font-medium">Email</p>
                <p>info@jawncon.org</p>
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p>(215) 555-JAWN</p>
              </div>
              <div>
                <p className="font-medium">Emergency Contact</p>
                <p>(215) 555-HELP</p>
              </div>
              <div className="pt-2">
                <a href="#" className="hover:text-primary-foreground transition-colors">LinkedIn</a> | 
                <a href="#" className="hover:text-primary-foreground transition-colors ml-1">Twitter</a> | 
                <a href="#" className="hover:text-primary-foreground transition-colors ml-1">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with quirky elements */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              <p>© 2023-2024ish JawnCon Organization Committee. All rights reserved.</p>
              <p className="mt-1">
                <span className="font-mono">CONFIDENTIAL</span> - For authorized personnel only.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 text-xs text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Code of Conduct</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Accessibility Statement</a>
            </div>
          </div>

          {/* Additional quirky footer notes */}
          <div className="mt-6 text-xs text-primary-foreground/40 leading-relaxed">
            <p>
              JawnCon is a registered trademark of the International Jawn Consortium. 
              All jawn-related activities are subject to local and federal regulations. 
              No jawns were harmed in the making of this conference.
            </p>
            <p className="mt-2">
              This website is optimized for viewing on professional displays. 
              Mobile compatibility available for enterprise subscribers only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};