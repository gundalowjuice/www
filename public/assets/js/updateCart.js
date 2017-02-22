$("input[type=button]").on("click", function() {

  var $button = $(this);
  var oldValue = $button.parent().find("input[name=qty]").val();

  if ($button.val() === "+") {
	  var newVal = parseFloat(oldValue) + 1;
	} else {
   // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
  }

  $button.parent().find("input[name=qty]").val(newVal);

});
