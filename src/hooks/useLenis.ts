import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useLenis() {
    const lenisRef = useRef()

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        })

        lenisRef.current = lenis

        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)

        function onResize() {
            ScrollTrigger.refresh()
        }

        window.addEventListener('resize', onResize)

        return () => {
            lenis.destroy()
            window.removeEventListener('resize', onResize)
            gsap.ticker.remove(lenis.raf)
        }
    }, [])

    return lenisRef.current
}
