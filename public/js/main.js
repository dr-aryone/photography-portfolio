const menu = document.getElementById('menu');
const nav = document.querySelector('.nav');


menu.addEventListener('click', toggleNav);

function toggleNav() {

  if (nav.hasAttribute('id', 'nav-display')) {
    nav.removeAttribute('id', 'nav-display');
  } else {
    nav.setAttribute('id', 'nav-display');
  }
}

$(document).ready(function () {
$(".image-container-slick").slick({
  dots: true,
  infinite: true,
  speed: 800,
  fade: true,
  cssEase: "linear",
  accessibility: false,
  autoplay: true,
  autoplaySpeed: 7000,
  draggable: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  swipe: true,
  arrows: false,
  touchMove: false,
});

});





































// $(document).ready(function() {

// $('#js-content').load('/sample');

// $('#button1').click((e) => {
//     e.preventDefault();
//     $('#js-content').load('/text');
// });

// $('#button2').click((e) => {
//     e.preventDefault();
//     $('#js-content').load('/text2');
// });

// $('#button3').click((e) => {
//     e.preventDefault();
//     $('#js-content').load('/text3');
// });


// })

// const images = document.querySelectorAll('.myImage');
// const button1 = document.getElementById("button1");
// const button2 = document.getElementById("button2");
// const srcFrance = [
//   "/images/Gallery/1.jpg",
//   "/images/Gallery/2.jpg",
//   "/images/Gallery/3.jpg",
//   "/images/Gallery/4.jpg"];


// const srcEdinburgh = [
//   "/images/resources/images/Edinburgh/DSC_0010.jpg",
//   "/images/resources/images/Edinburgh/DSC_0016-2.jpg",
//   "/images/resources/images/Edinburgh/DSC_0057.jpg"];  

// button1.addEventListener('click', updateImagesFrance);
// button2.addEventListener("click", updateImagesEdinburgh);

// function updateImagesFrance(e) {
//     e.preventDefault();

// for (var i =0; i < images.length; i++) {
//     images[i].src = srcFrance[i];
// }
    

// }

// function updateImagesEdinburgh(e) {
//     e.preventDefault();
//     for (var i = 0; i < images.length; i++) {
//         images[i].src = srcEdinburgh[i];
//     }


// }
