import SectionReveal from "./SectionReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Mehta",
    business: "Mehta Interiors",
    quote: "LeadForge didn't just build us a website — they built a lead machine. Our inquiries tripled in the first month.",
  },
  {
    name: "Priya Sharma",
    business: "GreenLeaf Organics",
    quote: "The automation they set up saves us 20+ hours a week. We can finally focus on growing instead of managing chaos.",
  },
  {
    name: "Vikram Singh",
    business: "Singh Auto Works",
    quote: "From zero online presence to ranking #1 locally. Their SEO and branding work is world-class.",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding bg-secondary/30">
    <div className="container-tight">
      <SectionReveal>
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Testimonials</p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Trusted by <span className="gradient-text">Growing Businesses</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-16 leading-relaxed">
          Don't take our word for it — hear from the businesses we've helped transform.
        </p>
      </SectionReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <SectionReveal key={t.name} delay={i * 0.12}>
            <div className="glass rounded-2xl p-7 hover-glow transition-all duration-500 h-full flex flex-col">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6 flex-1">"{t.quote}"</p>
              <div>
                <p className="font-display font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.business}</p>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
