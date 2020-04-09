function setActive(id) {
  $(".content .active, .left-nav .active").removeClass("active");
  $(`[data-section=${id}], [data-link-to=${id}]`).addClass("active");
}

$(".left-nav a").click(function() {
  const id = $(this).data("link-to");
  setActive(id);
});

$(document).ready(function() {
  const id = window.location.hash ? window.location.hash.substring(1) : "1";
  setActive(id);
});
