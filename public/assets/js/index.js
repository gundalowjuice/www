console.log('ready')

$(document).ready(function () {
  checkDisplay()

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
  var title = document.createElement('h2')
  var price = document.createElement('h2')
  var description = document.createElement('p')

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
      price.innerHTML = window.products.data[i].price
      description.innerHTML = window.products.data[i].description
      header.classList.remove('harbor-voyage', 's-s-veggie', 'sailors-delight', 'watermelon-waves', 'main-stay', 'dockside-sunrise')
      header.classList.add('starboard-strawberry')
      addCart.classList.remove('harbor-voyage', 's-s-veggie', 'sailors-delight', 'watermelon-waves', 'main-stay', 'dockside-sunrise')
      addCart.classList.add('starboard-strawberry')
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
      header.classList.remove('starboard-strawberry', 'harbor-voyage', 's-s-veggie', 'sailors-delight', 'watermelon-waves', 'main-stay')
      header.classList.add('dockside-sunrise')
      addCart.classList.remove('starboard-strawberry', 'harbor-voyage', 's-s-veggie', 'sailors-delight', 'watermelon-waves', 'main-stay')
      addCart.classList.add('dockside-sunrise')
      purchId.value = window.products.data[i].pId
      title.innerHTML = window.products.data[i].title
      price.innerHTML = window.products.data[i].price
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
      header.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 's-s-veggie', 'sailors-delight', 'watermelon-waves')
      header.classList.add('mainstay-green')
      addCart.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 's-s-veggie', 'sailors-delight', 'watermelon-waves')
      addCart.classList.add('mainstay-green')
      purchId.value = window.products.data[i].pId
      title.innerHTML = window.products.data[i].title
      price.innerHTML = window.products.data[i].price
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
      header.classList.remove('starboard-strawberry', 'dockside-sunrise', 's-s-veggie', 'watermelon-waves', 'mainstay-green')
      header.classList.add('sailors-delight')
      addCart.classList.remove('starboard-strawberry', 'dockside-sunrise', 's-s-veggie', 'watermelon-waves', 'mainstay-green')
      addCart.classList.add('sailors-delight')
      purchId.value = window.products.data[i].pId
      title.innerHTML = window.products.data[i].title
      price.innerHTML = window.products.data[i].price
      description.innerHTML = window.products.data[i].description
      header.appendChild(title)
      header.appendChild(price)
      div.appendChild(description)
    } // s-s-veggie
    else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('s-s-veggie')) {
      if (div.hasChildNodes()) {
        div.removeChild(div.childNodes[2])
        while (header.firstChild) {
          header.removeChild(header.firstChild)
        }
      }
      header.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'mainstay-green', 'sailors-delight', 'watermelon-waves', 's-s-veggie')
      header.classList.add('s-s-veggie')
      addCart.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'mainstay-green', 'sailors-delight', 'watermelon-waves', 's-s-veggie')
      addCart.classList.add('s-s-veggie')
      purchId.value = window.products.data[i].pId
      title.innerHTML = window.products.data[i].title
      price.innerHTML = window.products.data[i].price
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
      header.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'mainstay-green', 'sailors-delight', 's-s-veggie')
      header.classList.add('watermelon-waves')
      addCart.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'mainstay-green', 'sailors-delight', 's-s-veggie')
      addCart.classList.add('watermelon-waves')
      purchId.value = window.products.data[i].pId
      title.innerHTML = window.products.data[i].title
      price.innerHTML = window.products.data[i].price
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
      header.classList.remove('starboard-strawberry', 'dockside-sunrise', 'mainstay-green', 'sailors-delight', 's-s-veggie')
      header.classList.add('harbor-voyage')
      addCart.classList.remove('starboard-strawberry', 'dockside-sunrise', 'mainstay-green', 'sailors-delight', 's-s-veggie')
      addCart.classList.add('harbor-voyage')
      purchId.value = window.products.data[i].pId
      title.innerHTML = window.products.data[i].title
      price.innerHTML = window.products.data[i].price
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

carousel.addEventListener('click', iconDisplay, false)
window.addEventListener('load', iconDisplay, false)

// Display ingredient icons based on juice displayed

function iconDisplay () {
  var carousel = document.getElementsByClassName('carousel-cell') // get product carousel
  var icons = document.querySelectorAll('#icons svg') // get ingredient icons
  console.log(icons)

// Iterate over products to find is-selected class
  for (var i = 0; i < carousel.length; i++) {
    if (carousel[i].classList.contains('is-selected') && carousel[i].classList.contains('starboard-strawberry')) {
// iterate over icons and remove hide class
      for (var j = 0; j < icons.length; j++) {
        if (icons[j].classList.contains('ss')) {
          icons[j].classList.remove('hide')
          console.log(icons[j].classList)
        } else {
          icons[j].classList.add('hide') // add hide class
        }
      } // iterate over icons and remove hide class
    } else if (carousel[i].classList.contains('is-selected') && carousel[i].classList.contains('dockside-sunrise')) {
      for (var j = 0; j < icons.length; j++) {
        if (icons[j].classList.contains('ds')) {
          icons[j].classList.remove('hide')
          console.log(icons[j].classList)
        } else {
          icons[j].classList.add('hide') // add hide class
        }
      } // iterate over icons and remove hide class
    } else if (carousel[i].classList.contains('is-selected') && carousel[i].classList.contains('harbor-voyage')) {
      for (var j = 0; j < icons.length; j++) {
        if (icons[j].classList.contains('hv')) {
          icons[j].classList.remove('hide')
          console.log(icons[j].classList)
        } else {
          icons[j].classList.add('hide') // add hide class
        }
      } // iterate over icons and remove hide class
    } else if (carousel[i].classList.contains('is-selected') && carousel[i].classList.contains('sailors-delight')) {
      for (var j = 0; j < icons.length; j++) {
        if (icons[j].classList.contains('sd')) {
          icons[j].classList.remove('hide')
          console.log(icons[j].classList)
        } else {
          icons[j].classList.add('hide') // add hide class
        }
      } // iterate over icons and remove hide class
    } else if (carousel[i].classList.contains('is-selected') && carousel[i].classList.contains('watermelon-waves')) {
      for (var j = 0; j < icons.length; j++) {
        if (icons[j].classList.contains('ww')) {
          icons[j].classList.remove('hide')
          console.log(icons[j].classList)
        } else {
          icons[j].classList.add('hide') // add hide class
        }
      } // iterate over icons and remove hide class
    } else if (carousel[i].classList.contains('is-selected') && carousel[i].classList.contains('s-s-veggie')) {
      for (var j = 0; j < icons.length; j++) {
        if (icons[j].classList.contains('ss-veg')) {
          icons[j].classList.remove('hide')
          console.log(icons[j].classList)
        } else {
          icons[j].classList.add('hide') // add hide class
        }
      } // iterate over icons and remove hide class
    } else if (carousel[i].classList.contains('is-selected') && carousel[i].classList.contains('mainstay-green')) {
      for (var j = 0; j < icons.length; j++) {
        if (icons[j].classList.contains('mg')) {
          icons[j].classList.remove('hide')
          console.log(icons[j].classList)
        } else {
          icons[j].classList.add('hide') //add hide class
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
	e.target.classList.add('active')i
  }
	e.stopPropagation()
}

var ingredientContent = document.querySelectorAll('#ingredient-content div') // get all ingredient-content p tags

document.addEventListener('click', contentDisplay, false)

function contentDisplay () {
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
