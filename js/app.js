function post_success(response) {
let recipe_section = document.getElementById(`recipe_section`);
recipe_section.insertAdjacentHTML(`afterbegin`, 
`
<article class="recipe_cards">
    <h3>${response[`data`][`meals`][0][`strMeal`]}</h3>
    <img src="${response[`data`][`meals`][0][`strMealThumb`]}">
    <p>${response[`data`][`meals`][0][`strCategory`]}</p>
    <p>${response[`data`][`meals`][0][`strArea`]}</p>
    <p>${response[`data`][`meals`][0][`strInstructions`]}</p>
</article>
`)
}

function post_failure(error) {

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
