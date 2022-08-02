function post_success(response) {
  let recipe_title = document.getElementById(`recipe_title`);
  let recipe_category = document.getElementById(`recipe_category`);
  let recipe_country = document.getElementById(`recipe_country`);
  let recipe_description = document.getElementById(`recipe_description`);

  recipe_title[`innerHTML`] = `${response[`data`][`meals`][0][`strMeal`]}`;
  recipe_category[`innerHTML`] = `Category: ${
    response[`data`][`meals`][0][`strCategory`]
  }`;
  recipe_country[`innerHTML`] = `Country of origin: ${response[`data`][`meals`][0][`strArea`]}`;
  recipe_description[`innerHTML`] = `${response[`data`][`meals`][0][`strInstructions`]}`;


  let main_recipe_img = document.getElementById(`main_recipe_img`);
  main_recipe_img.setAttribute(`src`, `${response[`data`][`meals`][0][`strMealThumb`]}`)
    
}

function post_failure(error) {
  document.body.insertAdjacentHTML(
    `beforeend`,
    `Sorry, click the button again.`
  );
}

function randomRecipe(details) {
  axios
    .request({
      url: `https://www.themealdb.com/api/json/v1/1/random.php`,
    })
    .then(post_success)
    .catch(post_failure);
}

let random_recipe_button = document.getElementById(`random_recipe_button`);
random_recipe_button.addEventListener(`click`, randomRecipe);
