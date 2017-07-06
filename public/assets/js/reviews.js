console.log('reviews')

var carousel = document.getElementById('product-image')

carousel.addEventListener('click', colorChange, false)
window.addEventListener('load', colorChange, false)
window.addEventListener('keyup', colorChange, false)
carousel.addEventListener('touchend', function () {
  setTimeout( function () {
    colorChange()
    console.log('colorChange')
  }, 500)
})

function colorChange () {
  var reviewHeader = document.querySelector('#review-header h3')
  var selected = document.getElementsByClassName('is-selected')

  for (var i = 0; i < selected.length; i++) {
    if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('s-s-veggie')) {
      reviewHeader.classList.add('s-s-veggie')
      reviewHeader.classList.remove('mainstay-green', 'dockside-sunrise', 'sailors-delight', 'starboard-strawberry', 'harbor-voyage', 'watermelon-waves', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('mainstay-green')) {
      reviewHeader.classList.add('mainstay-green')
      reviewHeader.classList.remove('s-s-veggie', 'dockside-sunrise', 'sailors-delight', 'starboard-strawberry', 'harbor-voyage', 'watermelon-waves', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('dockside-sunrise')) {
      reviewHeader.classList.add('dockside-sunrise')
      reviewHeader.classList.remove('mainstay-green', 's-s-veggie', 'sailors-delight', 'starboard-strawberry', 'harbor-voyage', 'watermelon-waves', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('sailors-delight')) {
      reviewHeader.classList.add('sailors-delight')
      reviewHeader.classList.remove('mainstay-green', 'dockside-sunrise', 's-s-veggie', 'starboard-strawberry', 'harbor-voyage', 'watermelon-waves', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('starboard-strawberry')) {
      reviewHeader.classList.add('starboard-strawberry')
      reviewHeader.classList.remove('mainstay-green', 'dockside-sunrise', 'sailors-delight', 's-s-veggie', 'harbor-voyage', 'watermelon-waves', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('harbor-voyage')) {
      reviewHeader.classList.add('harbor-voyage')
      reviewHeader.classList.remove('mainstay-green', 'dockside-sunrise', 'sailors-delight', 'starboard-strawberry', 's-s-veggie', 'watermelon-waves', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('watermelon-waves')) {
      reviewHeader.classList.add('watermelon-waves')
      reviewHeader.classList.remove('mainstay-green', 'dockside-sunrise', 'sailors-delight', 'starboard-strawberry', 'harbor-voyage', 's-s-veggie', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('anchor-case')) {
      reviewHeader.classList.add('anchor-case')
      reviewHeader.classList.remove('mainstay-green', 'dockside-sunrise', 'sailors-delight', 'starboard-strawberry', 'harbor-voyage', 'watermelon-waves', 's-s-veggie', 'compass-case', 'crew-case', 'lighthouse-case')
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('compass-case')) {
      reviewHeader.classList.add('compass-case')
      reviewHeader.classList.remove('mainstay-green', 'dockside-sunrise', 'sailors-delight', 'starboard-strawberry', 'harbor-voyage', 'watermelon-waves', 'anchor-case', 's-s-veggie', 'crew-case', 'lighthouse-case')
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('crew-case')) {
      reviewHeader.classList.add('crew-case')
      reviewHeader.classList.remove('mainstay-green', 'dockside-sunrise', 'sailors-delight', 'starboard-strawberry', 'harbor-voyage', 'watermelon-waves', 'anchor-case', 'compass-case', 's-s-veggie', 'lighthouse-case')
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('lighthouse-case')) {
      reviewHeader.classList.add('lighthouse-case')
      reviewHeader.classList.remove('mainstay-green', 'dockside-sunrise', 'sailors-delight', 'starboard-strawberry', 'harbor-voyage', 'watermelon-waves', 'anchor-case', 'compass-case', 'crew-case', 's-s-veggie')
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('baltimore-birthday')) {
      reviewHeader.classList.add('baltimore-birthday')
      reviewHeader.classList.remove('mainstay-green', 'dockside-sunrise', 'sailors-delight', 'starboard-strawberry', 'harbor-voyage', 'watermelon-waves', 'anchor-case', 'compass-case', 'crew-case', 's-s-veggie', 'lighthouse-case')
    }
  }
}

carousel.addEventListener('click', reviewDisplay, false)
window.addEventListener('load', reviewDisplay, false)
window.addEventListener('keyup', reviewDisplay, false)
carousel.addEventListener('touchend', function () {
  setTimeout( function () {
    reviewDisplay()
    console.log('reviewDisplay')
  })
})

function reviewDisplay () {
  var reviewWrapper = document.getElementsByClassName('review-wrapper')
  var selected = document.getElementsByClassName('is-selected')

  for (var i = 0; i < selected.length; i++) {
    if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('mainstay-green')) {
      for (var j = 0; j < reviewWrapper.length; j++) {
        if (reviewWrapper[j].classList.contains('mainstay-green')) {
          reviewWrapper[j].classList.remove('hide')
        } else {
          reviewWrapper[j].classList.add('hide')
        }
      }
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('s-s-veggie')) {
      for (var j = 0; j < reviewWrapper.length; j++) {
        if (reviewWrapper[j].classList.contains('s-s-veggie')) {
          reviewWrapper[j].classList.remove('hide')
        } else {
          reviewWrapper[j].classList.add('hide')
        }
      }
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('dockside-sunrise')) {
      for (var j = 0; j < reviewWrapper.length; j++) {
        if (reviewWrapper[j].classList.contains('dockside-sunrise')) {
          reviewWrapper[j].classList.remove('hide')
        } else {
          reviewWrapper[j].classList.add('hide')
        }
      }
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('sailors-delight')) {
      for (var j = 0; j < reviewWrapper.length; j++) {
        if (reviewWrapper[j].classList.contains('sailors-delight')) {
          reviewWrapper[j].classList.remove('hide')
        } else {
          reviewWrapper[j].classList.add('hide')
        }
      }
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('starboard-strawberry')) {
      for (var j = 0; j < reviewWrapper.length; j++) {
        if (reviewWrapper[j].classList.contains('starboard-strawberry')) {
          reviewWrapper[j].classList.remove('hide')
        } else {
          reviewWrapper[j].classList.add('hide')
        }
      }
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('harbor-voyage')) {
      for (var j = 0; j < reviewWrapper.length; j++) {
        if (reviewWrapper[j].classList.contains('harbor-voyage')) {
          reviewWrapper[j].classList.remove('hide')
        } else {
          reviewWrapper[j].classList.add('hide')
        }
      }
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('watermelon-waves')) {
      for (var j = 0; j < reviewWrapper.length; j++) {
        if (reviewWrapper[j].classList.contains('watermelon-waves')) {
          reviewWrapper[j].classList.remove('hide')
        } else {
          reviewWrapper[j].classList.add('hide')
        }
      }
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('anchor-case')) {
      for (var j = 0; j < reviewWrapper.length; j++) {
        if (reviewWrapper[j].classList.contains('anchor-case')) {
          reviewWrapper[j].classList.remove('hide')
        } else {
          reviewWrapper[j].classList.add('hide')
        }
      }
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('compass-case')) {
      for (var j = 0; j < reviewWrapper.length; j++) {
        if (reviewWrapper[j].classList.contains('compass-case')) {
          reviewWrapper[j].classList.remove('hide')
        } else {
          reviewWrapper[j].classList.add('hide')
        }
      }
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('crew-case')) {
      for (var j = 0; j < reviewWrapper.length; j++) {
        if (reviewWrapper[j].classList.contains('crew-case')) {
          reviewWrapper[j].classList.remove('hide')
        } else {
          reviewWrapper[j].classList.add('hide')
        }
      }
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('lighthouse-case')) {
      for (var j = 0; j < reviewWrapper.length; j++) {
        if (reviewWrapper[j].classList.contains('lighthouse-case')) {
          reviewWrapper[j].classList.remove('hide')
        } else {
          reviewWrapper[j].classList.add('hide')
        }
      }
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('baltimore-birthday')) {
      for (var j = 0; j < reviewWrapper.length; j++) {
        if (reviewWrapper[j].classList.contains('baltimore-birthday')) {
          reviewWrapper[j].classList.remove('hide')
        } else {
          reviewWrapper[j].classList.add('hide')
        }
      }
    }
  }
}
