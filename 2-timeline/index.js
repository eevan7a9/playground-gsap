const tl = gsap.timeline({ default: 1 });

tl.from("#header", { y: -100 });
tl.from(".links", { opacity: 0, stagger: 0.4 });
tl.from("#rightSidebar", { x: 600 }, 1); /** starts 1 second from the start */
tl.from(".right-sidebar-links", { opacity: 0, stagger: 0.3 }, "<");
tl.fromTo("#footer", { y: 120 }, { y: 0, duration: 3 });
