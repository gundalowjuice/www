window.addEventListener('load', stripeBtn, false)

var stripeButton = document.querySelector('.stripe-button-el span')

function stripeBtn () {
  stripeButton.innerHTML = 'Pay with Credit/Debit'
}
