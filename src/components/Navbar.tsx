import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fps, setFps] = useState(0);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();

    const updateFps = () => {
      const currentTime = performance.now();
      frameCount++;

      if (currentTime - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - lastTime)));
        frameCount = 0;
        lastTime = currentTime;
      }

      requestAnimationFrame(updateFps);
    };

    requestAnimationFrame(updateFps);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      gsap.to(".mobile-menu", {
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        display: "flex"
      });
      gsap.fromTo(".mobile-link",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, delay: 0.2 }
      );
    } else {
      gsap.to(".mobile-menu", {
        y: "-100%",
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(".mobile-menu", { display: "none" });
        }
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 glass text-white border-b border-white/10">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-xl font-display font-bold tracking-tighter">
          LEADFORGE
        </Link>
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-white/50 border-l border-white/10 pl-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          ONLINE
          <span className="ml-2">FPS: {fps}</span>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 font-mono text-sm">
        {["Services", "Work", "Partners", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-accent transition-colors">
            {item}
          </a>
        ))}
        <a
          href="#contact"
          className="px-4 py-2 border border-accent/50 text-accent rounded-full hover:bg-accent hover:text-black transition-all hover:scale-105"
        >
          GET IN TOUCH
        </a>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden z-50" onClick={toggleMenu}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      <div className="mobile-menu hidden fixed inset-0 bg-black z-40 flex-col items-center justify-center gap-8 text-2xl font-display -translate-y-full">
        {["Services", "Work", "Partners", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="mobile-link"
            onClick={toggleMenu}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
