//Assignment 6
//Student name: Harsha Jagadeesh
//Student Number: 0810531


$(document).ready(function() {
    $('.accordion-header').click(function() {
        $(this).next('.accordion-content').slideToggle();
        $('.accordion-content').not($(this).next('.accordion-content')).slideUp();
    });

    $('.tab-links a').click(function(e) {
        e.preventDefault();
        var tabId = $(this).attr('href');
        $('.tab-content').hide();
        $(tabId).show();
    });
});
