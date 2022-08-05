function post_success(response) {
  let chosen_category = document.getElementById(`chosen_category`);
  for(let i = 0; i < response[`data`][`meals`].length; i++) {
    chosen_category.insertAdjacentHTML(`afterbegin`, 
    `
    <div>
      <h3 id="${response[`data`][`meals`][i][`idMeal`]}" value="${response[`data`][`meals`][i][`idMeal`]}">
      ${response[`data`][`meals`][i][`strMeal`]}</h3>
      <button id="${response[`data`][`meals`][i][`idMeal`]}" value="${response[`data`][`meals`][i][`idMeal`]}">View Recipe</button>
    </div>
    `
    )
  }

  let button_id = document.getElementById(`${response[`data`][`meals`][0][`idMeal`]}`).value;
  
}

function post_failure(error) {
  alert(`Sorry, reload the page, please.`);
}

function showOptions(details) {
  let input = document.querySelector(`input`);
  let input_value = input[`value`];
  axios
    .request({
      url: ` https://www.themealdb.com/api/json/v1/1/filter.php?c=${input_value}`,
    })
    .then(post_success)
    .catch(post_failure);
}

let search_button = document.getElementById(`search_button`);
search_button.addEventListener(`click`, showOptions);