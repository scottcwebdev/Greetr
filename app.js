var g = G$('John', 'Doe');

$("#login").click(function() {

  var loginGrtr = G$('Scott', 'Campbell');

  $('#logindiv').hide();

  loginGrtr
    .setLang($('#lang').val())
    .HTMLGreeting('#greeting', true)
    .log();

});
