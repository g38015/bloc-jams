$(document).ready(function() {

  var changeDiv = null;

  $('#btn-home').click(function() {
    changeDiv = $('#cards').detach();
    $('#btn-cards').removeAttr('disabled');
  });

  $('#btn-cards').click(function() {
    $('#test-empty').html(changeDiv);
    $('#btn-home').removeAttr('disabled');
  });

});