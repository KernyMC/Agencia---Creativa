import { gsap, ScrollTrigger } from "./gsapSetup.js";
import { motion } from "../motion/tokens.js";

export function initScrollReveal() {
  // Section headers slide in
  gsap.utils.toArray(".section-header").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      duration: motion.duration.slow,
      ease: motion.ease.dramatic,
    });
  });

  // Fade up generic — excluye el portfolio section completo para evitar conflicto con cards internas
  gsap.utils.toArray(".fade-up:not(.portfolio)").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
      },
      y: 40,
      opacity: 0,
      duration: motion.duration.normal,
      ease: motion.ease.smooth,
    });
  });

  // Stagger cards — excluye team-card porque tiene su propia batch animation
  gsap.utils.toArray(".cards-stagger").forEach((container) => {
    const cards = container.querySelectorAll(".card-item:not(.team-card)");
    if (!cards.length) return;
    gsap.from(cards, {
      scrollTrigger: {
        trigger: container,
        start: "top 82%",
      },
      y: 50,
      opacity: 0,
      duration: motion.duration.normal,
      ease: motion.ease.smooth,
      stagger: motion.stagger.normal,
    });
  });

  // Badge counter del Problem (Instagram-style)
  const badgeNum = document.querySelector('.problem__badge-num');
  if (badgeNum) {
    const target = parseInt(badgeNum.dataset.value, 10);
    ScrollTrigger.create({
      trigger: badgeNum,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: target,
          duration: 1.4,
          ease: 'power2.out',
          onUpdate: function () {
            badgeNum.textContent = Math.round(this.targets()[0].val);
          },
        });
      },
    });
  }

  // Stats counter animation
  gsap.utils.toArray(".stat-number").forEach((el) => {
    const target = parseFloat(el.dataset.value);
    const suffix = el.dataset.suffix || "";
    const prefix = el.dataset.prefix || "";
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: target,
          duration: motion.duration.slow,
          ease: motion.ease.smooth,
          onUpdate: function () {
            el.textContent = prefix + Math.round(this.targets()[0].val) + suffix;
          },
        });
      },
    });
  });

  // Image parallax
  gsap.utils.toArray(".parallax-img").forEach((img) => {
    gsap.to(img, {
      scrollTrigger: {
        trigger: img.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: -60,
      ease: "none",
    });
  });

  // Team circles pop in — animación exclusiva, sin conflicto con cards-stagger
  ScrollTrigger.batch(".team-card", {
    start: "top 85%",
    onEnter: (elements) => {
      gsap.fromTo(elements,
        { scale: 0.8, opacity: 0, y: 20 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: motion.duration.normal,
          ease: motion.ease.bounce,
          stagger: motion.stagger.loose,
        }
      );
    },
    once: true,
  });

  // Services grid
  ScrollTrigger.batch(".service-card", {
    start: "top 88%",
    onEnter: (elements) => {
      gsap.fromTo(elements,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: motion.duration.normal,
          ease: motion.ease.smooth,
          stagger: 0.07,
        }
      );
    },
    once: true,
  });

  // Brand logos — pop in sin conflicto de escala
  ScrollTrigger.batch(".brand-logo", {
    start: "top 90%",
    onEnter: (elements) => {
      gsap.fromTo(elements,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: motion.duration.normal,
          ease: motion.ease.bounce,
          stagger: 0.06,
        }
      );
    },
    once: true,
  });

  // CTA section
  gsap.from(".footer-cta__content", {
    scrollTrigger: {
      trigger: ".footer-cta",
      start: "top 80%",
    },
    y: 60,
    opacity: 0,
    duration: motion.duration.slow,
    ease: motion.ease.dramatic,
  });

  // Refresh para garantizar posiciones correctas después de montar todo
  ScrollTrigger.refresh();
}
