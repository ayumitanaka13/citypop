// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".panel");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".containerbox",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: () => "+=" + document.querySelector(".containerbox").offsetWidth
//   }
// });

let tl = gsap.timeline({delay: 1});
    
tl.from("#title", {
    x: -400,
    opacity: 0,
    ease: "power4",
    duration: 3,
},0.5)
.from("#picture", {
    x: 400,
    opacity: 0,
    ease: "power4",
    duration: 3,
},0.5);

// CSSPlugin.defaultTransformPerspective = 400; 

// gsap.to("#picture", {duration: 3,  x: 0, y: 0, scale: 1.1, skewX: 25, rotation: 5});
// gsap.to(".orange", {duration: 3, rotationY: 360});
// gsap.to(".grey", {duration: 3, x: 100, y: 100, scale: 2, skewX: 45, rotation: 180});
