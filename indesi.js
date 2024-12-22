
var target = document.querySelector(".nav");
document.querySelector(".men i").addEventListener('click',function (){
  target.classList.toggle("active");
  target.style.transition = "all 0.5s ease-in" ;
})

gsap.to(".nav", {
    height: "4rem", 
    backgroundColor: "#fff", 
    transition: "all 0.5s ease-in" ,
    scrollTrigger: {
      trigger: ".nav", 
      start: "top top",
      end: "bottom top",
      scrub: 1,
      // markers: true
    }
});
gsap.from(".nav h4",{
    opacity : 0,
    duration : 1.2,
    stagger: 0.3,
})
gsap.from(".hero-content",{
    x : -400,
    duration : 2,
}) 
gsap.from(".hero-image",{
    x : -1400,
    duration : 2,
}) 
// script.js
gsap.to(".aboutFirst h3",{
  opacity:1,
  stagger:3,
  scrollTrigger:{
    trigger: ".hero", 
    scroller : "body",
      start: "top 1000",
      end: "top 35",
      scrub: 1,
      // markers: true
  }
})

gsap.to(".aboutSecond h3 span",{
  opacity:1,
  stagger:2,
  // position:"fixed",
  scrollTrigger:{
    trigger: ".hero", 
    scroller : "body",
      start: "top top",
      end: "bottom  ",
      scrub: 2,
  }
})
gsap.to(".about",{
  opacity:1,
  stagger:2,
  // position:"fixed",
  scrollTrigger:{
    trigger: ".about", 
    scroller : "body",
      start: "top top",
      end: "bottom top ",
      scrub: 2,
      pin:true ,
      // markers: true
  }
})

gsap.to(".horizontal-scroll-wrapper", {
  x: () => -(document.querySelector(".horizontal-scroll-wrapper").scrollWidth - window.innerWidth), // Total scroll distance
  ease: "none", // Linear scrolling
  scrollTrigger: {
    trigger: ".horizontal-scroll-wrapper",
    start: "top top", // Start at the top of the viewport
    end: () => "+=" + document.querySelector(".horizontal-scroll-wrapper").scrollWidth, // Total scrollable width
    scrub: true, // Smooth scrubbing
    pin: true, // Pin the container during scroll
  }
});

// tst 
gsap.from(".education", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.5,  // Stagger the animation between sections
  scrollTrigger: {
    trigger: ".education",
    start: "top center",  // Trigger when the top of the section reaches the center of the screen
    end: "bottom center", // End when the bottom of the section reaches the center
    scrub: 2,          // Smooth scrolling effect
    markers: false        // Disable markers (set to true for debugging)
  }
});
gsap.from(".achievements", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,  // Stagger the animation between sections
  scrollTrigger: {
    trigger: ".achievements",
    start: "top center",  // Trigger when the top of the section reaches the center of the screen
    end: "bottom center", // End when the bottom of the section reaches the center
    scrub: 2,          // Smooth scrolling effect
    markers: false        // Disable markers (set to true for debugging)
  }
});
gsap.from(".certifications", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,  // Stagger the animation between sections
  scrollTrigger: {
    trigger: ".certifications",
    start: "top center",  // Trigger when the top of the section reaches the center of the screen
    end: "bottom center", // End when the bottom of the section reaches the center
    scrub: 2,          // Smooth scrolling effect
    markers: false        // Disable markers (set to true for debugging)
  }
});

// Animate images inside flex-container
gsap.from(".one img", {
  opacity: 3,
  x: 300,
  // duration: 1,
  stagger: 1,  // Stagger images' animation
  scrollTrigger: {
    trigger: ".one img",
    start: "top center",  // Trigger when the image reaches the center of the screen
    end: "bottom center", // End when the image leaves the center
    scrub: 1,
    markers: false
  }
});

// Animate text content inside flex-container
gsap.from(".one .info", {
  opacity: 1,
  x: -300,
  delay:2,
  stagger: 0.5,  // Stagger text content's animation
  scrollTrigger: {
    trigger: ".one .info",
    start: "top bottom",  // Trigger when the text reaches the center of the screen
    end: "bottom bottom",// End when the text leaves the center
    scrub: true,
    markers: false
  }
});

// 
gsap.from(".two img", {
  opacity: 1,
  x: -1000,
  // duration: 1,
  stagger: 1,  // Stagger images' animation
  scrollTrigger: {
    trigger: ".two img",
    start: "top center",  // Trigger when the image reaches the center of the screen
    end: "bottom center", // End when the image leaves the center
    scrub: 1,
    markers: false
  }
});

// Animate text content inside flex-container
gsap.from(".two .info", {
  opacity: 1,
  x: 300,
  duration: 1,
  stagger: 0.3,  // Stagger text content's animation
  scrollTrigger: {
    trigger: ".two .info",
    start: "top bottom",  // Trigger when the text reaches the center of the screen
    end: "bottom bottom", // End when the text leaves the center
    scrub: true,
    markers: false
  }
});
// 
gsap.from(".three img", {
  opacity: 0,
  x: 500,
  // duration: 1,
  stagger: 1,  // Stagger images' animation
  scrollTrigger: {
    trigger: ".three img",
    start: "top center",  // Trigger when the image reaches the center of the screen
    end: "bottom center", // End when the image leaves the center
    scrub: 1,
    markers: false
  }
});
// 
gsap.from(".four img", {
  opacity: 0,
  x: 1000,
  // duration: 1,
  stagger: 1,  // Stagger images' animation
  scrollTrigger: {
    trigger: ".four img",
    start: "top center",  // Trigger when the image reaches the center of the screen
    end: "bottom center", // End when the image leaves the center
    scrub: 1,
    markers: false
  }
});

// Animate text content inside flex-container
gsap.from(".four .info", {
  opacity: 0,
  x: 300,
  duration: 1,
  stagger: 0.3,  // Stagger text content's animation
  scrollTrigger: {
    trigger: ".four .info",
    start: "top bottom",  // Trigger when the text reaches the center of the screen
    end: "bottom bottom", // End when the text leaves the center
    scrub: true,
    markers: false
  }
});
// 
gsap.from(".five img", {
  opacity: 0,
  x: -1000,
  // duration: 1,
  stagger: 1,  // Stagger images' animation
  scrollTrigger: {
    trigger: ".five img",
    start: "top center",  // Trigger when the image reaches the center of the screen
    end: "bottom center", // End when the image leaves the center
    scrub: 1,
    markers: false
  }
});

// Animate text content inside flex-container
gsap.from(".five .info", {
  opacity: 0,
  x: 300,
  duration: 1,
  stagger: 0.3,  // Stagger text content's animation
  scrollTrigger: {
    trigger: ".five .info",
    start: "top bottom",  // Trigger when the text reaches the center of the screen
    end: "bottom bottom", // End when the text leaves the center
    scrub: true,
    markers: false
  }
});
// 
gsap.from(".six img", {
  opacity: 0,
  x: -1000,
  // duration: 1,
  stagger: 1,  // Stagger images' animation
  scrollTrigger: {
    trigger: ".six img",
    start: "top center",  // Trigger when the image reaches the center of the screen
    end: "bottom center", // End when the image leaves the center
    scrub: 1,
    markers: false
  }
});

// Animate text content inside flex-container
gsap.from(".six .info", {
  opacity: 0,
  x: 300,
  duration: 1,
  stagger: 0.3,  // Stagger text content's animation
  scrollTrigger: {
    trigger: ".six .info",
    start: "top bottom",  // Trigger when the text reaches the center of the screen
    end: "bottom bottom", // End when the text leaves the center
    scrub: true,
    markers: false
  }
});
// 
gsap.from(".seven img", {
  opacity: 0,
  x: -1000,
  // duration: 1,
  stagger: 1,  // Stagger images' animation
  scrollTrigger: {
    trigger: ".seven img",
    start: "top center",  // Trigger when the image reaches the center of the screen
    end: "bottom center", // End when the image leaves the center
    scrub: 1,
    markers: false
  }
});

// Animate text content inside flex-container
gsap.from(".seven .info", {
  opacity: 0,
  x: 300,
  duration: 1,
  stagger: 0.3,  // Stagger text content's animation
  scrollTrigger: {
    trigger: ".seven .info",
    start: "top bottom",  // Trigger when the text reaches the center of the screen
    end: "bottom bottom", // End when the text leaves the center
    scrub: true,
    markers: false
  }
});
// 
gsap.from(".eight img", {
  opacity: 0,
  x: -1000,
  // duration: 1,
  stagger: 1,  // Stagger images' animation
  scrollTrigger: {
    trigger: ".eight img",
    start: "top center",  // Trigger when the image reaches the center of the screen
    end: "bottom center", // End when the image leaves the center
    scrub: 1,
    markers: false
  }
});

// Animate text content inside flex-container
gsap.from(".eight .info", {
  opacity: 0,
  x: 300,
  duration: 1,
  stagger: 0.3,  // Stagger text content's animation
  scrollTrigger: {
    trigger: ".eight .info",
    start: "top bottom",  // Trigger when the text reaches the center of the screen
    end: "bottom bottom", // End when the text leaves the center
    scrub: true,
    markers: false
  }
});
// 
gsap.from(".nine img", {
  opacity: 0,
  x: -1000,
  // duration: 1,
  stagger: 1,  // Stagger images' animation
  scrollTrigger: {
    trigger: ".nine img",
    start: "top bottom",  // Trigger when the image reaches the center of the screen
    end: "bottom bottom", // End when the image leaves the center
    scrub: 1,
    markers: false
  }
});

// Animate text content inside flex-container
gsap.from(".nine .info", {
  opacity: 0,
  x: 300,
  duration: 1,
  stagger: 0.3,  // Stagger text content's animation
  scrollTrigger: {
    trigger: ".nine .info",
    start: "top bottom",  // Trigger when the text reaches the center of the screen
    end: "bottom bottom", // End when the text leaves the center
    scrub: true,
    markers: false
  }
});
// Animate text content inside flex-container
gsap.from(".three .info", {
  opacity: 0,
  x: -300,
  duration: 1,
  stagger: 0.3,  // Stagger text content's animation
  scrollTrigger: {
    trigger: ".three .info",
    start: "top bottom",  // Trigger when the text reaches the center of the screen
    end: "bottom bottom", // End when the text leaves the center
    scrub: true,
    markers: false
  }
});

// projects section
gsap.from(".pappa h1",{
  scale:0.1,
  scrollTrigger: {
  trigger: ".pappa h1",
    start: "top bottom",  // Trigger when the text reaches the center of the screen
    end: "top center", // End when the text leaves the center
    scrub:0.3,
    markers: false
}
});
gsap.from(".c1",{
  x:-900,
  scrollTrigger: {
  trigger: ".pappa h1",
    start: "top bottom",  // Trigger when the text reaches the center of the screen
    end: "top center", // End when the text leaves the center
    scrub:0.3,
    markers: false
}
});
gsap.from(".c2",{
  opacity:0,
  y:-400,
  scrollTrigger: {
  trigger: ".pappa h1",
    start: "top bottom",  // Trigger when the text reaches the center of the screen
    end: "top center", // End when the text leaves the center
    scrub:0.3,
    markers: false
}
});
gsap.from(".c3",{
  x:900,
  scrollTrigger: {
  trigger: ".pappa h1",
    start: "top bottom",  // Trigger when the text reaches the center of the screen
    end: "top center", // End when the text leaves the center
    scrub:0.3,
    markers: false
}
});
// scroll effect
gsap.registerPlugin(ScrollToPlugin);

document.querySelector('#aboutme').addEventListener('click', () => {
  gsap.to(window, {
    duration: 1.5,
    scrollTo: '.about',
    ease: 'power2.inOut',
  });
});
document.querySelector('#home').addEventListener('click', () => {
  gsap.to(window, {
    duration: 1.5,
    scrollTo: '.hero',
    ease: 'power2.inOut',
  });
});
document.querySelector('#skill').addEventListener('click', () => {
  gsap.to(window, {
    duration: 1.5,
    scrollTo: '.horizontal-scroll-wrapper',
    ease: 'power2.inOut',
  });
});
document.querySelector('#edu').addEventListener('click', () => {
  gsap.to(window, {
    duration: 1.5,
    scrollTo: '.container',
    ease: 'power2.inOut',
  });
});
document.querySelector('#proj').addEventListener('click', () => {
  gsap.to(window, {
    duration: 1.5,
    scrollTo: '.cont',
    ease: 'power2.inOut',
  });
});
smoother.paused(true);

// getter
if (!smoother.paused()) {
  const smoother = ScrollSmoother.create({
    wrapper: ".about",
    content: ".box",
    smooth: 80,
    normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
    ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
    effects: true,
    preventDefault: true
  });
}

// jj

// gsap.to(".horizontal-scroll-wrapper", {
//   x: () => -(document.querySelector(".horizontal-scroll-wrapper").scrollWidth - window.innerWidth), // Total scroll distance
//   ease: "none", // Linear scrolling
//   scrollTrigger: {
//     trigger: ".horizontal-scroll-wrapper",
//     start: "top top", // Start at the top of the viewport
//     end: () => "+=" + document.querySelector(".horizontal-scroll-wrapper").scrollWidth, // Scroll for the total width
//     scrub: true, // Smooth scrubbing
//     pin: true, // Pin the container
//   }
// });
