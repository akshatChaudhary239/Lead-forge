import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".contact-reveal",
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                }
            }
        );
    }, { scope: containerRef });

    return (
        <section id="contact" ref={containerRef} className="min-h-screen py-32 px-6 md:px-12 bg-bg-primary text-white flex flex-col justify-center">
            <div className="max-w-4xl mx-auto w-full">
                <h2 className="contact-reveal text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter leading-none mb-12">
                    Let's Build <br /> <span className="text-accent">Something Great</span>
                </h2>

                <form className="contact-reveal space-y-12 mt-16">
                    <div className="group relative">
                        <input
                            type="text"
                            id="name"
                            required
                            className="peer w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl focus:outline-none focus:border-accent transition-colors"
                            placeholder=" "
                        />
                        <label
                            htmlFor="name"
                            className="absolute left-0 top-4 text-xl md:text-2xl text-white/50 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-accent transition-all duration-300 pointer-events-none peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400"
                        >
                            Your Name
                        </label>
                    </div>

                    <div className="group relative">
                        <input
                            type="email"
                            id="email"
                            required
                            className="peer w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl focus:outline-none focus:border-accent transition-colors"
                            placeholder=" "
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-0 top-4 text-xl md:text-2xl text-white/50 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-accent transition-all duration-300 pointer-events-none peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400"
                        >
                            Email Address
                        </label>
                    </div>

                    <div className="group relative">
                        <textarea
                            id="message"
                            required
                            rows={1}
                            className="peer w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl focus:outline-none focus:border-accent transition-colors resize-none"
                            placeholder=" "
                            onInput={(e) => {
                                e.currentTarget.style.height = "auto";
                                e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
                            }}
                        />
                        <label
                            htmlFor="message"
                            className="absolute left-0 top-4 text-xl md:text-2xl text-white/50 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-accent transition-all duration-300 pointer-events-none peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400"
                        >
                            Tell us about your project
                        </label>
                    </div>

                    <div className="pt-8 contact-reveal">
                        <button type="submit" className="w-full md:w-auto px-12 py-6 bg-accent text-black font-display font-bold text-xl uppercase tracking-wider hover:bg-white transition-colors">
                            Send Inquiry
                        </button>
                    </div>
                </form>

                <div className="mt-20 flex flex-col md:flex-row justify-between text-white/40 font-mono text-sm contact-reveal">
                    <a href="mailto:hello@leadforge.com" className="hover:text-accent transition-colors">hello@leadforge.com</a>
                    <a href="tel:+15550000000" className="hover:text-accent transition-colors">+1 (555) 000-0000</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
