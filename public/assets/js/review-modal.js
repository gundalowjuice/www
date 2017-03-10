console.log('modal working')


var modal = document.getElementById('review-modal')
var modalOverlay = document.getElementById('modal-overlay')
var openButton = document.getElementById('review-button')
var closeButton = document.getElementById('close-button')

openButton.addEventListener('click', function () {
  modal.classList.toggle('closed')
  modalOverlay.classList.toggle('closed')
})

closeButton.addEventListener('click', function () {
  modal.classList.toggle('closed')
  modalOverlay.classList.toggle('closed')
})
