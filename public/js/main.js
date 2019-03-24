
const nav = document.querySelector('.nav');
const edinburgh = document.getElementById('edinburgh');
const france = document.getElementById('france');
const vietnam = document.getElementById("vietnam");
const scotland = document.getElementById("scotland");
const slickImage = document.querySelectorAll('.slideshow-img');
const quote = document.getElementsByClassName('quote');


$(document).ready(function () {
$(".image-container-slick").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  accessibility: true,
  autoplay: true,
  autoplaySpeed: 2000,
  draggable: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  swipe: true,
  arrows: false,
  touchMove: false,
});

});


$(document).ready(function() {

// $('#explore-text').load('/edinburgh-text');

  $('#explore-edinburgh').click((e) => {
    e.preventDefault();
    $("#explore-text").load("/edinburgh-text");
    $("#explore-img").attr('src', "/images/Edinburgh/DSC_0064.jpg");
  });

  $('#explore-france').click((e) => {
    e.preventDefault();
    $("#explore-text").load("/france-text");
    $("#explore-img").attr("src", "/images/France/DSC_0113.jpg");
  });

$('#explore-vietnam').click((e) => {
  e.preventDefault();
  $("#explore-text").load("/vietnam-text");
  $("#explore-img").attr("src", "/images/Vietnam/000005.jpg");
});

  $("#explore-scotland").click(e => {
    e.preventDefault();
    $("#explore-text").load("/scotland-text");
    $("#explore-img").attr("src", "/images/Scotland/DSC_0023.jpg");
  });

  $("#edinburgh").click(e => {
    e.preventDefault();
    $(".hero-right").load("/edinburgh");
    $(".quote").attr('id', 'hidden');
  });

  $("#france").click(e => {
    e.preventDefault();
    $(".hero-right").load("/france");
    $(".quote").attr("id", "hidden");
  });

  $("#vietnam").click(e => {
    e.preventDefault();
    $(".hero-right").load("/vietnam");
    $(".quote").attr("id", "hidden");
  });

  $("#scotland").click(e => {
    e.preventDefault();
    $(".hero-right").load("/scotland");
    $(".quote").attr("id", "hidden");
  });

});



edinburgh.addEventListener("click", displayEdinburghImages);
france.addEventListener('click', displayFranceImages);
vietnam.addEventListener("click", displayVietnamImages);
scotland.addEventListener("click", displayScotlandImages);

function displayFranceImages(e) {
  e.preventDefault();

  const francePics = "/images/France/"
  
  for (var i=0; i<slickImage.length; i++) {
    slickImage[i].src = francePics[i];
    console.log(slickImage[i]);
  }
}

function displayEdinburghImages(e) {
  e.preventDefault();


  const edinburghPics = "/images/Edinburgh/";


  for (var i=0; i<slickImage.length; i++){
    slickImage[i].src = edinburghPics[i];
  }
}

function displayVietnamImages(e) {
  e.preventDefault();

  const vietnamPics = "/images/Vietnam/";

  for (var i = 0; i < slickImage.length; i++) {
    slickImage[i].src = vietnamPics[i];
  }
}

function displayScotlandImages(e) {
  e.preventDefault();

  const scotlandPics = "/images/Scotland/";

  for (var i = 0; i < slickImage.length; i++) {
    slickImage[i].src = scotlandPics[i];
  }
}


const robertAdamsQuote =
  "No place is boring if you've had a good nights sleep and a pocket full of unexposed film - Robert Adams";
const andyWarholQuote = "The best thing about a picture is that it never changes, even when the people in it do - Andy Warhol";
const gillesPeressQuote = "I don’t trust words.I trust pictures - Gilles Peress"
const jeanLucGodardQuote = "Photography is truth - Jean Luc Godard"
const elliottErwittQuote = "The whole point of taking pictures is so that you don’t have to explain things with words - Elliott Erwitt"

window.addEventListener('load', displayQuote);

function displayQuote() {
  let choice = Math.floor(Math.random() * 5) + 1;
  console.log(choice);
// this needs debugged - why is it not working?
  if (choice == 1) {
    quote.textContent = robertAdamsQuote;
  } else if(choice == 2) {
    quote.textContent = andyWarholQuote; 
  } else if (choice == 3) {
    quote.textContent = gillesPeressQuote;
  } else if (choice == 4) {
    quote.textContent = jeanLucGodardQuote;
  } else {
    quote.textContent = elliottErwittQuote;
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
