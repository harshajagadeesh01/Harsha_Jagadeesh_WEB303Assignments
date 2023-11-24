(function($) {
    $.fn.customPhotoViewer = function() {
      return this.each(function() {
        // Photo viewer code goes here
        // Add this code inside your plugin
$('.thumbnail-anchor').on('click', 'img', function() {
    var thumbnailSrc = $(this).attr('src');
    $('.photo-box').attr('href', thumbnailSrc);
});

        // You can refer to the provided class example for building the plugin
      });
    };
  })(jQuery);
  