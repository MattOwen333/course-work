const cssOptions = {
  width: "360px",
  height: "360px",
  border: "1px solid black"
};

$("#backgroundColor input").on("input", function() {
  cssOptions["backgroundColor"] = $(this).val();
  updatePreview();
});

$("#height input").on("input", function() {
  cssOptions.height = $(this).val() + "px";
  updatePreview();
});

$("#borderRadius input").on("input", function() {
  cssOptions["borderRadius"] = $(this).val() + "%";
  updatePreview();
});

$("#fontFamily input").on("input", function() {
  cssOptions["fontFamily"] = $(this).val();
  updatePreview();
});

$("#lift input").on("input", function() {
  const value = $(this).val();
  cssOptions[boxShadow] =
    value === 0 ? "none" : `0 ${Math.floor(value / 2)}px ${value}px black`;
  updatePreview();
});

function updatePreview() {
  $("#preview").css(cssOptions);
}

updatePreview();
