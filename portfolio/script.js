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