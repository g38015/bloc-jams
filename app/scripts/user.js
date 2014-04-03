$(document).ready(function() {

  $('#home').show();

  var changeDiv = $('#home');
  var changeCards = $('#cards');

  
  $('#btn-home').click(function() {
    $('#empty').html(changeDiv);
  });


  $('#btn-cards').click(function() {
    $('#empty').html(changeCards);
  });


});