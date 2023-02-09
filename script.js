function submenu(){
document.querySelector('.sub-menu').style.display ="block";
setTimeout(function() {
  document.querySelector('.sub-menu').style.transform = "scale(1)";
}, 50)
document.querySelector('.menu').style.display = "none";

document.querySelector('.close-menu').style.display = "block";
}
function close_menu(){
    document.querySelector('.sub-menu').style.display ="none";
    document.querySelector('.menu').style.display = "block";
    setTimeout(function() {
      document.querySelector('.sub-menu').style.transition = " transition: 1s linear;";
      document.querySelector('.sub-menu').style.transform = "scale(0.5)";
    }, 50)
    document.querySelector('.close-menu').style.display = "none";
    }
    
   
var tt = 0;
function showslide() {
  var i;
  var x = document.getElementsByClassName("item");
  for (i = 0; i < x.length; i++) {
   
     x[i].style.display = "none";
  }
  tt++;
  if (tt > x.length) {tt = 1}

    
  x[tt-1].style.display = "block";
  setTimeout(showslide, 2500);
}
showslide();






var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}