console.log('ready');


$(document).ready(function(){

  checkDisplay();

// Nav drop down

  $('#nav svg').click(function(){
    $('nav').fadeToggle('fast');
    console.log('clicked');
  });

// Basket dropdown

  $('#basket').click(function(){
    $('#basket-dropdown').slideToggle('slow');
  });

});

function checkDisplay(){
  if($('p:nth-of-type(2)').css('display') === 'none'){
    $('#shipping-info').on('click', function(){
        $('p:nth-of-type(2)').slideToggle('slow');
    });
  }
}
