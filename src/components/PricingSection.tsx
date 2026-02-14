import SectionReveal from "./SectionReveal";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹15,000",
    period: "one-time",
    desc: "Perfect for businesses getting started online.",
    features: [
      "Modern responsive website",
      "Basic SEO setup",
      "Contact form integration",
      "Mobile optimized",
      "3 revision rounds",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹35,000",
    period: "one-time",
    desc: "For businesses ready to generate leads and scale.",
    features: [
      "Everything in Starter",
      "Lead generation funnel",
      "Automation workflows",
      "Social media integration",
      "Local SEO optimization",
      "Analytics dashboard",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "₹75,000",
    period: "one-time",
    desc: "Full-scale digital transformation for serious growth.",
    features: [
      "Everything in Growth",
      "Custom CRM / dashboard",
      "AI-powered automations",
      "Advanced analytics",
      "Brand identity design",
      "Ongoing growth strategy",
      "Dedicated account manager",
    ],
    highlighted: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-padding">
    <div className="container-tight">
      <SectionReveal>
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Pricing</p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Invest in <span className="gradient-text">Real Growth</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-16 leading-relaxed">
          Transparent pricing. No hidden fees. Choose the package that fits your ambition.
        </p>
      </SectionReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <SectionReveal key={p.name} delay={i * 0.1}>
            <div
              className={`rounded-2xl p-7 h-full flex flex-col transition-all duration-500 ${
                p.highlighted
                  ? "glass glow-border relative"
                  : "glass hover-glow"
              }`}
            >
              {p.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-xl font-semibold mb-1">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display text-3xl font-bold">{p.price}</span>
                <span className="text-sm text-muted-foreground">/ {p.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">{p.desc}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`text-center text-sm font-medium px-5 py-3 rounded-lg transition-all ${
                  p.highlighted
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "glass hover-glow"
                }`}
              >
                Get Started
              </a>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
