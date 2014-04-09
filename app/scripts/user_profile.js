
var tabsContainerName = ".user-profile";
var changeTabHandler = function(event) {
  $this = $(this);
  $(tabsContainerName + " button.active").removeClass('active');
  $this.addClass('active');
  $('.tab-pane').addClass('hidden');
  selectedTabId = $this.find('a').attr('data-toggle');
  $("#" + selectedTabId).removeClass('hidden');
  event.preventDefault();
};

$(document).ready(function() {

  //TODO remove comment block
  /*var $tabs = $(tabsContainerName + " .pagination button");
  $tabs.click(changeTabHandler);
  $tabs[0].click();*/


  // $('#home').show();

  // var changeDiv = $('#home');
  // var changeCards = $('#cards');

  // $('#btn-home').click(function() {
  //   changeDiv.addClass('hidden');
  //   changeCards.removeClass('hidden');
  //   //$('#empty').html(changeDiv);
  // });

  // $('#btn-cards').click(function() {
  //   //$('#empty').html(changeCards);
  //   changeCards.addClass('hidden');
  //   changeDiv.removeClass('hidden');
  // });


});