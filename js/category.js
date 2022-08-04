function post_success(response) {
  
}

function post_failure(error) {
  alert(`Sorry, reload the page, please.`);
}

function showOptions(details) {
  axios
    .request({
      url: ` https://www.themealdb.com/api/json/v1/1/filter.php?c=${input_value}`,
    })
    .then(post_success)
    .catch(post_failure);
}

let input = document.querySelector(`input`);
let input_value = input[`value`];

let search_button = document.getElementById(`search_button`);
search_button.addEventListener(`click`, showOptions);
