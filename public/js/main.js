
const nav = document.querySelector('.nav');
const edinburgh = document.getElementById('edinburgh');
const france = document.getElementById('france');
const vietnam = document.getElementById("vietnam");
const scotland = document.getElementById("scotland");
const slickImage = document.querySelectorAll('.slideshow-img');



$(document).ready(function () {
$(".image-container-slick").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  accessibility: false,
  autoplay: true,
  autoplaySpeed: 2000,
  draggable: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  swipe: true,
  arrows: true,
  touchMove: false,
});

});









edinburgh.addEventListener("click", displayEdinburghImages);
france.addEventListener('click', displayFranceImages);
vietnam.addEventListener("click", displayVietnamImages);
scotland.addEventListener("click", displayScotlandImages);

function displayFranceImages(e) {
  e.preventDefault();

  const francePics = [
    "/images/France/DSCF2130.jpg",
    "/images/France/DSCF2139.jpg",
    "/images/France/DSC_0113.jpg",
    "/images/France/DSC_0147.jpg",
    "/images/France/DSC_0321.jpg",
    "/images/France/DSC_0372.jpg",
    "/images/France/DSC_0404.jpg"
  ]
  
  for (var i=0; i<slickImage.length; i++) {
    slickImage[i].src = francePics[i];
    console.log(slickImage[i]);
  }
}

function displayEdinburghImages(e) {
  e.preventDefault();


  const edinburghPics = [
    "/images/Edinburgh/DSCF1240.jpg",
    "/images/Edinburgh/DSC_0010.jpg",
    "/images/Edinburgh/DSC_0016-2.jpg",
    "/images/Edinburgh/DSC_0057.jpg",
    "/images/Edinburgh/DSC_0064.jpg",
    "/images/Edinburgh/DSC_0078.jpg",
    "/images/Edinburgh/DSC_0081.jpg",

  ];

  for (var i=0; i<slickImage.length; i++){
    slickImage[i].src = edinburghPics[i];
  }
}

function displayVietnamImages(e) {
  e.preventDefault();

  const vietnamPics = [
    "/images/Vietnam/000003.jpg",
    "/images/Vietnam/000004.jpg",
    "/images/Vietnam/000005.jpg",
    "/images/Vietnam/000025.jpg",
    "/images/Vietnam/000007.jpg",
    "/images/Vietnam/000018-2.jpg",
    "/images/Vietnam/000023.jpg"
  ];

  for (var i = 0; i < slickImage.length; i++) {
    slickImage[i].src = vietnamPics[i];
  }
}

function displayScotlandImages(e) {
  e.preventDefault();

  const scotlandPics = [
    "/images/Scotland/DSC_0005.jpg",
    "/images/Scotland/DSC_0023.jpg",
    "/images/Scotland/DSC_0061.jpg",
    "/images/Scotland/DSC_0062.jpg",
    "/images/Scotland/DSC_0071.jpg",
    "/images/Scotland/DSC_0087.jpg",
    "/images/Scotland/DSC_0199.jpg"
  ];

  for (var i = 0; i < slickImage.length; i++) {
    slickImage[i].src = scotlandPics[i];
  }
}






































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
