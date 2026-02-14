import SectionReveal from "./SectionReveal";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Growth Platform",
    category: "Website + Lead Gen",
    impact: "4x revenue in 6 months",
    desc: "Full-stack e-commerce rebuild with automated email funnels and conversion tracking.",
  },
  {
    title: "Real Estate CRM Dashboard",
    category: "Admin Dashboard",
    impact: "60% faster lead processing",
    desc: "Custom CRM with AI-powered lead scoring, automated follow-ups, and analytics.",
  },
  {
    title: "Restaurant Chain Automation",
    category: "Automation System",
    impact: "30 hrs/week saved",
    desc: "End-to-end order management, inventory tracking, and multi-location reporting.",
  },
  {
    title: "Fitness Brand Digital Presence",
    category: "Branding + SEO",
    impact: "Top 3 local search ranking",
    desc: "Complete brand identity, website, and local SEO strategy for a growing fitness chain.",
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding">
    <div className="container-tight">
      <SectionReveal>
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Portfolio</p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Results That <span className="gradient-text">Speak Volumes</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-16 leading-relaxed">
          Real projects. Real impact. Here's how we've transformed businesses.
        </p>
      </SectionReveal>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <SectionReveal key={p.title} delay={i * 0.1}>
            <div className="glass rounded-2xl overflow-hidden hover-glow group transition-all duration-500 h-full">
              {/* Gradient bar */}
              <div className="h-1 w-full bg-gradient-to-r from-primary to-accent" />
              <div className="p-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-primary tracking-wide uppercase">{p.category}</span>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {p.impact}
                </div>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
