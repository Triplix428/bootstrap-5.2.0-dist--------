let btnUp = document.querySelectorAll(".up"),
    btnDown = document.querySelectorAll(".down"),
    input = document.querySelectorAll("input");

input.forEach(item => {
  item.addEventListener('keypress', function(e) {
    if(e.key === "Enter") {
      e.preventDefault();
      sum();
    }
  });
  item.addEventListener('blur', function(e) {
    item.value = item.value === '' ? 0 : item.value ;
    sum();
  });
});

btnDown.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    if (item.parentNode.querySelector("input").value > "0") {
      item.nextElementSibling.stepDown();
    };
    sum();
  });
});

btnUp.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    item.previousElementSibling.stepUp();
    sum();
  });
})

function sum() {
  let total = 0;
  let inputField = document.querySelectorAll(".row");
  inputField.forEach(item => {
  let value = item.querySelector("input").value;
  console.log(value);
  let price = item.querySelector(".price").innerText.replace('$','');
  total = total + value * price;
  document.querySelector('.total').children[0].innerHTML = total;
});
}
