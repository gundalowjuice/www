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

// get product data in json
// because IEFE's are cool

(function (window) {
  // create products object and make it a property on the global window object
  var products = window.products || {}

  // get this whole ajax thing going
  var request = new XMLHttpRequest()

  request.open('GET', 'api/juice.json', true)
  request.send(null)
  request.addEventListener('load', function () {
    var data = JSON.parse(request.responseText)

    // throw a few slugs into the console
    // for (var i = 0; i < data.result.length; i++) {
    //   console.log(data.result[i].slug)
    // }

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
      header.classList.remove('harbor-voyage', 'ss-veggie', 'sailors-delight', 'watermelon-waves', 'main-stay')
      header.classList.add('starboard-strawberry')
      addCart.classList.remove('harbor-voyage', 'ss-veggie', 'sailors-delight', 'watermelon-waves', 'main-stay')
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
      header.classList.remove('starboard-strawberry', 'harbor-voyage', 'ss-veggie', 'sailors-delight', 'watermelon-waves', 'main-stay')
      header.classList.add('dockside-sunrise')
      addCart.classList.remove('starboard-strawberry', 'harbor-voyage', 'ss-veggie', 'sailors-delight', 'watermelon-waves', 'main-stay')
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
      header.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'ss-veggie', 'sailors-delight', 'watermelon-waves')
      header.classList.add('mainstay-green')
      addCart.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'ss-veggie', 'sailors-delight', 'watermelon-waves')
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
      header.classList.remove('starboard-strawberry', 'dockside-sunrise', 'ss-veggie', 'watermelon-waves', 'mainstay-green')
      header.classList.add('sailors-delight')
      addCart.classList.remove('starboard-strawberry', 'dockside-sunrise', 'ss-veggie', 'watermelon-waves', 'mainstay-green')
      addCart.classList.add('sailors-delight')
      purchId.value = window.products.data[i].pId
      title.innerHTML = window.products.data[i].title
      price.innerHTML = window.products.data[i].price
      description.innerHTML = window.products.data[i].description
      header.appendChild(title)
      header.appendChild(price)
      div.appendChild(description)
    } // ss-veggie
    else if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('ss-veggie')) {
      if (div.hasChildNodes()) {
        div.removeChild(div.childNodes[2])
        while (header.firstChild) {
          header.removeChild(header.firstChild)
        }
      }
      header.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'mainstay-green', 'sailors-delight', 'watermelon-waves', 'ss-veggie')
      header.classList.add('ss-veggie')
      addCart.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'mainstay-green', 'sailors-delight', 'watermelon-waves', 'ss-veggie')
      addCart.classList.add('ss-veggie')
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
      header.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'mainstay-green', 'sailors-delight', 'ss-veggie')
      header.classList.add('watermelon-waves')
      addCart.classList.remove('starboard-strawberry', 'dockside-sunrise', 'harbor-voyage', 'mainstay-green', 'sailors-delight', 'ss-veggie')
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
      header.classList.remove('starboard-strawberry', 'dockside-sunrise', 'mainstay-green', 'sailors-delight', 'ss-veggie')
      header.classList.add('harbor-voyage')
      addCart.classList.remove('starboard-strawberry', 'dockside-sunrise', 'mainstay-green', 'sailors-delight', 'ss-veggie')
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

var body = document.getElementsByTagName('body')

function writeToDocument () {
  var div = document.getElementById('ajax')  // get parent element
  console.log(window.products.data.length)
  for (var i = 0; i < window.products.data.length; i++) {
    var h2 = document.createElement('h2')
    var p = document.createElement('p')
    h2.innerHTML = window.products.data[i].title
    p.innerHTML = window.products.data[i].slug
    div.appendChild(h2)
    div.appendChild(p)
    console.log('added ' + window.products.data[i].title)
  }
}

function juiceLoad () {
  var carouselImage = document.getElementsByClassName('carousel-cell')
  var div = document.getElementById('ajax')
  for (var i = 0; i < carouselImage.length; i++) {
    if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('starboard-strawberry')) {
      var h2 = document.createElement('h2')
      var p = document.createElement('p')
      h2.innerHTML = window.products.data[i].title
      p.innerHTML = window.products.data[i].description
      div.appendChild(h2)
      div.appendChild(p)
    }
  }
}

// window.addEventListener('load', function (event) {
//   var carouselImage = document.getElementsByClassName('carousel-cell')
//   for (var i = 0; i < carouselImage.length; i++) {
//     if (carouselImage[i].classList.contains('is-selected') && carouselImage[i].classList.contains('starboard-strawberry')) {
//       console.log(yes)
//     }
//   }
// })

function checkJuice () {
  var carouselImage = document.getElementsByClassName('carousel-cell')
  for (var i = 0; i < carouselImage.length; i++) {
    if (carouselImage[i].classList.contains('is-selected')) {
      console.log(carouselImage[i])
    }
  }
}

checkJuice()

// pageLoad()

// function write_letters(){
//     var items = document.getElementById("itemList");
//
//     for (var i = 0; i < alphabet.length; i++ ) {
//         var item = document.createElement("li");
//         item.innerHTML = alphabet[i];
//         items.appendChild(item);
//     }
//
// }

// $(function () {
//     var data = {
//         'CSRF': $('input[name="CRAFT_CSRF_TOKEN"]').val(),
//     };
//
//     $.ajax({
//         'type': 'get',
//         'contentType': 'application/x-www-form-urlencoded; charset=UTF-8',
//         'cache': false,
//         'data': data,
//         'url': 'api/juice.json',
//         'dataType': 'json',
//         'timeout': 50000
//     }).done(function (response) {
//         console.log(response);
//     }).fail(function (error) {
//             // Total fail.
//         });
//     });
//
// var juice = [];
//
//   $.getJSON('api/juice.json', function(data){
//     juice = data;
//   });
