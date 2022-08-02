function post_success(response) {
  let main_div_recipe_description = document.getElementById(`main_div_recipe_description`);
  main_div_recipe_description.insertAdjacentHTML(
    `beforeend`,
    `
    <h2>${response[`data`][`meals`][0][`strMeal`]}</h2>
    <p class="gray_text">Category: ${response[`data`][`meals`][0][`strCategory`]}</p>
    <p class="gray_text">Country of origin: ${response[`data`][`meals`][0][`strArea`]}</p>
    <p id="description">${response[`data`][`meals`][0][`strInstructions`]}</p>
`
  );

  let main_recipe_img = document.getElementById(`main_recipe_img`);
  main_recipe_img.insertAdjacentHTML(`beforeend`, `<img src="${response[`data`][`meals`][0][`strMealThumb`]}">`)
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
