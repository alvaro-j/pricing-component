var checkbox = document.getElementById('checkbox')
checkbox.addEventListener("change" , check)
var price_show = document.getElementsByClassName('price-show')
var price_2 = document.getElementsByClassName('price-2')

function check() {
  var i; 
  for (i = 0; i < price_show.length; i++) {
    price_show[i].className = "price-hide";
    price_2[i].className = "price-show";
    }
}