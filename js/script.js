const itemsHeight = document.querySelector(".ani-wrap").clientHeight

let items = gsap.utils.toArray(".cardss");

gsap.to(".ani-wrap", {
    y: -itemsHeight + 500,
    ease: "none",
    scrollTrigger: {
      trigger: ".section-3",
      start: "top top",
      end: itemsHeight - 500,
      scrub: 1,
      pin: true,
      pinSpacing: false,
    }
  });

  items.forEach((section) => {
    gsap.from(section, {
        scrollTrigger: {
            //markers: true,
            start: 'top 100%',
            end: 'bottom 100%',
            trigger: section,
            toggleClass: 'active'
        }
    });
});

let sections = gsap.utils.toArray(".our-team-heading");
    
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".section-5",
    // pin: ".main",
    pinSpacing: true,
    scrub: 1,
    end: "+=3000",
  }
});