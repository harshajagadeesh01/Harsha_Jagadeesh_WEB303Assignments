$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        e.preventDefault();
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });

        // Modal code from class example
        var $modal = $('<div class="modal">').append($content);
        var $closeButton = $('<button class="close-button">Close</button>');

        // Add heading to the modal
        var galleryName = $('h1').text();
        $modal.prepend('<h2>' + galleryName + '</h2>');

        // Append close button to the modal
        $modal.append($closeButton);

        // Append modal to the body
        $('body').append($modal);

        // Show modal
        $modal.show();

        // Close modal on close button click
        $closeButton.on('click', function() {
            $modal.hide().remove();
        });
    });
});
