function post_success(response) {
  let categories_button_one = document.getElementById(
    `categories_button_section_one`
  );

  let categories_button_two = document.getElementById(
    `categories_button_section_two`
  );

  for (let i = 0; i < 7; i++) {
    categories_button_one.insertAdjacentHTML(
      `beforeend`,
      `
        <button id="category_${
          response[`data`][`categories`][i][`strCategory`]
        }">${response[`data`][`categories`][i][`strCategory`]}</button>
        `
    );
  }

  for (let i = 7; i < 14; i++) {
    categories_button_two.insertAdjacentHTML(
      `beforeend`,
      `
        <button id="category_${
          response[`data`][`categories`][i][`strCategory`]
        }">${response[`data`][`categories`][i][`strCategory`]}</button>
        `
    );
  }
}

function post_failure(error) {
  alert(`Sorry, reload the page, please.`);
}

axios
  .request({
    url: `https://www.themealdb.com/api/json/v1/1/categories.php`,
  })
  .then(post_success)
  .catch(post_failure);

function post_success_options(response) {

}

function post_failure_options(error) {
    alert(`Sorry, chose your option again`)
}


function showOptions(details) {
  axios
    .request({
      url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${
        respose[`data`][i][`strCategory`]}`,
    })
    .then(post_success_options)
    .catch(post_failure_options);
}

let button_Beef = document.getElementById(`category_Beef`);
button_Beef.addEventListener(`click`, showOptions);
