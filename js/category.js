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
        }">
          ${response[`data`][`categories`][i][`strCategory`]}
          </button>
        `
    );
  }

  let button_Beef = document.getElementById(`category_Beef`);
  button_Beef.addEventListener(`click`, showOptionsBeef);
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

function post_success_options_beef(response) {
    let chosen_category = document.getElementById(`chosen_category`);
    for(let i = 0; i < response[`data`][`meals`].length; i++) {
        chosen_category.insertAdjacentHTML(`afterbegin`,
        `
        <div>
        <a id="${response[`data`][`meals`][i][`idMeal`]}" href="#">${response[`data`][`meals`][i][`strMeal`]}</a>
        <img src="${response[`data`][`meals`][i][`strMealThumb`]}">
        </div>
        `)
    }


}

function post_failure_options_beef(error) {
  alert(`Sorry, chose your option again`);
}

function showOptionsBeef(details) {
  axios
    .request({
      url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`,
    })
    .then(post_success_options_beef)
    .catch(post_failure_options_beef);
}

function post_success_options_chicken(response) {
    
}

function post_failure_options_chicken(error) {
  alert(`Sorry, chose your option again`);
}

function showOptionsChicken(details) {
    axios
      .request({
        url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`,
      })
      .then(post_success_options_chicken)
      .catch(post_failure_options_chicken);
  }