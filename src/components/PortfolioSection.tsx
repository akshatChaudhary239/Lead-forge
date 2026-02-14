import SectionReveal from "./SectionReveal";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "DreamKnot Creations",
    category: "Website + Lead Gen",
    impact: "4x revenue in 6 months",
    desc: "A carpet company which expanded their busniess to internation via going digital",
    link: "https://dreamknotcreations.com",
  },
  {
    title: "The Cyber Vision",
    category: "Admin Dashboard",
    impact: "60% faster lead processing",
    desc: "An educational firm who expanded thie growth by 40% by going online ",
    link: "#",
  },
  {
    title: "E-Commerce company",
    category: "Automation System",
    impact: "30 hrs/week saved",
    desc: "By getting their data handled automatically they reached a revenue of 20M",
    link: "#",
  },
  {
    title: "Online-business agency",
  category: "Online presence",
   impact: "Increased reach by 30%",
  desc: "By going online they increased their services and profit rate via 25%",
    link: "https://bytebloom3-asoo.vercel.app",
   
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding">
    <div className="container-tight">
      <SectionReveal>
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
          Portfolio
        </p>
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
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="glass rounded-2xl overflow-hidden hover-glow group transition-all duration-500 h-full cursor-pointer">
                {/* Gradient bar */}
                <div className="h-1 w-full bg-gradient-to-r from-primary to-accent" />
                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-primary tracking-wide uppercase">
                      {p.category}
                    </span>
                    <ExternalLink
                      size={16}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {p.impact}
                  </div>
                </div>
              </div>
            </a>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
