var total = 0
var addButton = document.getElementById('plus')
var minusButton = document.getElementById('minus')

addButton.addEventListener('click', addCart, false)
minusButton.addEventListener('click', minusCart, false)
carousel.addEventListener('click', zeroButton, false)

function addCart () {
  var target = document.getElementById('add-to-cart')
  var qty = document.querySelector('input[name=qty]')

  total += 7

  target.value = 'add ' + total + ' to cart'
  qty.value = total

  console.log(total)
}

function minusCart () {
  var target = document.getElementById('add-to-cart')
  var qty = document.querySelector('input[name=qty]')

  if (total > 0) {
    total -= 7
    target.value = ('add ' + total + ' to cart')
    qty.value = total
  } else if (total === 0){
    target.value = ('add to basket')
    qty.value = total
  }
  console.log(total)
}

function zeroButton () {
  var target = document.getElementById('add-to-cart')
  var qty = document.querySelector('input[name=qty]')

  total = 0

  target.value = 'Add to Cart'
  qty.value = total

  console.log(total)
}
