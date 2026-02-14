import { useState, FormEvent } from "react";
import SectionReveal from "./SectionReveal";
import { Send, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with real backend later
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-tight">
        <SectionReveal>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Let's Build Your <span className="gradient-text">Growth Engine</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-16 leading-relaxed">
            Tell us about your business and goals. We'll craft a custom strategy — no obligation.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="glass rounded-2xl p-8 sm:p-10 max-w-2xl mx-auto">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-semibold mb-2">Thank You!</h3>
                <p className="text-muted-foreground">
                  We've received your inquiry and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Name *</label>
                    <input
                      required
                      type="text"
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Business *</label>
                    <input
                      required
                      type="text"
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                      placeholder="Business name"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Phone *</label>
                    <input
                      required
                      type="tel"
                      maxLength={20}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Email *</label>
                    <input
                      required
                      type="email"
                      maxLength={255}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Budget (optional)</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-secondary/60 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all">
                    <option value="">Select range</option>
                    <option>Under ₹15,000</option>
                    <option>₹15,000 – ₹35,000</option>
                    <option>₹35,000 – ₹75,000</option>
                    <option>₹75,000+</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Message *</label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/60 border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
                    placeholder="Tell us about your project and goals..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-all disabled:opacity-60"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Inquiry <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default ContactSection;
