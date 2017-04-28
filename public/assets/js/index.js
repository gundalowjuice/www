// console.log('ready')
//
// $(document).ready(function () {
//   checkDisplay()
//
//
// $(document).keydown(function(t) {
//   juiceChange()
//   contentDisplay()
//   iconDisplay()
//   ingredient()
//   ingredientColor()
// })
//
// // Initialize flickity
//
//   $('.carousel').flickity({
//     cellAlign: 'center',
//     wrapAround: true,
//     isSelected: true,
//     initialIndex: 0
//   })
//
// var $carousel = $('.carousel').flickity()
//
// $carousel.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
//   if ( typeof cellIndex == 'number' ) {
//     $carousel.flickity( 'selectCell', cellIndex );
//   }
// });
//
// // Nav drop down
//
//   $('#nav svg').click(function () {
//     $('nav').fadeToggle('fast')
//     console.log('clicked')
//   })
//
// // Basket dropdown
//
//
//   $('#basket').click(function () {
//     $('#basket-dropdown').slideToggle('slow')
//   })
//
// })
//
// function checkDisplay () {
//   if ($('p:nth-of-type(2)').css('display') === 'none') {
//     $('#shipping-info').on('click', function () {
//       $('p:nth-of-type(2)').slideToggle('slow')
//     })
//   }
// }

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
carousel.addEventListener('touchend', function () {
  setTimeout(function () {
    juiceChange()
  }, 500)
}, false)
carousel.addEventListener('touchmove', function () {
  setTimeout(function () {
    juiceChange()
    console.log('delay')
  }, 500)
}, false)

var carouselImage = document.getElementsByClassName('carousel-cell')

function juiceChange () {
  // var carouselImage = document.getElementsByClassName('carousel-cell')
  var carouselImage = document.querySelectorAll('#product-image .carousel-cell')
  var div = document.getElementById('juice-content')
  var header = document.getElementById('juice-header')
  var purchId = document.querySelector('input[name=purchasableId]')
  var addCart = document.querySelector('#button form')
  var plusBtn = document.querySelector('#button #plus')
  var minusBtn = document.querySelector('#button #minus')
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
      price.innerHTML = ('$' + window.products.data[i].price + ' / pack')
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
      price.innerHTML = ('$' + window.products.data[i].price + ' / pack')
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
      price.innerHTML = ('$' + window.products.data[i].price + ' / pack')
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
      price.innerHTML = ('$' + window.products.data[i].price + ' / pack')
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
      price.innerHTML = ('$' + window.products.data[i].price + ' / pack')
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
      price.innerHTML = ('$' + window.products.data[i].price + ' / pack')
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
      plusBtn.classList.remove('starboard-strawberry', 'dockside-sunrise', 'mainstay-green', 'sailors-delight', 's-s-veggie', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case', 'watermelon-waves')
      plusBtn.classList.add('harbor-voyage')
      minusBtn.classList.remove('starboard-strawberry-dark', 'dockside-sunrise-dark', 'mainstay-green-dark', 'sailors-delight-dark', 's-s-veggie-dark', 'anchor-case', 'compass-case', 'crew-case', 'lighthouse-case', 'watermelon-waves-dark')
      minusBtn.classList.add('harbor-voyage-dark')
      purchId.value = window.products.data[i].pId
      title.innerHTML = window.products.data[i].title
      price.innerHTML = ('$' + window.products.data[i].price + ' / pack')
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
      price.innerHTML = ('$' + window.products.data[i].price + ' / pack')
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
      price.innerHTML = ('$' + window.products.data[i].price + ' / pack')
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
      price.innerHTML = ('$' + window.products.data[i].price + ' / pack')
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
      price.innerHTML = ('$' + window.products.data[i].price + ' / pack')
      description.innerHTML = window.products.data[i].description
      header.appendChild(title)
      header.appendChild(price)
      div.appendChild(description)
    }
  }
}

carousel.addEventListener('click', ingredient, false)
carousel.addEventListener('touchend', ingredient, false)
carousel.addEventListener('touchmove', function () {
  setTimeout(function () {
    ingredient()
    console.log('delay')
  }, 500)
})

function ingredient () {
  var target = document.getElementById('ingredients')
  var product = document.getElementsByClassName('carousel-cell')
  for (var i = 0; i < product.length; i++) {
    if (product[i].classList.contains('is-selected') && product[i].classList.contains('starboard-strawberry')) {
      target.classList.add('starboard-strawberry')
      target.classList.remove('dockside-sunrise', 'harbor-voyage', 'watermelon-waves', 'sailors-delight', 'mainstay-green', 's-s-veggie', 'anchor-case', 'lighthouse-case', 'compass-case', 'crew-case')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('dockside-sunrise')) {
      target.classList.add('dockside-sunrise')
      target.classList.remove('starboard-strawberry', 'harbor-voyage', 'watermelon-waves', 'sailors-delight', 'mainstay-green', 's-s-veggie', 'anchor-case', 'lighthouse-case', 'compass-case', 'crew-case')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('harbor-voyage')) {
      target.classList.add('harbor-voyage')
      target.classList.remove('starboard-strawberry', 'dockside-sunrise', 'watermelon-waves', 'sailors-delight', 'mainstay-green', 's-s-veggie')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('watermelon-waves')) {
      target.classList.add('watermelon-waves')
      target.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'sailors-delight', 'mainstay-green', 's-s-veggie', 'anchor-case', 'lighthouse-case', 'compass-case', 'crew-case')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('sailors-delight')) {
      target.classList.add('sailors-delight')
      target.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'watermelon-waves', 'mainstay-green', 's-s-veggie', 'anchor-case', 'lighthouse-case', 'compass-case', 'crew-case')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('mainstay-green')) {
      target.classList.add('mainstay-green')
      target.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'watermelon-waves', 'sailors-delight', 's-s-veggie', 'anchor-case', 'lighthouse-case', 'compass-case', 'crew-case')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('s-s-veggie')) {
      target.classList.add('s-s-veggie')
      target.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'watermelon-waves', 'sailors-delight', 'mainstay-green', 'anchor-case', 'lighthouse-case', 'compass-case', 'crew-case')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('crew-case')) {
      target.classList.add('crew-case')
      target.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'watermelon-waves', 'sailors-delight', 's-s-veggie', 'mainstay-green', 'anchor-case', 'lighthouse-case', 'compass-case')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('anchor-case')) {
      target.classList.add('anchor-case')
      target.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'watermelon-waves', 'sailors-delight', 'mainstay-green', 's-s-veggie', 'crew-case', 'lighthouse-case', 'compass-case')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('lighthouse-case')) {
      target.classList.add('lighthouse-case')
      target.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'watermelon-waves', 'sailors-delight', 'mainstay-green', 's-s-veggie', 'anchor-case', 'crew-case', 'compass-case')
    } else if (product[i].classList.contains('is-selected') && product[i].classList.contains('compass-case')) {
      target.classList.add('compass-case')
      target.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'watermelon-waves', 'sailors-delight', 'mainstay-green', 's-s-veggie', 'anchor-case', 'lighthouse-case', 'crew-case')
    } else {
    }
  }
}

carousel.addEventListener('click', iconDisplay, false)
window.addEventListener('load', iconDisplay, false)
carousel.addEventListener('touchend', iconDisplay, false)
carousel.addEventListener('touchmove', function () {
  setTimeout(function () {
    iconDisplay()
    console.log('delay')
  }, 500)
})

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
    } else if (carousel[i].classList.contains('is-selected') && carousel[i].classList.contains('crew-case')) {
      for (var j = 0; j < icons.length; j++) {
        if (icons[j].classList.contains('crew-case')) {
          icons[j].classList.remove('hide')
        } else {
          icons[j].classList.add('hide') // add hide class
        }
      }
    } else if (carousel[i].classList.contains('is-selected') && carousel[i].classList.contains('anchor-case')) {
      for (var j = 0; j < icons.length; j++) {
        if (icons[j].classList.contains('anchor-case')) {
          icons[j].classList.remove('hide')
        } else {
          icons[j].classList.add('hide') // add hide class
        }
      }
    } else if (carousel[i].classList.contains('is-selected') && carousel[i].classList.contains('compass-case')) {
      for (var j = 0; j < icons.length; j++) {
        if (icons[j].classList.contains('compass-case')) {
          icons[j].classList.remove('hide')
        } else {
          icons[j].classList.add('hide') // add hide class
        }
      }
    } else if (carousel[i].classList.contains('is-selected') && carousel[i].classList.contains('lighthouse-case')) {
      for (var j = 0; j < icons.length; j++) {
        if (icons[j].classList.contains('lighthouse-case')) {
          icons[j].classList.remove('hide')
        } else {
          icons[j].classList.add('hide') // add hide class
        }
      }
    }
  }
}

var iconParent = document.getElementById('icons')
var iconChild = document.getElementsByClassName('icon')
var svgIcon = document.querySelectorAll('svg use')

iconParent.addEventListener('click', activeIcon, false) 
iconParent.addEventListener('click', activeSvg, false)
document.addEventListener('click', activeIcon, false)
carousel.addEventListener('touchend', activeIcon, false)
carousel.addEventListener('touchmove', function () {
  setTimeout(function () {
    activeIcon()
    console.log('delay')
  }, 500)
})

function activeSvg (e) {
	if (e.target !== e.currentTarget) {
		for (let i = 0; i < svgIcon.length; i++) {
			svgIcon[i].classList.remove('active')
		}
		e.target.classList.add('active')
	}
	e.stopPropagation()
}

function activeIcon (e) {
	console.log('active icon')
  if (e.target !== e.currentTarget) {
    for (var i = 0; i < iconChild.length; i++) {
      iconChild[i].classList.remove('active')
    }
    e.target.classList.add('active')
  }
  e.stopPropagation()
}

//var ingredientContent = document.querySelectorAll('#ingredient-content div') // get all ingredient-content p tags

//iconParent.addEventListener('click', contentDisplay, false)
//carousel.addEventListener('touchend', contentDisplay, false)
//carousel.addEventListener('touchmove', function () {
 // setTimeout(function () {
  //  contentDisplay()
   // console.log('delay')
//  }, 500)
//})

// function contentDisplay () {
// var iconList = document.querySelector('#icons')
// var ingredientIcons = document.querySelectorAll('#icons svg')
//
// // hide ingredient content on juice change
//
//   for (var i = 0; i < ingredientIcons.length; i++) {
//     if ( ingredientContent[i].classList.contains('hide') ) {
//       console.log('yup')
//     } else {
//       ingredientContent[i].classList.add('hide')
//     }
//   }
//
//     e.target.classList.add('active')
//   }
//   e.stopPropagation()
// }

var ingredientContent = document.querySelectorAll('#ingredient-content div') // get all ingredient-content p tags

iconParent.addEventListener('click', contentDisplay, false)
iconParent.addEventListener('click', contentDisplaySvg, false)
carousel.addEventListener('click', contentDisplay, false)
document.addEventListener('click', contentDisplay, false)

function contentDisplaySvg () {
	for (let i = 0; i < svgIcon.length; i++) {
		if (svgIcon[i].classList.contains('blackberry-icon') && svgIcon[i].classList.contains('active')) { 
			for (let j = 0; j < ingredientContent.length; j++) {
				if (ingredientContent[j].classList.contains('blackberry')) {
					ingredientContent[j].classList.remove('hide')
				} else {
					ingredientContent[j].classList.add('hide')
				}	
			}
		} else if (svgIcon[i].classList.contains('tangerine-icon') && svgIcon[i].classList.contains('active')) {
			for (let j = 0; j < ingredientContent.length; j++) {
				if (ingredientContent[j].classList.contains('tangerine')) {
					ingredientContent[j].classList.remove('hide')
				} else {
					ingredientContent[j].classList.add('hide')
				}
			}
		} else if (svgIcon[i].classList.contains('rasberry-icon') && svgIcon[i].classList.contains('active')) {
			for (let j = 0; j < ingredientContent.length; j++) {
				if (ingredientContent[j].classList.contains('raspberry')) {
					ingredientContent[j].classList.remove('hide')
				} else {
					ingredientContent[j].classList.add('hide')
				}
			}
		} else if (svgIcon[i].classList.contains('watermelon-icon') && svgIcon[i].classList.contains('active')) {
			for (let j = 0; j < ingredientContent.length; j++) {
				if (ingredientContent[j].classList.contains('watermelon')) {
					ingredientContent[j].classList.remove('hide')
				} else {
					ingredientContent[j].classList.add('hide')
				}
			}
		} else if (svgIcon[i].classList.contains('strawberry-icon') && svgIcon[i].classList.contains('active')) {
			for (let j = 0; j < ingredientContent.length; j++) {
				if (ingredientContent[j].classList.contains('strawberry')) {
					ingredientContent[j].classList.remove('hide')
				} else {
					ingredientContent[j].classList.add('hide')
				}
			}
		} else if (svgIcon[i].classList.contains('spinach-icon') && svgIcon[i].classList.contains('active')) {
			for (let j = 0; j < ingredientContent.length; j++) {
				if (ingredientContent[j].classList.contains('spinach')) {
					ingredientContent[j].classList.remove('hide')
				} else {
					ingredientContent[j].classList.add('hide')
				}
			}
		} else if (svgIcon[i].classList.contains('romaine-icon') && svgIcon[i].classList.contains('active')) {
			for (let j = 0; j < ingredientContent.length; j++) {
				if (ingredientContent[j].classList.contains('romaine')) {
					ingredientContent[j].classList.remove('hide')
				} else {
					ingredientContent[j].classList.add('hide')
				}
			}
		} else if (svgIcon[i].classList.contains('pineapple-icon') && svgIcon[i].classList.contains('active')) {
			for (let j = 0; j < ingredientContent.length; j++) {
				if (ingredientContent[j].classList.contains('pineapple')) {
					ingredientContent[j].classList.remove('hide')
				} else {
					ingredientContent[j].classList.add('hide')
				}
			}
		} else if (svgIcon[i].classList.contains('mint-icon') && svgIcon[i].classList.contains('active')) {
			for (let j = 0; j < ingredientContent.length; j++) {
				if (ingredientContent[j].classList.contains('mint')) {
					ingredientContent[j].classList.remove('hide')
				} else {
					ingredientContent[j].classList.add('hide')
				}
			}
		} else if (svgIcon[i].classList.contains('lime-icon') && svgIcon[i].classList.contains('active')) {
			for (let j = 0; j < ingredientContent.length; j++) {
				if (ingredientContent[j].classList.contains('lime')) {
					ingredientContent[j].classList.remove('hide')
				} else {
					ingredientContent[j].classList.add('hide')
				}
			}
		} else if (svgIcon[i].classList.contains('lemon-icon') && svgIcon[i].classList.contains('active')) {
			for (let j = 0; j < ingredientContent.length; j++) {
				if (ingredientContent[j].classList.contains('lemon')) {
					ingredientContent[j].classList.remove('hide')
				} else {
					ingredientContent[j].classList.add('hide')
				}
			}
		} else if (svgIcon[i].classList.contains('kale-icon') && svgIcon[i].classList.contains('active')) {
			for (let j = 0; j < ingredientContent.length; j++) {
				if (ingredientContent[j].classList.contains('kale')) {
					ingredientContent[j].classList.remove('hide')
				} else {
					ingredientContent[j].classList.add('hide')
				}
			}
		} else if (svgIcon[i].classList.contains('jalapeno-icon') && svgIcon[i].classList.contains('active')) {
			for (let j = 0; j < ingredientContent.length; j++) {
				if (ingredientContent[j].classList.contains('jalapeno')) {
					ingredientContent[j].classList.remove('hide')
				} else {
					ingredientContent[j].classList.add('hide')
				}
			}
		} else if (svgIcon[i].classList.contains('honeydew-icon') && svgIcon[i].classList.contains('active')) {
			for (let j = 0; j < ingredientContent.length; j++) {
				if (ingredientContent[j].classList.contains('honeydew')) {
					ingredientContent[j].classList.remove('hide')
				} else {
					ingredientContent[j].classList.add('hide')
				}
			}
		} else if (svgIcon[i].classList.contains('ginger-icon') && svgIcon[i].classList.contains('active')) {
			for (let j = 0; j < ingredientContent.length; j++) {
				if (ingredientContent[j].classList.contains('ginger')) {
					ingredientContent[j].classList.remove('hide')
				} else {
					ingredientContent[j].classList.add('hide')
				}
			}
		} else if (svgIcon[i].classList.contains('cucumber-icon') && svgIcon[i].classList.contains('active')) {
			for (let j = 0; j < ingredientContent.length; j++) {
				if (ingredientContent[j].classList.contains('cucumber')) {
					ingredientContent[j].classList.remove('hide')
				} else {
					ingredientContent[j].classList.add('hide')
				}
			}
		} else if (svgIcon[i].classList.contains('celery-icon') && svgIcon[i].classList.contains('active')) {
			for (let j = 0; j < ingredientContent.length; j++) {
				if (ingredientContent[j].classList.contains('celery')) {
					ingredientContent[j].classList.remove('hide')
				} else {
					ingredientContent[j].classList.add('hide')
				}
			}
		} else if (svgIcon[i].classList.contains('basil-icon') && svgIcon[i].classList.contains('active')) {
			for (let j = 0; j < ingredientContent.length; j++) {
				if (ingredientContent[j].classList.contains('basil')) {
					ingredientContent[j].classList.remove('hide')
				} else {
					ingredientContent[j].classList.add('hide')
				}
			}
		} else if (svgIcon[i].classList.contains('apple-icon') && svgIcon[i].classList.contains('active')) {
			for (let j = 0; j < ingredientContent.length; j++) {
				if (ingredientContent[j].classList.contains('apple')) {
					ingredientContent[j].classList.remove('hide')
				} else {
					ingredientContent[j].classList.add('hide')
				}
			}
		}
	}
}

function contentDisplay () {
// hide ingredient content on juice change

  for (var i = 0; i < ingredientContent.length; i++) {
    if ( ingredientContent[i].classList.contains('hide') ) {
    } else {
      ingredientContent[i].classList.add('hide')
    }
  }

  for (var i = 0; i < iconChild.length; i++) {
    if (iconChild[i].classList.contains('active') && iconChild[i].classList.contains('apple-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('apple')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (iconChild[i].classList.contains('active') && iconChild[i].classList.contains('basil-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('basil')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (iconChild[i].classList.contains('active') && iconChild[i].classList.contains('blackberry-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('blackberry')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (iconChild[i].classList.contains('active') && iconChild[i].classList.contains('celery-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('celery')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (iconChild[i].classList.contains('active') && iconChild[i].classList.contains('cucumber-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('cucumber')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (iconChild[i].classList.contains('active') && iconChild[i].classList.contains('ginger-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('ginger')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (iconChild[i].classList.contains('active') && iconChild[i].classList.contains('honeydew-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('honeydew')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (iconChild[i].classList.contains('active') && iconChild[i].classList.contains('jalapeno-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('jalapeno')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (iconChild[i].classList.contains('active') && iconChild[i].classList.contains('kale-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('kale')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (iconChild[i].classList.contains('active') && iconChild[i].classList.contains('lemon-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('lemon')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (iconChild[i].classList.contains('active') && iconChild[i].classList.contains('lime-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('lime')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (iconChild[i].classList.contains('active') && iconChild[i].classList.contains('mint-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('mint')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (iconChild[i].classList.contains('active') && iconChild[i].classList.contains('pineapple-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('pineapple')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (iconChild[i].classList.contains('active') && iconChild[i].classList.contains('raspberry-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('raspberry')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (iconChild[i].classList.contains('active') && iconChild[i].classList.contains('romaine-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('romaine')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (iconChild[i].classList.contains('active') && iconChild[i].classList.contains('spinach-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('spinach')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (iconChild[i].classList.contains('active') && iconChild[i].classList.contains('strawberry-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('strawberry')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (iconChild[i].classList.contains('active') && iconChild[i].classList.contains('tangerine-icon')) {
      for (var j = 0; j < ingredientContent.length; j++) {
        if (ingredientContent[j].classList.contains('tangerine')) {
          ingredientContent[j].classList.remove('hide')
        } else {
          ingredientContent[j].classList.add('hide')
        }
      }
    } else if (iconChild[i].classList.contains('active') && iconChild[i].classList.contains('watermelon-icon')) {
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
carousel.addEventListener('touchend', ingredientColor, false)
carousel.addEventListener('touchmove', function () {
  setTimeout(function () {
    ingredientColor()
    console.log('delay')
  }, 500)
})

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


// add active class for ingredients/nutrition header

// display correct nutrition label on click and hide all ingredients

var ingredientTab = document.getElementById('ingredient-tab')
var nutritionTab = document.getElementById('nutrition-tab')
var ingredientH2 = document.querySelectorAll('.header h2')
var parent = document.querySelector('.header')

parent.addEventListener('click', handler, false)
carousel.addEventListener('touchend', handler, false)
carousel.addEventListener('touchmove', function () {
  setTimeout(function () {
    handler()
    console.log('delay')
  }, 500)
})

function handler (e) {
  if (e.target !== e.currentTarget) {
    for (var i = 0; i < ingredientH2.length; i++) {
      ingredientH2[i].classList.remove('active')
    }
    e.target.classList.add('active')
  }
  e.stopPropagation()
}

parent.addEventListener('click', iconLabelDisplay, false)
carousel.addEventListener('touchend', iconLabelDisplay, false)
carousel.addEventListener('touchmove', function () {
  setTimeout(function () {
    iconLabelDisplay()
    console.log('delay')
  }, 500)
})

function iconLabelDisplay () {
  var icons = document.getElementById('icons')
  var labels = document.getElementById('nutrition-labels')
  if (nutritionTab.classList.contains('active')) {
    icons.classList.add('hide')
    labels.classList.remove('hide')
  } else if (ingredientTab.classList.contains('active')) {
    icons.classList.remove('hide')
    labels.classList.add('hide')
  }
}

carousel.addEventListener('click', labelDisplay, false)
window.addEventListener('load', labelDisplay, false)

function labelDisplay () {
  var carouselImage = document.querySelectorAll('#product-image .carousel-cell')
  var labels = document.getElementsByClassName('labels')

  console.log('labels')

  for (var i = 0; i < carouselImage.length; i++) {
    if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('s-s-veggie')) {
      for (var j = 0; j < labels.length; j++) {
        if (labels[j].classList.contains('s-s-veggie')) {
          labels[j].classList.remove('hide')
        } else {
          labels[j].classList.add('hide')
        }
      }
    } else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('mainstay-green')) {
      for (var j = 0; j < labels.length; j++) {
        if (labels[j].classList.contains('mainstay-green')) {
          labels[j].classList.remove('hide')
        } else {
          labels[j].classList.add('hide')
        }
      }
    } else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('dockside-sunrise')) {
      for (var j = 0; j < labels.length; j++) {
        if (labels[j].classList.contains('dockside-sunrise')) {
          labels[j].classList.remove('hide')
        } else {
          labels[j].classList.add('hide')
        }
      }
    } else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('starboard-strawberry')) {
      for (var j = 0; j < labels.length; j++) {
        if (labels[j].classList.contains('starboard-strawberry')) {
          labels[j].classList.remove('hide')
        } else {
          labels[j].classList.add('hide')
        }
      }
    } else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('harbor-voyage')) {
      for (var j = 0; j < labels.length; j++) {
        if (labels[j].classList.contains('harbor-voyage')) {
          labels[j].classList.remove('hide')
        } else {
          labels[j].classList.add('hide')
        }
      }
    } else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('watermelon-waves')) {
      for (var j = 0; j < labels.length; j++) {
        if (labels[j].classList.contains('watermelon-waves')) {
          labels[j].classList.remove('hide')
        } else {
          labels[j].classList.add('hide')
        }
      }
    } else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('sailors-delight')) {
      for (var j = 0; j < labels.length; j++) {
        if (labels[j].classList.contains('sailors-delight')) {
          labels[j].classList.remove('hide')
        } else {
          labels[j].classList.add('hide')
        }
      }
    } else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('anchor-case')) {
      for (var j = 0; j < labels.length; j++) {
        if (labels[j].classList.contains('anchor-case')) {
          labels[j].classList.remove('hide')
        } else {
          labels[j].classList.add('hide')
        }
      }
    } else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('compass-case')) {
      for (var j = 0; j < labels.length; j++) {
        if (labels[j].classList.contains('compass-case')) {
          labels[j].classList.remove('hide')
        } else {
          labels[j].classList.add('hide')
        }
      }
    } else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('crew-case')) {
      for (var j = 0; j < labels.length; j++) {
        if (labels[j].classList.contains('crew-case')) {
          labels[j].classList.remove('hide')
        } else {
          labels[j].classList.add('hide')
        }
      }
    } else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('lighthouse-case')) {
      for (var j = 0; j < labels.length; j++) {
        if (labels[j].classList.contains('lighthouse-case')) {
          labels[j].classList.remove('hide')
        } else {
          labels[j].classList.add('hide')
        }
      }
    }
  }
}

carousel.addEventListener('click', hideCaseHeader, false)
window.addEventListener('load', hideCaseHeader, false)
carousel.addEventListener('touchend', hideCaseHeader, false)
carousel.addEventListener('touchmove', function () {
  setTimeout(function () {
    hideCaseHeader()
    console.log('delay')
  }, 500)
})

function hideCaseHeader () {
  console.log('hide header')

  var ingredientsParent = document.getElementById('ingredients')
  var ingredientHeader = document.querySelector('#ingredients .header')

  if (ingredientsParent.classList.contains('crew-case')) {
    ingredientHeader.classList.add('hide')
  } else if (ingredientsParent.classList.contains('compass-case')) {
    ingredientHeader.classList.add('hide')
  } else if (ingredientsParent.classList.contains('lighthouse-case')) {
    ingredientHeader.classList.contains('hide')
  } else if (ingredientsParent.classList.contains('anchor-case')) {
    ingredientHeader.classList.add('hide')
  } else {
    ingredientHeader.classList.remove('hide')
  }
}
