
var createAlbumRow = function() {

  var template = 
      '<div class="col-md-2">'
    + ' <div class="thumbnail">'
    + '   <img src="/images/album-placeholder.png">'
    + ' </div>'
    + ' <div class="album-header-placeholder">'
    + '   <a href="/album" class="album-title-collection">Album Name</a>'
    + '   <br>'
    + '   <a href="/album" class="album-artist collection">Artist Name</a>'
    + '   <p class="album-meta-info collection">X Songs</p>'
    + ' </div> '
    + '</div>'
    ;

    return $(template);
};


if (document.URL.match(/\/collection/)) {
  // Wait until the HTML is fully processed.
  $(document).ready(function() {
    for (var i = 0; i < 33; i++) {
      $('.album-header-information').append(createAlbumRow());
    };
    
  });
}
