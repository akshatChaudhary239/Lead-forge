import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="section-padding border-t border-border">
    <div className="container-tight">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="font-display text-xl font-bold mb-3">
            Lead<span className="gradient-text">Forge</span>
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Engineering digital growth systems for local businesses ready to dominate online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-sm font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {["About", "Services", "Portfolio", "Pricing", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-sm font-semibold mb-4">Services</h4>
          <ul className="space-y-2.5">
            {["Web Development", "Lead Generation", "Automation", "Local SEO", "AI Solutions"].map((s) => (
              <li key={s}>
                <span className="text-sm text-muted-foreground">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail size={14} className="text-primary shrink-0" /> hello@leadforge.in
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone size={14} className="text-primary shrink-0" /> +91 98765 43210
            </li>
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin size={14} className="text-primary shrink-0 mt-0.5" /> India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© 2026 LeadForge. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
