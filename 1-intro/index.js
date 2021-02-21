/**
 * select element with ID "header" add animation
 */
gsap.from("#header", {
  duration: 1,
  y: -100,
});
/**
 *  select ements wtih class "links" add delay & animation
 */
gsap.from(".links", {
  delay: 1,
  duration: 1.5,
  opacity: 0,
});
/**
 * select element with id "rightSidebar" add ease animation
 */
gsap.from("#rightSidebar", {
  duration: 1,
  ease: "sine.out",
  x: 600,
});
/**
 * select element with class "right-sidebar-links" add animation & stagger
 */
gsap.from(".right-sidebar-links", {
  delay: 1.2,
  duration: 1,
  opacity: 0,
  stagger: 0.5,
});

gsap.fromTo(
  "#footer",
  {
    y: 120,
  },
  {
    duration: 1,
    y: 0,
  }
);
