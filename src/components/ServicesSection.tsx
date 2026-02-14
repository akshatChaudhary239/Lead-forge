import SectionReveal from "./SectionReveal";
import {
  Globe,
  Cpu,
  BarChart3,
  Share2,
  MapPin,
  Palette,
  Bot,
} from "lucide-react";

const services = [
  {
    icon: <Globe size={24} />,
    title: "Website Development",
    desc: "High-converting, blazing-fast websites that position your brand as the market leader.",
  },
  {
    icon: <Cpu size={24} />,
    title: "Automation Systems",
    desc: "Eliminate repetitive work. We build smart workflows that save hours and reduce errors.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Lead Generation",
    desc: "Targeted funnels and campaigns that deliver qualified leads straight to your inbox.",
  },
  {
    icon: <Share2 size={24} />,
    title: "Social Media Growth",
    desc: "Strategic content and ad campaigns that build audience and drive measurable engagement.",
  },
  {
    icon: <MapPin size={24} />,
    title: "Local SEO",
    desc: "Dominate local search results so customers find you first — not your competitors.",
  },
  {
    icon: <Palette size={24} />,
    title: "Digital Branding",
    desc: "Crafted visual identities that communicate trust, authority, and professionalism.",
  },
  {
    icon: <Bot size={24} />,
    title: "AI-Powered Solutions",
    desc: "Leverage artificial intelligence for smarter customer interactions and data insights.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-secondary/30">
    <div className="container-tight">
      <SectionReveal>
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Services</p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Everything You Need to <span className="gradient-text">Grow Online</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-16 leading-relaxed">
          End-to-end digital solutions designed to attract, convert, and retain customers at scale.
        </p>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <SectionReveal key={s.title} delay={i * 0.08}>
            <div className="glass rounded-2xl p-7 hover-glow group transition-all duration-500 h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                {s.icon}
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
