const itemsHeight = document.querySelector(".ani-wrap").clientHeight

let items = gsap.utils.toArray(".cardss");

gsap.to(".ani-wrap", {
    y: -itemsHeight + 700,
    // x: innerWidth,
    ease: "none",
    scrollTrigger: {
      trigger: ".section-3",
      start: "-100px top",
      end: itemsHeight - 700,
      scrub: 1,
      pin: true,
      pinSpacing: false,
      //markers: true,
      // snap: {
      //     snapTo: 1 / (items.length - 1),
      //     duration: 0.2,
      //     delay : 0,
      // }
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