console.log('stars')


function test () {
  console.log(stars)
}

var carousel = document.getElementById('product-image')

carousel.addEventListener('click', ratingDisplay, false)
window.addEventListener('load', ratingDisplay, false)
window.addEventListener('load', function () {
  setTimeout(function () {
    ratingDisplay()
  }, 500)
})
carousel.addEventListener('touchend', function () {
  setTimeout( function () {
    ratingDisplay()
    console.log('ratingDisplay')
  }, 500)
})

function ratingDisplay () {
  var selected = document.getElementsByClassName('is-selected')
  var stars = document.getElementsByClassName('stars')

  //iterate over star divs
  //if is-selected and star divs have matching classes remove .hide
  // else add .hide

  for (var i = 0; i < selected.length; i++) {
    if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('mainstay-green')) {
      for (var j = 0; j < stars.length; j++) {
        if (stars[j].classList.contains('mainstay-green')) {
          stars[j].classList.remove('hide')
        } else {
          stars[j].classList.add('hide')
        }
      }
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('s-s-veggie')) {
      for (var j = 0; j < stars.length; j++) {
        if (stars[j].classList.contains('s-s-veggie')) {
          stars[j].classList.remove('hide')
        } else {
          stars[j].classList.add('hide')
        }
      }
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('dockside-sunrise')) {
      for (var j = 0; j < stars.length; j++) {
        if (stars[j].classList.contains('dockside-sunrise')) {
          stars[j].classList.remove('hide')
        } else {
          stars[j].classList.add('hide')
        }
      }
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('sailors-delight')) {
      for (var j = 0; j < stars.length; j++) {
        if (stars[j].classList.contains('sailors-delight')) {
          stars[j].classList.remove('hide')
        } else {
          stars[j].classList.add('hide')
        }
      }
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('starboard-strawberry')) {
      for (var j = 0; j < stars.length; j++) {
        if (stars[j].classList.contains('starboard-strawberry')) {
          stars[j].classList.remove('hide')
        } else {
          stars[j].classList.add('hide')
        }
      }
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('harbor-voyage')) {
      for (var j = 0; j < stars.length; j++) {
        if (stars[j].classList.contains('harbor-voyage')) {
          stars[j].classList.remove('hide')
        } else {
          stars[j].classList.add('hide')
        }
      }
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('watermelon-waves')) {
      for (var j = 0; j < stars.length; j++) {
        if (stars[j].classList.contains('watermelon-waves')) {
          stars[j].classList.remove('hide')
        } else {
          stars[j].classList.add('hide')
        }
      }
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('anchor-case')) {
      for (var j = 0; j < stars.length; j++) {
        if (stars[j].classList.contains('anchor-case')) {
          stars[j].classList.remove('hide')
        } else {
          stars[j].classList.add('hide')
        }
      }
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('compass-case')) {
      for (var j = 0; j < stars.length; j++) {
        if (stars[j].classList.contains('compass-case')) {
          stars[j].classList.remove('hide')
        } else {
          stars[j].classList.add('hide')
        }
      }
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('crew-case')) {
      for (var j = 0; j < stars.length; j++) {
        if (stars[j].classList.contains('crew-case')) {
          stars[j].classList.remove('hide')
        } else {
          stars[j].classList.add('hide')
        }
      }
    } else if (selected[i].classList.contains('is-selected') && selected[i].classList.contains('lighthouse-case')) {
      for (var j = 0; j < stars.length; j++) {
        if (stars[j].classList.contains('lighthouse-case')) {
          stars[j].classList.remove('hide')
        } else {
          stars[j].classList.add('hide')
        }
      }
    }
  }
}
