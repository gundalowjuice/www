console.log('ready')

$(document).ready(function () {
  checkDisplay()

$(document).keydown(function(t) {
  juiceChange()
  contentDisplay()
})

// Initialize flickity

  $('.carousel').flickity({
    cellAlign: 'center',
    wrapAround: true,
    isSelected: true,
    initialIndex: 0
  })

// Nav drop down

  $('#nav svg').click(function () {
    $('nav').fadeToggle('fast')
    console.log('clicked')
  })

// Basket dropdown

  $('#basket').click(function () {
    $('#basket-dropdown').slideToggle('slow')
  })
})

function checkDisplay () {
  if ($('p:nth-of-type(2)').css('display') === 'none') {
    $('#shipping-info').on('click', function () {
      $('p:nth-of-type(2)').slideToggle('slow')
    })
  }
}

// change juice content and color in product carousel

(function (window) {
  // create products object and make it a property on the global window object
  var products = window.products || {}

  // get this whole ajax thing going
  var request = new XMLHttpRequest()

  request.open('GET', 'api/juice.json', true)
  request.send(null)
  request.addEventListener('load', function () {
    var data = JSON.parse(request.responseText)

    // "export" our data so we have easy access to it in the console
    // e.g. try this in the console: products.result[0].title
    products = data
    window.products = products
    juiceChange()
    contentDisplay()
    iconDisplay()
    ingredient()
    ingredientColor()
    // writeToDocument()
  })
})(window)

var carousel = document.getElementById('product-image')

carousel.addEventListener('click', juiceChange, false)

var carouselImage = document.getElementsByClassName('carousel-cell')

function juiceChange () {
  var carouselImage = document.getElementsByClassName('carousel-cell')
  var div = document.getElementById('juice-content')
  var header = document.getElementById('juice-header')
  var purchId = document.querySelector('input[name=purchasableId]')
  var addCart = document.querySelector('#button form')
  var plusBtn = document.querySelector('#button #plus')
  var minusBtn = document.querySelector('#button #minus')
  var title = document.createElement('h2')
  var price = document.createElement('h2')
  var description = document.createElement('p')

  console.log(plusBtn)
  console.log(minusBtn)

  for (var i = 0; i < carouselImage.length; i++) {
    // starboard-strawberry
    if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('starboard-strawberry')) {
      if (div.hasChildNodes()) {
        div.removeChild(div.childNodes[2])
        while (header.firstChild) {
          header.removeChild(header.firstChild)
        }
      }
      purchId.value = window.products.data[i].pId
      title.innerHTML = window.products.data[i].title
      price.innerHTML = ('$' + window.products.data[i].price + ' / bottle')
      description.innerHTML = window.products.data[i].description
      header.classList.remove('harbor-voyage', 's-s-veggie', 'sailors-delight', 'watermelon-waves', 'mainstay-green', 'dockside-sunrise', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      header.classList.add('starboard-strawberry')
      addCart.classList.remove('harbor-voyage', 's-s-veggie', 'sailors-delight', 'watermelon-waves', 'mainstay-green', 'dockside-sunrise', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      addCart.classList.add('starboard-strawberry')
      plusBtn.classList.remove('harbor-voyage', 's-s-veggie', 'sailors-delight', 'watermelon-waves', 'mainstay-green', 'dockside-sunrise', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      plusBtn.classList.add('starboard-strawberry')
      minusBtn.classList.remove('harbor-voyage-dark', 's-s-veggie-dark', 'sailors-delight-dark', 'watermelon-waves-dark', 'mainstay-green-dark', 'dockside-sunrise-dark', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      minusBtn.classList.add('starboard-strawberry-dark')
      header.appendChild(title)
      header.appendChild(price)
      div.appendChild(description)
    } // dockside-sunrise
    else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('dockside-sunrise')) {
      if (div.hasChildNodes()) {
        div.removeChild(div.childNodes[2])
        while (header.firstChild) {
          header.removeChild(header.firstChild)
        }
      }
      header.classList.remove('starboard-strawberry', 'harbor-voyage', 's-s-veggie', 'sailors-delight', 'watermelon-waves', 'mainstay-green', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      header.classList.add('dockside-sunrise')
      addCart.classList.remove('starboard-strawberry', 'harbor-voyage', 's-s-veggie', 'sailors-delight', 'watermelon-waves', 'mainstay-green', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      addCart.classList.add('dockside-sunrise')
      plusBtn.classList.remove('starboard-strawberry', 'harbor-voyage', 's-s-veggie', 'sailors-delight', 'watermelon-waves', 'mainstay-green', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      plusBtn.classList.add('dockside-sunrise')
      minusBtn.classList.remove('starboard-strawberry-dark', 'harbor-voyage-dark', 's-s-veggie-dark', 'sailors-delight-dark', 'watermelon-waves-dark', 'mainstay-green-dark', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      minusBtn.classList.add('dockside-sunrise-dark')
      purchId.value = window.products.data[i].pId
      title.innerHTML = window.products.data[i].title
      price.innerHTML = ('$' + window.products.data[i].price + ' / bottle')
      description.innerHTML = window.products.data[i].description
      header.appendChild(title)
      header.appendChild(price)
      div.appendChild(description)
    } // mainstay-green
    else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('mainstay-green')) {
      if (div.hasChildNodes()) {
        div.removeChild(div.childNodes[2])
        while (header.firstChild) {
          header.removeChild(header.firstChild)
        }
      }
      header.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 's-s-veggie', 'sailors-delight', 'watermelon-waves', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      header.classList.add('mainstay-green')
      addCart.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 's-s-veggie', 'sailors-delight', 'watermelon-waves', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      addCart.classList.add('mainstay-green')
      plusBtn.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 's-s-veggie', 'sailors-delight', 'watermelon-waves', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      plusBtn.classList.add('mainstay-green')
      minusBtn.classList.remove('starboard-strawberry-dark', 'dockside-sunrise-dark', 'harbor-voyage-dark', 's-s-veggie-dark', 'sailors-delight-dark', 'watermelon-waves-dark', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      minusBtn.classList.add('mainstay-green-dark')
      purchId.value = window.products.data[i].pId
      title.innerHTML = window.products.data[i].title
      price.innerHTML = ('$' + window.products.data[i].price + ' / bottle')
      description.innerHTML = window.products.data[i].description
      header.appendChild(title)
      header.appendChild(price)
      div.appendChild(description)
    } //sailors-delight
    else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('sailors-delight')) {
      if (div.hasChildNodes()) {
        div.removeChild(div.childNodes[2])
        while (header.firstChild) {
          header.removeChild(header.firstChild)
        }
      }
      header.classList.remove('starboard-strawberry', 'dockside-sunrise', 's-s-veggie', 'watermelon-waves', 'mainstay-green', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      header.classList.add('sailors-delight')
      addCart.classList.remove('starboard-strawberry', 'dockside-sunrise', 's-s-veggie', 'watermelon-waves', 'mainstay-green', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      addCart.classList.add('sailors-delight')
      plusBtn.classList.remove('starboard-strawberry', 'dockside-sunrise', 's-s-veggie', 'watermelon-waves', 'mainstay-green', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      plusBtn.classList.add('sailors-delight')
      minusBtn.classList.remove('starboard-strawberry-dark', 'dockside-sunrise-dark', 's-s-veggie-dark', 'watermelon-waves-dark', 'mainstay-green-dark', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      minusBtn.classList.add('sailors-delight-dark')
      purchId.value = window.products.data[i].pId
      title.innerHTML = window.products.data[i].title
      price.innerHTML = ('$' + window.products.data[i].price + ' / bottle')
      description.innerHTML = window.products.data[i].description
      header.appendChild(title)
      header.appendChild(price)
      div.appendChild(description)
    } // ss-veggie
    else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('s-s-veggie')) {
      if (div.hasChildNodes()) {
        div.removeChild(div.childNodes[2])
        while (header.firstChild) {
          header.removeChild(header.firstChild)
        }
      }
      header.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'mainstay-green', 'sailors-delight', 'watermelon-waves', 'ss-veggie', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      header.classList.add('s-s-veggie')
      addCart.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'mainstay-green', 'sailors-delight', 'watermelon-waves', 'ss-veggie', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      addCart.classList.add('s-s-veggie')
      plusBtn.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'mainstay-green', 'sailors-delight', 'watermelon-waves', 'ss-veggie', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      plusBtn.classList.add('s-s-veggie')
      minusBtn.classList.remove('starboard-strawberry-dark', 'dockside-sunrise-dark', 'harbor-voyage-dark', 'mainstay-green-dark', 'sailors-delight-dark', 'watermelon-waves', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      minusBtn.classList.add('s-s-veggie-dark')
      purchId.value = window.products.data[i].pId
      title.innerHTML = window.products.data[i].title
      price.innerHTML = ('$' + window.products.data[i].price + ' / bottle')
      description.innerHTML = window.products.data[i].description
      header.appendChild(title)
      header.appendChild(price)
      div.appendChild(description)
    } // watermelon-waves
    else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('watermelon-waves')) {
      if (div.hasChildNodes()) {
        div.removeChild(div.childNodes[2])
        while (header.firstChild) {
          header.removeChild(header.firstChild)
        }
      }
      header.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'mainstay-green', 'sailors-delight', 's-s-veggie', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      header.classList.add('watermelon-waves')
      addCart.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'mainstay-green', 'sailors-delight', 's-s-veggie', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      addCart.classList.add('watermelon-waves')
      plusBtn.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'mainstay-green', 'sailors-delight', 's-s-veggie', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      plusBtn.classList.add('watermelon-waves')
      minusBtn.classList.remove('starboard-strawberry-dark', 'dockside-sunrise-dark', 'harbor-voyage-dark', 'mainstay-green-dark', 'sailors-delight-dark', 's-s-veggie-dark', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      minusBtn.classList.add('watermelon-waves-dark')
      purchId.value = window.products.data[i].pId
      title.innerHTML = window.products.data[i].title
      price.innerHTML = ('$' + window.products.data[i].price + ' / bottle')
      description.innerHTML = window.products.data[i].description
      header.appendChild(title)
      header.appendChild(price)
      div.appendChild(description)
    } // harbor-voyage
    else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('harbor-voyage')) {
      if (div.hasChildNodes()) {
        div.removeChild(div.childNodes[2])
        while (header.firstChild) {
          header.removeChild(header.firstChild)
        }
      }
      header.classList.remove('starboard-strawberry', 'dockside-sunrise', 'mainstay-green', 'sailors-delight', 's-s-veggie', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      header.classList.add('harbor-voyage')
      addCart.classList.remove('starboard-strawberry', 'dockside-sunrise', 'mainstay-green', 'sailors-delight', 's-s-veggie', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      addCart.classList.add('harbor-voyage')
      plusBtn.classList.remove('starboard-strawberry', 'dockside-sunrise', 'mainstay-green', 'sailors-delight', 's-s-veggie', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      plusBtn.classList.add('harbor-voyage')
      minusBtn.classList.remove('starboard-strawberry-dark', 'dockside-sunrise-dark', 'mainstay-green-dark', 'sailors-delight-dark', 's-s-veggie-dark', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      minusBtn.classList.add('harbor-voyage-dark')
      purchId.value = window.products.data[i].pId
      title.innerHTML = window.products.data[i].title
      price.innerHTML = ('$' + window.products.data[i].price + ' / bottle')
      description.innerHTML = window.products.data[i].description
      header.appendChild(title)
      header.appendChild(price)
      div.appendChild(description)
    }
    else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('lighthouse-case')) {
      if (div.hasChildNodes()) {
        div.removeChild(div.childNodes[2])
        while (header.firstChild) {
          header.removeChild(header.firstChild)
        }
      }
      header.classList.remove('starboard-strawberry', 'dockside-sunrise', 'mainstay-green', 'sailors-delight', 's-s-veggie', 'anchor-case', 'crew-case')
      header.classList.add('lighthouse-case')
      addCart.classList.remove('starboard-strawberry', 'dockside-sunrise', 'mainstay-green', 'sailors-delight', 's-s-veggie', 'anchor-case', 'compass-case', 'crew-case')
      addCart.classList.add('lighthouse-case')
      plusBtn.classList.remove('starboard-strawberry', 'dockside-sunrise', 'mainstay-green', 'sailors-delight', 's-s-veggie', 'anchor-case', 'compass-case', 'crew-case')
      plusBtn.classList.add('lighthouse-case')
      minusBtn.classList.remove('starboard-strawberry-dark', 'dockside-sunrise-dark', 'mainstay-green-dark', 'sailors-delight-dark', 's-s-veggie-dark', 'anchor-case', 'compass-case', 'crew-case')
      minusBtn.classList.add('lighthouse-case')
      purchId.value = window.products.data[i].pId
      title.innerHTML = window.products.data[i].title
      price.innerHTML = ('$' + window.products.data[i].price + ' / case')
      description.innerHTML = window.products.data[i].description
      header.appendChild(title)
      header.appendChild(price)
      div.appendChild(description)
    }
    else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('crew-case')) {
      if (div.hasChildNodes()) {
        div.removeChild(div.childNodes[2])
        while (header.firstChild) {
          header.removeChild(header.firstChild)
        }
      }
      header.classList.remove('starboard-strawberry', 'dockside-sunrise', 'mainstay-green', 'sailors-delight', 's-s-veggie', 'anchor-case', 'compass-case', 'lighthouse-case')
      header.classList.add('crew-case')
      addCart.classList.remove('starboard-strawberry', 'dockside-sunrise', 'mainstay-green', 'sailors-delight', 's-s-veggie', 'anchor-case', 'compass-case', 'lighthouse-case')
      addCart.classList.add('crew-case')
      plusBtn.classList.remove('starboard-strawberry', 'dockside-sunrise', 'mainstay-green', 'sailors-delight', 's-s-veggie', 'anchor-case', 'compass-case', 'lighthouse-case')
      plusBtn.classList.add('crew-case')
      minusBtn.classList.remove('starboard-strawberry-dark', 'dockside-sunrise-dark', 'mainstay-green-dark', 'sailors-delight-dark', 's-s-veggie-dark', 'anchor-case', 'compass-case', 'lighthouse-case')
      minusBtn.classList.add('crew-case')
      purchId.value = window.products.data[i].pId
      title.innerHTML = window.products.data[i].title
      price.innerHTML = ('$' + window.products.data[i].price + ' / case')
      description.innerHTML = window.products.data[i].description
      header.appendChild(title)
      header.appendChild(price)
      div.appendChild(description)
    }
    else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('compass-case')) {
      if (div.hasChildNodes()) {
        div.removeChild(div.childNodes[2])
        while (header.firstChild) {
          header.removeChild(header.firstChild)
        }
      }
      header.classList.remove('starboard-strawberry', 'dockside-sunrise', 'mainstay-green', 'sailors-delight', 's-s-veggie', 'anchor-case', 'crew-case', 'lighthouse-case')
      header.classList.add('compass-case')
      addCart.classList.remove('starboard-strawberry', 'dockside-sunrise', 'mainstay-green', 'sailors-delight', 's-s-veggie', 'anchor-case', 'crew-case', 'lighthouse-case')
      addCart.classList.add('compass-case')
      plusBtn.classList.remove('starboard-strawberry', 'dockside-sunrise', 'mainstay-green', 'sailors-delight', 's-s-veggie', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case')
      plusBtn.classList.add('compass-case')
      minusBtn.classList.remove('starboard-strawberry-dark', 'dockside-sunrise-dark', 'mainstay-green-dark', 'sailors-delight-dark', 's-s-veggie-dark', 'anchor-case', 'crew-case', 'lighthouse-case')
      minusBtn.classList.add('compass-case')
      purchId.value = window.products.data[i].pId
      title.innerHTML = window.products.data[i].title
      price.innerHTML = ('$' + window.products.data[i].price + ' / case')
      description.innerHTML = window.products.data[i].description
      header.appendChild(title)
      header.appendChild(price)
      div.appendChild(description)
    }
    else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('anchor-case')) {
      if (div.hasChildNodes()) {
        div.removeChild(div.childNodes[2])
        while (header.firstChild) {
          header.removeChild(header.firstChild)
        }
      }
      header.classList.remove('starboard-strawberry', 'dockside-sunrise', 'mainstay-green', 'sailors-delight', 's-s-veggie', 'compass-case', 'crew-case', 'lighthouse-case')
      header.classList.add('anchor-case')
      addCart.classList.remove('starboard-strawberry', 'dockside-sunrise', 'mainstay-green', 'sailors-delight', 's-s-veggie', 'compass-case', 'crew-case', 'lighthouse-case')
      addCart.classList.add('anchor-case')
      plusBtn.classList.remove('starboard-strawberry', 'dockside-sunrise', 'mainstay-green', 'sailors-delight', 's-s-veggie', 'compass-case', 'crew-case', 'lighthouse-case')
      plusBtn.classList.add('anchor-case')
      minusBtn.classList.remove('starboard-strawberry-dark', 'dockside-sunrise-dark', 'mainstay-green-dark', 'sailors-delight-dark', 's-s-veggie-dark', 'compass-case', 'crew-case', 'lighthouse-case')
      minusBtn.classList.add('anchor-case')
      purchId.value = window.products.data[i].pId
      title.innerHTML = window.products.data[i].title
      price.innerHTML = ('$' + window.products.data[i].price + ' / case')
      description.innerHTML = window.products.data[i].description
      header.appendChild(title)
      header.appendChild(price)
      div.appendChild(description)
    }
  }
}

carousel.addEventListener('click', ingredient, false)

function ingredient () {
  var target = document.getElementById('ingredients')
  var product = document.getElementsByClassName('carousel-cell')
  for (var i = 0; i < product.length; i++) {
    if (product[i].classList.contains('is-selected') && product[i].classList.contains('starboard-strawberry')) {
      target.classList.add('starboard-strawberry')
      target.classList.remove('dockside-sunrise', 'harbor-voyage', 'watermelon-waves', 'sailors-delight', 'mainstay-green', 's-s-veggie')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('dockside-sunrise')) {
      target.classList.add('dockside-sunrise')
      target.classList.remove('starboard-strawberry', 'harbor-voyage', 'watermelon-waves', 'sailors-delight', 'mainstay-green', 's-s-veggie')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('harbor-voyage')) {
      target.classList.add('harbor-voyage')
      target.classList.remove('starboard-strawberry', 'dockside-sunrise', 'watermelon-waves', 'sailors-delight', 'mainstay-green', 's-s-veggie')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('watermelon-waves')) {
      target.classList.add('watermelon-waves')
      target.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'sailors-delight', 'mainstay-green', 's-s-veggie')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('sailors-delight')) {
      target.classList.add('sailors-delight')
      target.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'watermelon-waves', 'mainstay-green', 's-s-veggie')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('mainstay-green')) {
      target.classList.add('mainstay-green')
      target.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'watermelon-waves', 'sailors-delight', 's-s-veggie')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('s-s-veggie')) {
      target.classList.add('s-s-veggie')
      target.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'watermelon-waves', 'sailors-delight', 'mainstay-green')
    } else {
      console.log('no juice selected')
    }
  }
}

carousel.addEventListener('click', iconDisplay, false)
window.addEventListener('load', iconDisplay)

// Display ingredient icons based on juice displayed

function iconDisplay () {
  var carousel = document.getElementsByClassName('carousel-cell') // get product carousel
  var icons = document.querySelectorAll('#icons svg') // get ingredient icons

// Iterate over products to find is-selected class
  for (var i = 0; i < carousel.length; i++) {
    if (carousel[i].classList.contains('is-selected') && carousel[i].classList.contains('starboard-strawberry')) {
// iterate over icons and remove hide class
      for (var j = 0; j < icons.length; j++) {
        if (icons[j].classList.contains('ss')) {
          icons[j].classList.remove('hide')
        } else {
          icons[j].classList.add('hide') // add hide class
        }
      } // iterate over icons and remove hide class
    } else if (carousel[i].classList.contains('is-selected') && carousel[i].classList.contains('dockside-sunrise')) {
      for (var j = 0; j < icons.length; j++) {
        if (icons[j].classList.contains('ds')) {
          icons[j].classList.remove('hide')
        } else {
          icons[j].classList.add('hide') // add hide class
        }
      } // iterate over icons and remove hide class
    } else if (carousel[i].classList.contains('is-selected') && carousel[i].classList.contains('harbor-voyage')) {
      for (var j = 0; j < icons.length; j++) {
        if (icons[j].classList.contains('hv')) {
          icons[j].classList.remove('hide')
        } else {
          icons[j].classList.add('hide') // add hide class
        }
      } // iterate over icons and remove hide class
    } else if (carousel[i].classList.contains('is-selected') && carousel[i].classList.contains('sailors-delight')) {
      for (var j = 0; j < icons.length; j++) {
        if (icons[j].classList.contains('sd')) {
          icons[j].classList.remove('hide')
        } else {
          icons[j].classList.add('hide') // add hide class
        }
      } // iterate over icons and remove hide class
    } else if (carousel[i].classList.contains('is-selected') && carousel[i].classList.contains('watermelon-waves')) {
      for (var j = 0; j < icons.length; j++) {
        if (icons[j].classList.contains('ww')) {
          icons[j].classList.remove('hide')
        } else {
          icons[j].classList.add('hide') // add hide class
        }
      } // iterate over icons and remove hide class
    } else if (carousel[i].classList.contains('is-selected') && carousel[i].classList.contains('s-s-veggie')) {
      for (var j = 0; j < icons.length; j++) {
        if (icons[j].classList.contains('ss-veg')) {
          icons[j].classList.remove('hide')
        } else {
          icons[j].classList.add('hide') // add hide class
        }
      } // iterate over icons and remove hide class
    } else if (carousel[i].classList.contains('is-selected') && carousel[i].classList.contains('mainstay-green')) {
      for (var j = 0; j < icons.length; j++) {
        if (icons[j].classList.contains('mg')) {
          icons[j].classList.remove('hide')
        } else {
          icons[j].classList.add('hide') // add hide class
        }
      }
    }
  }
}

var iconList = document.querySelector('#icons')
var ingredientIcons = document.querySelectorAll('#icons svg')

document.addEventListener('click', activeIcon, false)

function activeIcon (e) {
  if (e.target !== e.currentTarget) {
    for (var i = 0; i < ingredientIcons.length; i++) {
      ingredientIcons[i].classList.remove('active')
    }
    e.target.classList.add('active')
  }
  e.stopPropagation()
}

var ingredientContent = document.querySelectorAll('#ingredient-content div') // get all ingredient-content p tags

document.addEventListener('click', contentDisplay, false)

function contentDisplay () {
var iconList = document.querySelector('#icons')
var ingredientIcons = document.querySelectorAll('#icons svg')

// hide ingredient content on juice change

  for (var i = 0; i < ingredientIcons.length; i++) {
    if ( ingredientContent[i].classList.contains('hide') ) {
      console.log('yup')
    } else {
      ingredientContent[i].classList.add('hide')
    }
  }

    e.target.classList.add('active')
  }
//   e.stopPropagation()
// }

var ingredientContent = document.querySelectorAll('#ingredient-content div') // get all ingredient-content p tags

document.addEventListener('click', contentDisplay, false)

function contentDisplay () {
// hide ingredient content on juice change

  for (var i = 0; i < ingredientIcons.length; i++) {
    if ( ingredientContent[i].classList.contains('hide') ) {
      console.log('yup')
    } else {
      ingredientContent[i].classList.add('hide')
    }
  }

  for (var i = 0; i < ingredientIcons.length; i++) {
    if (ingredientIcons[i].classList.contains('active') && ingredientIcons[i].classList.contains('apple-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('apple')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (ingredientIcons[i].classList.contains('active') && ingredientIcons[i].classList.contains('basil-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('basil')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (ingredientIcons[i].classList.contains('active') && ingredientIcons[i].classList.contains('blackberry-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('blackberry')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (ingredientIcons[i].classList.contains('active') && ingredientIcons[i].classList.contains('celery-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('celery')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (ingredientIcons[i].classList.contains('active') && ingredientIcons[i].classList.contains('cucumber-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('cucumber')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (ingredientIcons[i].classList.contains('active') && ingredientIcons[i].classList.contains('ginger-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('ginger')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (ingredientIcons[i].classList.contains('active') && ingredientIcons[i].classList.contains('honeydew-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('honeydew')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (ingredientIcons[i].classList.contains('active') && ingredientIcons[i].classList.contains('jalapeno-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('jalapeno')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (ingredientIcons[i].classList.contains('active') && ingredientIcons[i].classList.contains('kale-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('kale')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (ingredientIcons[i].classList.contains('active') && ingredientIcons[i].classList.contains('lemon-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('lemon')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (ingredientIcons[i].classList.contains('active') && ingredientIcons[i].classList.contains('lime-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('lime')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (ingredientIcons[i].classList.contains('active') && ingredientIcons[i].classList.contains('mint-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('mint')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (ingredientIcons[i].classList.contains('active') && ingredientIcons[i].classList.contains('pineapple-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('pineapple')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (ingredientIcons[i].classList.contains('active') && ingredientIcons[i].classList.contains('raspberry-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('raspberry')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (ingredientIcons[i].classList.contains('active') && ingredientIcons[i].classList.contains('romaine-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('romaine')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (ingredientIcons[i].classList.contains('active') && ingredientIcons[i].classList.contains('spinach-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('spinach')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (ingredientIcons[i].classList.contains('active') && ingredientIcons[i].classList.contains('strawberry-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('strawberry')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (ingredientIcons[i].classList.contains('active') && ingredientIcons[i].classList.contains('tangerine-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('tangerine')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (ingredientIcons[i].classList.contains('active') && ingredientIcons[i].classList.contains('watermelon-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('watermelon')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    }
  }
}

carousel.addEventListener('click', ingredientColor, false)

function ingredientColor () {
  var target = document.getElementById('ingredient-content')
  var product = document.getElementsByClassName('carousel-cell')
  for (var i = 0; i < product.length; i++) {
    if (product[i].classList.contains('is-selected') && product[i].classList.contains('starboard-strawberry')) {
      target.classList.add('starboard-strawberry')
      target.classList.remove('dockside-sunrise', 'harbor-voyage', 'watermelon-waves', 'sailors-delight', 'mainstay-green', 's-s-veggie')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('dockside-sunrise')) {
      target.classList.add('dockside-sunrise')
      target.classList.remove('starboard-strawberry', 'harbor-voyage', 'watermelon-waves', 'sailors-delight', 'mainstay-green', 's-s-veggie')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('harbor-voyage')) {
      target.classList.add('harbor-voyage')
      target.classList.remove('starboard-strawberry', 'dockside-sunrise', 'watermelon-waves', 'sailors-delight', 'mainstay-green', 's-s-veggie')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('watermelon-waves')) {
      target.classList.add('watermelon-waves')
      target.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'sailors-delight', 'mainstay-green', 's-s-veggie')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('sailors-delight')) {
      target.classList.add('sailors-delight')
      target.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'watermelon-waves', 'mainstay-green', 's-s-veggie')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('mainstay-green')) {
      target.classList.add('mainstay-green')
      target.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'watermelon-waves', 'sailors-delight', 's-s-veggie')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('s-s-veggie')) {
      target.classList.add('s-s-veggie')
      target.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'watermelon-waves', 'sailors-delight', 'mainstay-green')
    } else {

    }
  }
}

// var total = 0
// var addButton = document.getElementById('plus')
// var minusButton = document.getElementById('minus')
//
// addButton.addEventListener('click', addCart, false)
// minusButton.addEventListener('click', minusCart, false)
// carousel.addEventListener('click', zeroButton, false)
//
// function addCart () {
//   var target = document.getElementById('add-to-cart')
//   var qty = document.querySelector('input[name=qty]')
//
//   total += 7
//
//   target.value = 'add ' + total + ' to cart'
//   qty.value = total
//
//   console.log(total)
// }
//
// function minusCart () {
//   var target = document.getElementById('add-to-cart')
//   var qty = document.querySelector('input[name=qty]')
//
//   if (total > 0) {
//     total -= 7
//     target.value = ('add ' + total + ' to cart')
//     qty.value = total
//   } else if (total === 0){
//     target.value = ('add to basket')
//     qty.value = total
//   }
//   console.log(total)
// }
//
// function zeroButton () {
//   var target = document.getElementById('add-to-cart')
//   var qty = document.querySelector('input[name=qty]')
//
//   total = 0
//
//   target.value = 'Add to Cart'
//   qty.value = total
//
//   console.log(total)
// }
