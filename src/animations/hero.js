import { gsap, ScrollTrigger } from "./gsapSetup.js";
import { motion } from "../motion/tokens.js";

export function initHero() {
  const tl = gsap.timeline({ delay: 0.2 });

  tl.from(".hero__logo", {
    y: -30,
    opacity: 0,
    duration: motion.duration.normal,
    ease: motion.ease.smooth,
  })
    .from(
      ".hero__headline",
      {
        y: 60,
        opacity: 0,
        duration: motion.duration.slow,
        ease: motion.ease.dramatic,
      },
      "-=0.3"
    )
    .from(
      ".hero__subtitle",
      {
        y: 30,
        opacity: 0,
        duration: motion.duration.normal,
        ease: motion.ease.smooth,
      },
      "-=0.5"
    )
    .from(
      ".hero__cta",
      {
        scale: 0.85,
        opacity: 0,
        duration: motion.duration.normal,
        ease: motion.ease.bounce,
      },
      "-=0.3"
    )
    .from(
      ".hero__image",
      {
        x: 80,
        opacity: 0,
        duration: motion.duration.slow,
        ease: motion.ease.smooth,
      },
      "-=0.9"
    );

}
