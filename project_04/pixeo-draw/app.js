const PALETTE = ["red", "blue", "green", "black", "yellow", "pink", "white"];

// for (let index = 0; index < PALETTE.length; index = index + 1) {
//   const nextColor = PALETTE[index];
//   const button = $("<button/>");
//   button.css("background-color", nextColor);
//   button.appendTo(".palette");
// }

function makePalette() {
  for (let index = 0; index < PALETTE.length; index = index + 1) {
    const nextColor = PALETTE[index];
    const button = $("<button/>");
    button.css("background-color", nextColor);
    button.appendTo(".palette");
  }
  $(".palette button")
    .first()
    .addClass("active");
}

makePalette();

function makeGrid() {
  for (let index = 0; index < 64; index++) {
    const cell = $("<div class='cell'/>");
    $(".grid").append(cell);
  }
}

makeGrid();

// function onPaletteClick() {
//   onPaletteClick.click(function() {
//     appendTo($(".palette"));
//   });
// }

function onPaletteClick() {
  $(".palette .active").removeClass("active");
  $(this).addClass("active");
}

$(".palette button").click(onPaletteClick);

function onGridClick() {
  let currentColor = $(".palette .active").css("background-color");

  if ($(this).css("background-color") == currentColor) {
    $(this).css("background-color", "");
  } else {
    $(this).css("background-color", currentColor);
  }
}

$(".grid .cell").click(onGridClick);

$(".controls .clear").click(function() {
  $(".grid .cell").css("background-color", "");
});

$(".controls .fill").click(function() {
  let currentColor = $(".palette .active").css("background-color");
  $(".grid .cell").css("background-color", currentColor);
});

$(".controls .fill-empty").click(function() {
  const elements = $(".grid .cell");

  let currentColor = $(".palette .active").css("background-color");

  for (let index = 0; index < elements.length; index = index + 1) {
    let nextElement = $(elements[index]);
    if (nextElement.css("background-color") == "rgba(0, 0, 0, 0)") {
      nextElement.css("background-color", currentColor);
    }
  }
});
