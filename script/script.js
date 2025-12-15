gsap.registerPlugin(ScrollTrigger);

function fadeInOn(selector, options = {}) {
  const elements = gsap.utils.toArray(selector);

  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: options.y ?? 0,
      x: options.x ?? 0,
    },
    {
      y: 0,
      x: 0,
      opacity: options.opacity ?? 1,
      duration: options.duration ?? 0.8,
      delay: options.delay ?? 0,
      ease: options.ease ?? "power2.out",
      stagger: options.stagger ?? 0,
      clearProps: "transform",
    }
  );
}

function fadeInNextSection(selector, options = {}) {
  const elements = gsap.utils.toArray(selector);

  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: options.y ?? 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: options.duration ?? 0.8,
      ease: options.ease ?? "power2.out",
      stagger: options.stagger ?? 0.15,
      scrollTrigger: {
        trigger: options.trigger ?? elements[0],
        start: options.start ?? "top 80%",
        toggleActions: "play none none none", 
        once: true,                           
      },
    }
  );
}

fadeInOn(".logo", { y: -20, delay: 0.2 });
fadeInOn(".link", { opacity: 0.7, delay: 0.3, stagger: 0.15 });
fadeInOn(".header-btn", { y: -20, delay: 0.4 });

fadeInOn(".hero-text", { opacity: 0.8, delay: 0.6 });
fadeInOn(".hero-title", { x: -20, delay: 0.2 });
fadeInOn(".text", { opacity: 0.6, y: -20, delay: 0.8 });
fadeInOn(".hero-btn", { delay: 0.5 });


fadeInNextSection(".hero-box", {
  y: -20,
  start: "top 65%",
});

fadeInNextSection(".section-info", { y: 30 });

fadeInNextSection(".section-content .card", {
  y: 30,
  stagger: 0.2,
});

fadeInOn(".section-content .content-title", { y: 20, duration: 0.5 });
fadeInOn(".section-content .content-text", {
  y: 20,
  opacity: 0.6,
  delay: 0.1,
});

gsap.utils
  .toArray(".section-gallery .block-info, .section-gallery .block")
  .forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });

fadeInNextSection(".testimonials-title h2, .testimonials-title .btn", {
  y: 20,
});

gsap.matchMedia().add("(min-width: 1025px)", () => {

  fadeInNextSection(".testimonials-card", {
    y: 30,
    stagger: 0.2,
    start: "top 80%",
  });

  fadeInNextSection(
    ".footer, .footer-block, .footer-home, .footer-subscribe",
    {
      y: 20,
      stagger: 0.15,
      start: "top 70%",
    }
  );

});

gsap.matchMedia().add("(max-width: 1024px)", () => {

  gsap.fromTo(
    ".testimonials-card",
    { opacity: 1, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      clearProps: "all",
    }
  );

  gsap.fromTo(
    ".footer, .footer *",
    { opacity: 1, y: 15 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      clearProps: "all",
    }
  );

});
