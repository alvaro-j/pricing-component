var checkbox = document.getElementById('checkbox')
var checkbox_value = checkbox.value;
checkbox.addEventListener("change" , check);
var price = document.getElementsByClassName('price');
var i;

function check() {
  if (checkbox.checked == true) {
    for (i = 0; i < price.length; i++) {
        price[0].innerHTML = "19.99";
        price[1].innerHTML = "24.99";
        price[2].innerHTML = "39.99";
    } 
} else {
    for (i = 0; i < price.length; i++) {
        price[0].innerHTML = "199.99";
        price[1].innerHTML = "249.99";
        price[2].innerHTML = "399.99";
    }
}
}
