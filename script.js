function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//
// window.onload = () => {
//   let topNavElems = document.querySelectorAll('#myTopnav > a');
//   for (let elem of topNavElems) {
//     let navLine = document.querySelector(".navLine");
//     elem.addEventListener('mouseenter', () => {
//       console.log("asdf");
//       let rect = elem.getBoundingClientRect();
//       navLine.style.width = (rect.left + rect.right)/2 + "px";
//     });
//     elem.addEventListener('mouseleave', () => {
//       navLine.style.width = "0px";
//     });
//   }
// }

$("#listenNav").click(function() {
    $('html, body').animate({
        scrollTop: $(".bgimg-1").offset().top
    }, 2000);
});
