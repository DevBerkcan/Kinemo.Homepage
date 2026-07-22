"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { useReducedMotion } from "@/hooks/useReducedMotion"

export default function MotionProvider() {
  const pathname = usePathname()
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion || window.matchMedia("(pointer: coarse)").matches) {
      return
    }

    let cancelled = false
    let cleanup: (() => void) | undefined

    async function initializeSmoothScroll() {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ])

      if (cancelled) return

      gsap.registerPlugin(ScrollTrigger)

      const lenis = new Lenis({
        duration: 1.05,
        smoothWheel: true,
        syncTouch: false,
        anchors: { offset: -88 },
        autoRaf: false,
      })
      const updateScrollTrigger = () => ScrollTrigger.update()
      const tick = (time: number) => lenis.raf(time * 1000)
      const handleScrollLock = (event: Event) => {
        const locked = (event as CustomEvent<{ locked: boolean }>).detail.locked
        if (locked) lenis.stop()
        else lenis.start()
      }

      lenis.on("scroll", updateScrollTrigger)
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)
      window.addEventListener("kinemo:scroll-lock", handleScrollLock)

      cleanup = () => {
        window.removeEventListener("kinemo:scroll-lock", handleScrollLock)
        lenis.off("scroll", updateScrollTrigger)
        gsap.ticker.remove(tick)
        lenis.destroy()
      }
    }

    void initializeSmoothScroll()

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [reducedMotion])

  useEffect(() => {
    if (reducedMotion) return

    let cancelled = false
    let cleanup: (() => void) | undefined

    async function initializeAnimations() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ])

      if (cancelled) return

      gsap.registerPlugin(ScrollTrigger)
      const media = gsap.matchMedia()

      media.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          desktop: "(min-width: 768px)",
        },
        (context) => {
          const { motion, desktop } = context.conditions as {
            motion: boolean
            desktop: boolean
          }

          if (!motion) return

          const heroItems = gsap.utils.toArray<HTMLElement>("[data-hero-reveal]")
          if (heroItems.length) {
            gsap.fromTo(
              heroItems,
              { autoAlpha: 0, y: 28 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.85,
                stagger: 0.08,
                ease: "power3.out",
                clearProps: "opacity,visibility,transform",
              },
            )
          }

          gsap.utils.toArray<HTMLElement>("[data-motion='reveal']").forEach((element) => {
            gsap.fromTo(
              element,
              { autoAlpha: 0, y: 36 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.85,
                ease: "power3.out",
                clearProps: "opacity,visibility,transform",
                scrollTrigger: {
                  trigger: element,
                  start: "top 86%",
                  once: true,
                },
              },
            )
          })

          gsap.utils.toArray<HTMLElement>("[data-motion='stagger']").forEach((container) => {
            const children = Array.from(container.children)
            if (!children.length) return

            gsap.fromTo(
              children,
              { autoAlpha: 0, y: 28 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.09,
                ease: "power3.out",
                clearProps: "opacity,visibility,transform",
                scrollTrigger: {
                  trigger: container,
                  start: "top 84%",
                  once: true,
                },
              },
            )
          })

          gsap.utils.toArray<HTMLElement>("[data-problem-card]").forEach((card) => {
            gsap.fromTo(
              card,
              { autoAlpha: 0.45, x: desktop ? 40 : 0, y: desktop ? 0 : 20 },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                duration: 0.65,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 72%",
                  end: "bottom 45%",
                  toggleActions: "play none none reverse",
                },
              },
            )
          })

          if (desktop) {
            const heroVisual = document.querySelector<HTMLElement>("[data-hero-visual]")
            if (heroVisual) {
              gsap.to(heroVisual, {
                yPercent: 7,
                scale: 0.96,
                ease: "none",
                scrollTrigger: {
                  trigger: "[data-motion-hero]",
                  start: "top top",
                  end: "bottom top",
                  scrub: 0.6,
                },
              })
            }
          }
        },
      )

      const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh())
      cleanup = () => {
        window.cancelAnimationFrame(refreshFrame)
        media.revert()
      }
    }

    void initializeAnimations()

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [pathname, reducedMotion])

  return null
}
