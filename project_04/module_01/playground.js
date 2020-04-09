$(".red h3").text("Abacus Central");
$(".blue h3").text("Grenadine Dreams");
$(".white h3").html("<code>CODE</code> Central");

$("body")
  .css("font-family", "sans-serif")
  .css("background-color", "#777")
  .css("display", "flex");

$(".card")
  .css("border", "3px solid black")
  .css("padding", "12px")
  .css("margin", "3px");

$(".red").css("background-color", "red");
$(".blue").css("background-color", "blue");
$(".white").css("background-color", "white");

$(".red, .blue")
  .css("color", "white")
  .css("flex", "1");

$("*").css("fontsize", "1.7em");
$(".first lead-cards").css("font-family", "cursive");
$("section:nth-of-type(2)")
  .css("transform", "rotate(30deg) scale(.5")
  .css("transition", "transform 3s ease");

$(".deprecated").remove();
