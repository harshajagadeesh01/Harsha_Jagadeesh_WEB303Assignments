$(document).ready(function () {
    // Function to load content into the #content div using AJAX
    function loadContent(filename) {
        $.ajax({
            type: "GET",
            url: filename,
            dataType: "html",
            success: function (data) {
                // Load the content into #content div
                $("#content").html(data);
            },
            error: function () {
                alert("Error loading content.");
            }
        });
    }

    // Event handlers for the links
    $("#prospect").on("click", function (e) {
        e.preventDefault();
        loadContent("prospect.html");
    });

    $("#convert").on("click", function (e) {
        e.preventDefault();
        loadContent("convert.html");
    });

    $("#retain").on("click", function (e) {
        e.preventDefault();
        loadContent("retain.html");
    });
});
