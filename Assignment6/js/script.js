$(document).ready(function () {
    $("#accordion1 h3").click(function () {
        $(this).toggleClass("active").next().slideToggle();
        $("#accordion1 h3").not(this).removeClass("active").next().slideUp();
    });

    $("#accordion2 h3").click(function () {
        $(this).toggleClass("active").next().slideToggle();
        $("#accordion2 h3").not(this).removeClass("active").next().slideUp();
    });

    $("#tabs ul li a").click(function (e) {
        e.preventDefault();
        $("#tabs ul li a").removeClass("active");
        $(this).addClass("active");
        var tabId = $(this).attr("href");
        $(".tab-content").hide();
        $(tabId).show();
    });

});
