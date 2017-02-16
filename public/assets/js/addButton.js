$('#add-to-cart').on('click', function () {
  if ($('#qtyBtn').val() === '0') {
    $('#plus').effect('bounce', {times: 5}, 'slow')
  }
})

var addToCartBtn = document.getElementById('add-to-cart')
var cartForm     = document.getElementById('addCart')

cartForm.addEventListener('click', pDef, false)

function pDef (e) {
  var formVal = document.getElementById('qtyBtn').value

  if (formVal !== '0') {
    return true
  } else {
    e.preventDefault()
    e.stopPropagation()
  }
}
