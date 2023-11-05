var tl = gsap.timeline({
    repeat :-1
},);

tl.to(".imagecont" ,{
//   delay :0.5,
  ease: Expo.easeInOut,
  width: "100%",
  duration: 1,
  stagger:2,
}, "a")

tl.to("img" ,{
  ease:Expo.easeOutIn,
  width:"0%",
  delay:2,  
  stagger:2

}, "a")

tl.to(".text h1" ,{

    ease:Expo.easeInOut,
    stagger:2,
    top:"0%"


},"a")
tl.to(".text h1" ,{
   ease:Expo.easeInOut,
   stagger:2,
   delay:2,
   top:"-100px"

},"a")

tl.to(".about p" ,{

  ease:Expo.easeInOut,
  stagger:2,
  left:"0%"


},"a")

tl.to(".about p" ,{
  ease:Expo.easeInOut,
  stagger:2,
  delay:2,
  top:"100%"

},"a")

