let alreadyScrolled = window.innerHeight;

let objectif = document.querySelector('.revealable');
let objectifDim = objectif.getBoundingClientRect();

window.addEventListener('scroll', function() {
let currentScroll = window.scrollY;
if(currentScroll >= (objectifDim.top)-(objectifDim.height)) {
  objectif.classList.add("revealed");
} else {
  objectif.classList.remove("revealed");
}
});

















// let animated = document.querySelectorAll('.revealable');

// let windowHeight = window.innerHeight;


// function checkReveal() {
//   for (i = 0; i < animated.length; ++i) {
//     let alreadyScrolled = document.documentElement.scrollTop;
//     if(animated[i].offsetTop >= alreadyScrolled+windowHeight) {
//       animated[i].classList.remove('revealable');
//       animated[i].classList.add('revealed');
//     }
//     console.log(animated[i].offsetTop);
//     console.log(alreadyScrolled);
//   }
// }

// checkReveal();

// window.addEventListener('scroll', function() {
//   checkReveal();
// });