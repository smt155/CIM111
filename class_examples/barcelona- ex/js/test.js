var bcnClicked = false;
var imgClicked = "no";
$(document).ready(function() {

  $("#bcn").click(function() {
    if (bcnClicked === false) {
      $("#bcn").css("font-size", "60px");
      bcnClicked = true;
    } else {
      $("#bcn").css("font-size", "20px");
      bcnClicked = false;
    }
  });

  $("#main_pic").click(function() {
    if (imgClicked === "no") {
      $("main_pic").css("width", "800px");
      imgBig = "yes";
    } else {
      $("main_pic").css("width", "400px");
      imgBig = "no";
    }
  })







});