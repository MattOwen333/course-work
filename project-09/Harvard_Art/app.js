const BASE_URL = "https://api.harvardartmuseums.org";
const KEY = "apikey=a51fe660-792a-11ea-8d99-bbaa4d38f64a";

async function fetchObjects() {
  const url = `${BASE_URL}/object?${KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchObjects().then((x) => console.log(x)); // { info: {}, records: [{}, {},]}

async function fetchAllCenturies() {
  const url = `${BASE_URL}/century?${KEY}&size=100&sort=temporalorder`;
  if (localStorage.getItem("centuries")) {
    return JSON.parse(localStorage.getItem("centuries"));
  }
  try {
    const response = await fetch(url);
    const { records } = await response.json();

    localStorage.setItem("centuries", JSON.stringify(records));

    return records;
  } catch (error) {
    console.error(error);
  }
}

fetchAllCenturies();
fetchAllCenturies();

async function fetchAllClassifications() {
  const url = `${BASE_URL}/classification?${KEY}&size=100&sort=name`;
  if (localStorage.getItem("classifications")) {
    return JSON.parse(localStorage.getItem("classifications"));
  }
  try {
    const response = await fetch(url);
    const { records } = await response.json();

    localStorage.setItem("classifications", JSON.stringify(records));
    console.log(records);
    return records;
  } catch (error) {
    console.error(error);
  }
}

async function prefetchCategoryLists() {
  try {
    const [classifications, centuries] = await Promise.all([
      fetchAllClassifications(),
      fetchAllCenturies(),
    ]);
    // This provides a clue to the user, that there are items in the dropdown
    $(".classification-count").text(`(${classifications.length}))`);
    console.log(classifications);
    classifications.forEach((classification) => {
      $("#select-classification").append(
        $(
          `<option value=${classification.name}>${classification.name}</option>`
        )
      );
      // append a correctly formatted option tag into
      // the element with id select-classification
    });

    // This provides a clue to the user, that there are items in the dropdown
    $(".century-count").text(`(${centuries.length}))`);

    centuries.forEach((century) => {
      $("#select-century").append(
        $(`<option value=${century.name}>${century.name}</option>`)
      );
      // append a correctly formatted option tag into
      // the element with id select-century
    });
  } catch (error) {
    console.error(error);
  }
}

prefetchCategoryLists();
