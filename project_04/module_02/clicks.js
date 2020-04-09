$(".one").click(function() {
  $("#oneOtherText").text("Good Job");
});

$("#twoClicked").click(function() {
  $(".two").slideUp();
});

$(".three:nth-child(1)").click(function() {
  $(".three").append("<div>Here is New Text</div>");
});

let four = $("four");

function clickFour() {
  four.click(function() {
    $(".template-target").html($("#template"));
  });
}

$(".four:nth-child(1)").click(function() {
  $("template-target").html($("#template"));
});
