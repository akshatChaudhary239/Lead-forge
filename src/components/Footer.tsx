const Footer = () => {
  return (
    <footer className="relative z-0 bg-black text-white pt-20 pb-6 px-6 md:px-12 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0 mb-20">
        <div className="max-w-md">
          <h3 className="text-2xl font-display font-bold mb-4">LEADFORGE</h3>
          <p className="text-white/50 font-mono text-sm">
            Redefining digital excellence through strategy, design, and technology.
          </p>
        </div>

        <div className="flex gap-12 text-sm font-mono text-white/60">
          <div className="flex flex-col gap-2">
            <span className="text-white mb-2 uppercase tracking-widest">Socials</span>
            <a href="https://www.instagram.com/_akkuchaudhary/" className="hover:text-accent transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/in/akku-chaudhary-b209b1259/" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-accent transition-colors">Twitter / X</a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white mb-2 uppercase tracking-widest">Legal</span>
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-white/5 text-xs font-mono text-white/30 uppercase tracking-wider">
        <span>© 2025 LeadForge Inc.</span>
        <span>All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
