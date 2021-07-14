var checkbox = document.getElementById('checkbox')
checkbox.addEventListener("change" , check)
var price = document.getElementsByClassName('price')

function check() {
  var i; 
  for (i = 0; i < price.length; i++) {
    price[0].innerHTML = "199.99";
    price[1].innerHTML = "249.99";
    price[2].innerHTML = "399.99";
 }
}
