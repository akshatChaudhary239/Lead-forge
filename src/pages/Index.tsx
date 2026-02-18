import { useState } from "react";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Work from "../components/Work";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import useLenis from "../hooks/useLenis";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis
  useLenis();

  return (
    <>
      <Loader onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <>
          <Cursor />
          <Navbar />

          <main className="w-full relative z-10 bg-bg-primary">
            <Hero />
            <Services />
            <Partners />
            <Work />
            <Contact />
          </main>

          {/* Footer separate from main to allow for potential parallax logic later if needed, though simple stacking works best for now */}
          <Footer />
        </>
      )}
    </>
  );
};

export default Index;
