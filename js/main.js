// WEB303 Assignment 2


document.addEventListener("DOMContentLoaded", function () {
    // Function to load content into the #content div using AJAX
    function loadContent(filename) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", filename, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var contentDiv = document.getElementById("content");

                    // Animate the content div with a fade-out effect
                    contentDiv.style.opacity = "0";
                    
                    setTimeout(function () {
                        // Set the new content and animate with a fade-in effect
                        contentDiv.innerHTML = xhr.responseText;
                        contentDiv.style.opacity = "1";
                    }, 300);
                } else {
                    alert("Error loading content.");
                }
            }
        };

        xhr.send();
    }

    // Event listeners for the links
    document.getElementById("prospect").addEventListener("click", function (e) {
        e.preventDefault();
        loadContent("prospect.html");
    });

    document.getElementById("convert").addEventListener("click", function (e) {
        e.preventDefault();
        loadContent("convert.html");
    });

    document.getElementById("retain").addEventListener("click", function (e) {
        e.preventDefault();
        loadContent("retain.html");
    });
});
