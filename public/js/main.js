
const nav = document.querySelector('.nav');
const edinburgh = document.getElementById('edinburgh');
const france = document.getElementById('france');
const vietnam = document.getElementById("vietnam");
const scotland = document.getElementById("scotland");
const slickImage = document.querySelectorAll('.slideshow-img');
const quote = document.querySelector('.quote');
const collections = document.getElementById('collections');
const collectionsContainer = document.querySelector('.collections-container');
const burgerMenu = document.getElementById('burger-menu');
const mobileMenuContent = document.querySelector('.mobile-menu-content');



$(document).ready(function() {

  $(".first-of-the-roll").click(e => {
    e.preventDefault();
    $(".home-hero").load("/first_of_the_roll");
    $(".quote").attr('id', 'hidden');
    mobileMenuContent.style.height = 0;
  });

  $(".carbine").click(e => {
    e.preventDefault();
    $(".home-hero").load("/carbine");
    $(".quote").attr("id", "hidden");
    mobileMenuContent.style.height = 0;
  });

  $(".vietnam").click(e => {
    e.preventDefault();
    $(".home-hero").load("/vietnam");
    $(".quote").attr("id", "hidden");
    mobileMenuContent.style.height = 0;
  });

  $(".black-and-white").click(e => {
    e.preventDefault();
    $(".home-hero").load("/black_and_white");
    $(".quote").attr("id", "hidden");
    mobileMenuContent.style.height = 0;
  });

  $(".about").click(e => {
    e.preventDefault();
    $(".home-hero").load("/about");
    $(".quote").attr("id", "hidden");
    mobileMenuContent.style.height = 0;
  });

});


//Quotes to display on the homepage 
const robertAdamsQuote =
  "No place is boring if you've had a good nights sleep and a pocket full of unexposed film - Robert Adams";
const andyWarholQuote = "The best thing about a picture is that it never changes, even when the people in it do - Andy Warhol";
const gillesPeressQuote = "I don’t trust words. I trust pictures - Gilles Peress"
const jeanLucGodardQuote = "Photography is truth - Jean Luc Godard"
const elliottErwittQuote = "The whole point of taking pictures is so that you don’t have to explain things with words - Elliott Erwitt"
const jimRichardsonQuote = "If you want to be a better photographer, stand in front of more interesting stuff - Jim Richardson"
const ellenVonUnwerthQuote = "I like to photograph anyone before they know what their best angles are - Ellen Von Unwerth"

// Function to load a random quote
window.addEventListener('load', displayQuote);

function displayQuote() {
  let choice = Math.floor(Math.random() * 6) + 1;

  switch(choice) {
    case 1: 
      quote.textContent = robertAdamsQuote;
      break;
    case 2:
      quote.textContent = andyWarholQuote;
      break;
    case 3:
      quote.textContent = gillesPeressQuote;
      break;
    case 4:
      quote.textContent = jeanLucGodardQuote;
      break;
    case 5:
      quote.textContent = elliottErwittQuote;
      break;
    case 6:
      quote.textContent = jimRichardsonQuote;
      break;
    case 7:
      quote.textContent = ellenVonUnwerthQuote;
      break;
    default:
      quote.textContent = ellenVonUnwerthQuote;

  } 
    


}


// Display collections menu
collections.addEventListener('click', showCollections);

function showCollections() {

  if (collectionsContainer.style.height == '5rem') {
    collectionsContainer.style.height = 0;
  } else {
    collectionsContainer.style.height = '5rem';
  }
};


burgerMenu.addEventListener('click', displayMobileMenu);

function displayMobileMenu() {
  if (mobileMenuContent.style.height == '10rem') {
    mobileMenuContent.style.height = 0;
  } else {
    mobileMenuContent.style.height = '10rem';
  }
}



