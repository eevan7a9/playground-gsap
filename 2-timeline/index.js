const tl = gsap.timeline({ default: 1 });
const btnAnimate = document.querySelector("#btnAnimate");
const btnCleanup = document.querySelector("#btnCleanup");

tl.from("#header", { y: -100 });
tl.from(".links", { opacity: 0, stagger: 0.4 });
tl.from(
  "#rightSidebar",
  { x: 600 },
  "=-1"
); /** starts 1 second from the start */
tl.from(".right-sidebar-links", { opacity: 0, stagger: 0.3 }, "<");
tl.fromTo("#footer", { y: 120 }, { y: 0, duration: 3 });
tl.fromTo(".main-content", { scale: 0 }, { scale: 1 }, "<");
tl.fromTo("#btnAnimate", { rotate: 360 }, { rotate: 0 }, "<");
tl.fromTo("#btnCleanup", { rotate: 369 }, { rotate: 0 }, "<");

btnAnimate.addEventListener("click", () => {
  tl.restart();
  console.log("play");
});

btnCleanup.addEventListener("click", () => {
  tl.timeScale(3);
  tl.reverse();
});
