const DEFAULT_PREFERENCES = {
  darkMode: false,
  largeFont: false,
  expertMode: false
};

let userPreferences;

function setPreferences() {
  localStorage.setItem("userPreferences", JSON.stringify(userPreferences));
}

function getPreferences() {
  userPreferences =
    JSON.parse(localStorage.getItem("userPreferences")) || DEFAULT_PREFERENCES;
}

function updateInterface() {
  setColorMode();
  setBaseFontSize();
  drawAside();
}

function setColorMode() {
  $("#app").attr("class", userPreferences.darkMode ? "dark" : "light");
}

function setBaseFontSize() {
  $("html").css("fontSize", userPreferences.largeFont ? "24px" : "16px");
}

function drawAside() {
  $("aside").html(`
      <button>All Users</button>
      <button>All Users</button>
      ${
        userPreferences.expertMode
          ? `
          <button>Expert Users</button>
          <button>Expert Users</button>
        `
          : ``
      }
      <button>All Users</button>
    `);
}

function populateCustomControls() {
  Object.keys(userPreferences).forEach(function(keyName) {
    const inputElement = $(`.custom-controls [name=${keyName}]`);
    inputElement.attr("checked", userPreferences[keyName]);
  });
}

$(".trigger").click(function() {
  $(".custom-controls").toggleClass("open");
});

$(".custom-controls").on("input", "input", function() {
  const target = $(this);

  userPreferences[target.attr("name")] = target.is(":checked");
  setPreferences();

  updateInterface();
});

// Bootstrapping
getPreferences();
populateCustomControls();
updateInterface();
