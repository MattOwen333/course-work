const GUEST_LIST = [
  { name: "Leonard", count: 6 },
  { name: "Sharon", count: 4 }
];

function buildGuestCard(guest) {
  return $(`<div class="guest-card">
    <span>${guest.name}, party of ${guest.count} </span>
  </div>`);
}

function renderGuestList() {
  $(".guest-list").empty();
  GUEST_LIST.forEach(function(guest) {
    buildGuestCard(guest).appendTo($(".guest-list"));
  });
}

function addGuestToList(event) {
  event.preventDefault();
  newObj = { name: $("#guest-name").val(), count: $("#guest-count").val() };
  GUEST_LIST.push(newObj);
  renderGuestList();
  $(".guest-form").reset();
}

renderGuestList();

function serveNextGuest() {
  GUEST_LIST.pop();
  renderGuestList();
}

$("#serve").click(serveNextGuest);

// function(guest) {
//     let newGuest = guest.pop;
//     newGuest.push().append($("GUEST_LIST"));

$(".guest-form").submit(addGuestToList);
