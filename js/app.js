let prevScrollpos = window.pageYOffset;

if (prevScrollpos < 5) {
  document.getElementById("nav").style.boxShadow = "none";
}

window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
    document.getElementById("nav").style.boxShadow = "rgba(2, 12, 27, 0.7) 0px 10px 30px -10px";
  } else {
    document.getElementById("nav").style.top = "-50px";
    document.getElementById("nav").style.boxShadow = "none";
  }
  prevScrollpos = currentScrollPos;
  if (prevScrollpos < 5) {
    document.getElementById("nav").style.boxShadow = "none";
  }
}