// var qtyBtn = document.querySelector('form > input[name=qty]')
// if (qtyBtn.value === '0') {
//   console.log('0')
//   $('#plus').effect('bounce', {times: 5}, 'slow')
//     console.log('add to cart button')
//   $('#addCart').submit(function (e) {
//     e.preventDefault()
//   })
// } else {
//   console.log(qtyBtn.value)
// }

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

// function checkFormVal() {
//   var formVal = document.getElementById('qtyBtn').value
//   if (formVal !== '0') {
//     console.log('true')
//     return true
//   } else {
//     console.log('false')
//     function pDef (e) {
//       e.preventDefault()
//     }
//   }
// }

// $('#add-to-cart').on('click', function () {
//   if ($('#qtyBtn').val() === '0') {
//     $('#addCart').submit(function (e) {
//       console.log('false')
//       return false
//     })
//   } else {
//     $('#addCart').submit(function (e) {
//       console.log('true')
//       console.log($('#qtyBtn').val())
//       return true
//     })
//   }
// })
  // function quantityCheck () {
  //   console.log('button clicked')
  // }

  // var mainBtn = document.getElementById('add-to-cart')
  //
  // mainBtn.addEventListener('click', quantityCheck, false)
