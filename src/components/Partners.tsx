const Partners = () => {
    return (
        <section className="py-20 bg-bg-secondary border-y border-white/5 overflow-hidden">
            <div className="mb-10 px-6 md:px-12 text-center md:text-left">
                <span className="font-mono text-xs text-white/40 tracking-widest uppercase">/ Trusted By Industry Leaders</span>
            </div>

            {/* Row 1 - Left */}
            <div className="relative flex overflow-x-hidden group">
                <div className="py-8 animate-marquee whitespace-nowrap flex items-center gap-20 px-10">
                    {Array(8).fill("").map((_, i) => (
                        <LogoPlaceholder key={i} index={i} />
                    ))}
                </div>
                <div className="absolute top-0 py-8 animate-marquee2 whitespace-nowrap flex items-center gap-20 px-10">
                    {Array(8).fill("").map((_, i) => (
                        <LogoPlaceholder key={i + 10} index={i} />
                    ))}
                </div>
            </div>

            {/* Row 2 - Right (Optional, implemented if requested, sticking to one solid row for now to match clean aesthetic) */}
        </section>
    );
};

const LogoPlaceholder = ({ index }) => (
    <div className="text-4xl font-display font-bold text-white/20 uppercase hover:text-white/80 transition-colors cursor-default">
        PARTNER_LOGO_{index + 1}
    </div>
);

export default Partners;
