//selectors
const mainSection2 = document.getElementById("main-section2");

//vars
var scrollPosition;
var x = window.matchMedia("(max-width: 500px)");
console.log(x);
//events
window.addEventListener("scroll", function (e) {
  scrollPosition = window.scrollY;
  if (!x.matches) {
    if (scrollPosition > 0) {
      makeSection2Appear();
    }
    if (scrollPosition > 300) {
      makeSection3Appear();
    }
    if (scrollPosition > 550) {
      makeSection4Appear();
    }
  }
});

//functions
function makeSection2Appear() {
  $("#main-section2").css("left", "0").css("opacity", "1");
}

function makeSection3Appear() {
  $("#main-section3").css("left", "0").css("opacity", "1");
}

function makeSection4Appear() {
  $("#main-section4").css("left", "0").css("opacity", "1");
}

$("#cancel-btn").on("click", function (e) {
  $("#sign-up").css("display", "none");
  $("body").css("overflow", "auto");
});

$("#sign-up_btn").on("click", function (e) {
  $("#sign-up").css("display", "block");
  $("body").css("overflow", "hidden");
});
