
var createAlbumRow = function() {

  var template = 
      '<div class="col-md-2">'
    + ' <div class="thumbnail [...]">'
    + '   <div class="collection-album-image-container [...]">'
    + '     <img src="/images/album-placeholder.png">'
    + '   </div>'
    + ' </div>'
    + ' <div class="caption [...]">'
    + '   <a href="/album" class="album-title-collection">Album Name</a>'
    + '   <br>'
    + '   <a href="/album" class="album-artist collection">Artist Name</a>'
    + '   <p class="album-meta-info collection">X Songs</p>'
    + ' </div> '
    + '</div>'
    ;

    return $(template);
};

var buildAlbumOverlay = function(albumURL) {

  var template =
      '<div class="collection-album-image-overlay">'
    + '  <div class="collection-overlay-content">'
    + '    <a class="collection-overlay-button" href="' + albumURL + '">'
    + '      <i class="fa fa-play"></i>'
    + '    </a>'
    + '    &nbsp;'
    + '    <a class="collection-overlay-button">'
    + '      <i class="fa fa-plus"></i>'
    + '    </a>'
    + '  </div>'
    + '</div>'
    ;

  return $(template); // Generate the DOM element with jQuery
};

var updateCollectionView = function() {

    for (var i = 0; i < 33; i++) {
      $('.album-header-information').append(createAlbumRow());
    };

};

var overlayView = function() {

   var onHover = function(event) {
    // Add the overlay to image container.
    //  - 'this' is a reference to the object whose `hover` action was triggered for.
    //  - '$(this)' returns the jQuery wrapped object for the element that was hovered over.
      $(this).append(buildAlbumOverlay("/album"));
    };

    // Function that will be called whenever an album image is hovered over.
    var offHover = function(event) {
    // Remove the overlay from the album image container.
      $(this).find('.collection-album-image-container').remove();
    };

    // for loop that builds your thumbnails.
    for (var i = 0; i < 33; i++) {

      var $newThumbnail = buildAlbumOverlay('/album');


      // Code to build album thumbnail.;
      // Find the image container in the thumbnail and add a hover event handler with
      //  our event handlers for on/off hover.
      //  - The jQuery documentation: http://api.jquery.com/hover/
      $newThumbnail.find('.collection-album-image-container').hover(onHover, offHover);
      $('.collection-album-image-container').append($newThumbnail);
    };

};

var overlay = function() {

  $( ".collection-album-image-container" ).hover(
  function() {
    $( this ).append( buildAlbumOverlay('/album'));
  }, function() {
    $( this ).find( ".collection-album-image-overlay" ).remove();
  }
);


};


if (document.URL.match(/\/collection/)) {
  // Wait until the HTML is fully processed.
  $(document).ready(function() {

     updateCollectionView();
     //overlayView();
     overlay();

    
  }); //document.ready
} // if
