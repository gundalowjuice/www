console.log('ready')

$(document).ready(function () {
  checkDisplay()


// $(document).keydown(function(t) {
//   juiceChange()
//   contentDisplay()
//   iconDisplay()
//   ingredient()
//   ingredientColor()
// })

// Initialize flickity

  $('.carousel').flickity({
    cellAlign: 'center',
    wrapAround: true,
    isSelected: true,
    initialIndex: 0
  })

var $carousel = $('#product-image .carousel').flickity()

$carousel.on('settle.flickity', function () {
  ingredientColor()
  activeIcon()
  activeSvg()
  console.log('settle')
})
$carousel.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
  if ( typeof cellIndex == 'number' ) {
    $carousel.flickity( 'selectCell', cellIndex );
  }
});

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
