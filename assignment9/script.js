$(document).ready(function () {
    // Initial data load
    getData();
    

    // Function to search characters by first name
    window.searchCharacter = function () {
        var searchTerm = $("#search").val().toLowerCase();

        $("#characters-data tr").each(function () {
            var row = $(this);
            var firstName = row.find("td:first-child").text().toLowerCase();

            if (firstName.includes(searchTerm)) {
                row.addClass("highlighted");
            } else {
                row.removeClass("highlighted");
            }
        });
    };



    // Function to filter characters by last name
    window.filterByLastName = function (startLetterA, startLetterZ) {
        $("#characters-data tr").each(function () {
            var row = $(this);
            var lastName = row.find("td:nth-child(2)").text().toUpperCase();

            if (lastName >= startLetterA && lastName <= startLetterZ) {
                row.show();
            } else {
                row.hide();
            }
        });
    };

    // Function to update filter counts
    function updateFilterCounts(characters) {
        var countAM = characters.filter(character => character.lastName.charAt(0).toUpperCase() <= 'M').length;
        var countNZ = characters.filter(character => character.lastName.charAt(0).toUpperCase() > 'M').length;

        $("#countAM").text(countAM);
        $("#countNZ").text(countNZ);
    }






    // Load characters from JSON

    function getData() {
        $.ajax({
            url: 'data.json',
            dataType: 'json',
            success: function (data) {
                $('#characters-data').empty();

                $.each(data, function (index, character) {
                    var row = '<tr>';
                    row += '<td>' + character.firstName + '</td>';
                    row += '<td>' + character.lastName + '</td>';
                    row += '<td>' + character.region + '</td>';
                    row += '<td>' + character.age + '</td>';
                    row += '<td>' + character.date + '</td>';
                    row += '</tr>';

                    $('#characters-data').append(row);
                });


                // displayCharacters(data.characters);
                updateFilterCounts(data);
            }
        });
    }



});
