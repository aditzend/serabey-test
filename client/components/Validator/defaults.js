$.validator.setDefaults({
  /*invalidHandler : function(e, validator) {
    // 'this' refers to the form
    var errors = validator.numberOfInvalids();
    if (errors) {
      var message = errors == 1 ?
        'Hubo un problema en el campo resaltado.'
           : 'Hubo problemas en los ' + errors + ' campos resaltados.';
      $("div.error span").html(message);
      $("div.error").show();
      console.log(e);
      console.log(message);
    } else {
      $("div.error").hide();
    }
  },*/
  errorPlacement : function(error,element) {
      element.parent("div").addClass("has-error has-feedback");
      $(element).next("span").next("span").html(error);
    },
  highlight: function(element, errorClass, validClass) {
    $(element).parent("div").addClass("has-error has-feedback");
    $(element).next("span").addClass("fa fa-2x fa-remove");

  },
  unhighlight: function(element, errorClass, validClass) {
    //$(element).removeClass(errorClass).addClass(validClass);
    $(element).parent("div").removeClass("has-error has-feedback");
    $(element).next("span").removeClass("fa fa-2x fa-remove");
  }
  });
