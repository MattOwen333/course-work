const CARD_URL = `https://api.magicthegathering.io/v1/cards?pageSize=20`;
const query = ''
function renderCard(card) {}

function renderCardList(cardList) {}

function fetchCardList(url) {
  $(".searching").addClass(active);

  // SECRET THING HERE

  fetch(url)
    .then(function(data) {
      $(".searching").removeClass(active);
      return data.json();
    })
    .then(function(data) {
      console.log(data.cards);
      // render data.cards, etc...
    }) // render the card list && SECRET THING HERE
    .catch(); // render an error message
}



$('#card-search').on('submit', function (event) {
    event.preventdefault()
    $(‘#cname’).val()
    $(‘#ctext’).val()
    
    //.fetch(`${ #cname }${ #ctext}`)

    
    // read the `cardName` and `cardText` from #cname and #ctext
    // clear the values for the two elements
    // build the URL for fetchCardList
    // call fetchCardList
  });

$("#results").on("click", ".card .set-name", function() {});

// I have an element on the page with a class of searching. When we start a fetch, you should add the class active to it. When the fetch finishes, before calling renderCardList, remove the class active from it. It adds a visual cue to the user that something is going on, which is good UX.
