
var createAlbumRow = function() {

  var template = 
      '<div class="col-md-2">'
    + ' <div class="thumbnail">'
    + '   <div class="collection-album-image-container">'
    + '     <img src="/images/album-placeholder.png">'
    + '   </div>'
    + ' </div>'
    + ' <div class="caption">'
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


var overlay = function() {

  $('.collection-album-image-container').hover(
    function() {
      $(this).append(buildAlbumOverlay('/album'));
    }, function() {
      $(this).find('.collection-album-image-overlay').remove();
    }
  );

};


if (document.URL.match(/\/collection/)) {
  // Wait until the HTML is fully processed.
  $(document).ready(function() {

     //updateCollectionView();
     overlay();
    
  }); //document.ready
} // if
