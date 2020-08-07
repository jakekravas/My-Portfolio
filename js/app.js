$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      let hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // 800 = number of milliseconds it takes to scroll to specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 30
      }, 800, function(){
        
        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = $(hash).offset().top - 30;
        // window.location.hash = hash;
      });
    }
  });
});

let prevScrollpos = window.pageYOffset;

// Removing box shadow of navbar if scroll position is at or near the top
if (prevScrollpos < 5) {
  document.getElementById("nav").style.boxShadow = "none";
}

window.onscroll = () => {
  // setting value to the current vertical scroll position of page
  let currentScrollPos = window.pageYOffset;

  // If scrolling up, show the navbar
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
    document.getElementById("nav").style.boxShadow = "rgba(2, 12, 27, 0.7) 0px 10px 30px -10px";
  } else {
    // If scrolling down, hide the navbar
    document.getElementById("nav").style.top = "-50px";
    document.getElementById("nav").style.boxShadow = "none";
  }
  prevScrollpos = currentScrollPos;

  // Removing navbar box shadow if vertical scroll position isn't near the top
  if (prevScrollpos < 5) {
    document.getElementById("nav").style.boxShadow = "none";
  }
}