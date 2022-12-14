function post_success(response) {
    let found_recipe = document.getElementById(`found_recipe`);
    for (let i = 0; i < response[`data`][`meals`].length; i++) {
      found_recipe.insertAdjacentHTML(
        `beforeend`,
        `
     <div class="recipe_cards">
          <h2>${response[`data`][`meals`][i][`strMeal`]}</h2>
          <p id="category_recipe">${response[`data`][`meals`][i][`strCategory`]}</p>
          <img src="${response[`data`][`meals`][i][`strMealThumb`]}">
          <p id="description_recipe">${response[`data`][`meals`][i][`strInstructions`]}</p>
     </div>
     `
      );
    }
  }

function post_failure(error) {
    alert(`Sorry, we didn't find your recipe research.`)
}

function showCategories(details) {
  let input_search = document.querySelector(`input`);
  let input_search_value = input_search[`value`];
  axios
    .request({
      url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${input_search_value}`,
    })
    .then(post_success)
    .catch(post_failure);
}

let button = document.querySelector(`button`);
button.addEventListener(`click`, showCategories);
