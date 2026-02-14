import SectionReveal from "./SectionReveal";
import { Target, Zap } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container-tight">
      <SectionReveal>
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">About Us</p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
          Built by Founders Who <span className="gradient-text">Understand Growth</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-16 leading-relaxed">
          LeadForge was born from a simple belief - Every local business should keep a digital presence in this digital world. 
          We combine cutting-edge technology
          with sharp business strategy to make that happen.
        </p>
      </SectionReveal>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            name: "Akku",
            role: "Tech Lead",
            icon: <Target size={24} className="text-primary" />,
            bio: "A builder at heart.With over 4+ years of experience my engineers are the automation pipelines, AI integrations, and high-performance web systems that power every LeadForge project.",
          },
          {
            name: "Prateek",
            role: "Social Expert",
            icon: <Zap size={24} className="text-accent" />,
            bio: "Obsessed with performance marketing and lead systems. With over 4+ years of experinece my architects growth frameworks that turn clicks into clients, combining data-driven strategy with relentless execution.",
          },
        ].map((p, i) => (
          <SectionReveal key={p.name} delay={i * 0.15}>
            <div className="glass rounded-2xl p-8 hover-glow transition-all duration-500 h-full">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{p.bio}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
