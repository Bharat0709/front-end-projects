// IN THIS WE'LL LEARN BASIC JAVA SCRIPT FEARTIRES THAT'LL BE REQUIRED IN ALL THE WEBSITES

// PAGE NAVIGATION
// NOT THE BEST WAY

// let navitems = document.querySelectorAll(".nav-item");
// console.log(navitems);
// navitems.forEach(function(el){
//   el.addEventListener("click" , function(e){
//     e.preventDefault();
//     const id = this.getAttribute(`href`);
//     document.querySelector(`${id}`).scrollIntoView({behavior:"smooth"});
//   })
// })

// BETTER WAY
document.querySelector(".nav-items").addEventListener("click", function (el) {
  console.log(el.target);
  if (el.target.classList.contains("nav-item")) {
    el.preventDefault();
    const id = el.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
// const section1 = document.querySelector(".hero-section");
// STICKY NAVIGATION
// const obsCallback = function(entries , observer){
// entries.forEach(entry => {
//   console.log(entry);
// });
// };
// const obsOption = {
//   root: null ,
//   threshold:0.1
// }

//  const observer = new IntersectionObserver(obsCallback, obsOption)
//  observer.observe(section1);
// console.log(navBar);
// const header = document.querySelector("header");
// const stickyNav = function(entries){
//   const[entry] = entries;
//   if(!entry.isIntersecting){
//   header.classList.add("sticky");
//   }else{
//   header.classList.remove("sticky");
//   }
// };
// const headerObsever =  new IntersectionObserver(stickyNav , {
//   root: null,
//   threshold: 0,
//   rootMargin:"-90px"
// });
// headerObsever.observe(header);

// LAZY LOADING
const screen1 = document.querySelector("#screen-1");
const screen2 = document.querySelector("#screen-2");
const screen3 = document.querySelector("#screen-3");

const imgTargets = document.querySelectorAll(".app-screen-1");
console.log(imgTargets);

const loading = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if(entry.isIntersecting){
  return;
  screen1.style.filter = "blur(20px)";
  screen2.style.filter = "blur(20px)";
  screen3.style.filter = "blur(20px)";
  console.log(screen);
  }
else{
  screen1.style.filter = "blur(0px)";
  screen2.style.filter = "blur(0px)";
  screen3.style.filter = "blur(0px)";
}
};
const imgObserver = new IntersectionObserver(loading, {});
imgTargets.forEach((img) => imgObserver.observe(img));
