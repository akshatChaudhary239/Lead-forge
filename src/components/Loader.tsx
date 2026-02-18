import { useEffect, useState } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                if (onComplete) onComplete();
            },
        });

        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.random() * 10;
            });
        }, 100);

        // Initial state
        gsap.set(".loader-container", { clipPath: "inset(0 0 0 0)" });

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            const tl = gsap.timeline({
                onComplete: () => {
                    if (onComplete) onComplete();
                }
            });

            tl.to(".loader-bar", {
                scaleX: 0,
                transformOrigin: "right",
                duration: 0.5,
                ease: "power2.inOut",
                delay: 0.2
            })
                .to(".loader-text", {
                    y: -20,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.inOut"
                }, "<")
                .to(".loader-container", {
                    clipPath: "inset(0 0 100% 0)",
                    duration: 1,
                    ease: "power4.inOut",
                });
        }
    }, [progress, onComplete]);

    return (
        <div className="loader-container fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center text-white">
            <div className="loader-text font-mono text-sm mb-4 tracking-widest">
                LOADING {Math.min(100, Math.floor(progress))}%
            </div>
            <div className="w-64 h-[1px] bg-white/20 overflow-hidden relative">
                <div
                    className="loader-bar absolute top-0 left-0 h-full bg-accent w-full"
                    style={{ transform: `scaleX(${progress / 100})`, transformOrigin: "left" }}
                />
            </div>
        </div>
    );
};

export default Loader;
