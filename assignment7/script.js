$(document).ready(function () {
    // Initial data load
    getData();

    // Sorting state
    var sortColumn = null;
    var sortOrder = 'asc';

    // Event handler for column heading click
    $('th').click(function () {
        var clickedColumn = $(this).data('field');
        if (sortColumn === clickedColumn) {
            // Change sorting order
            sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        } else {
            // Change to a new column for sorting
            sortColumn = clickedColumn;
            sortOrder = 'asc';
        }

        // Update chevrons
        $('th').find('span').remove();
        var chevron = sortOrder === 'asc' ? '&#x25B2;' : '&#x25BC;';
        $(this).append('<span style="margin-left: 5px;">' + chevron + '</span>');

        // Sort and refresh data
        sortData();
    });

    function sortData() {
        var rows = $('#characters-data tr').get();

        rows.sort(function (a, b) {
            var keyA = $(a).children('td').eq(getColumnIndex(sortColumn)).text().toUpperCase();
            var keyB = $(b).children('td').eq(getColumnIndex(sortColumn)).text().toUpperCase();

            if (sortOrder === 'asc') {
                return (keyA > keyB) ? 1 : -1;
            } else {
                return (keyA < keyB) ? 1 : -1;
            }
        });

        // Re-append sorted rows to the table
        $('#characters-data').empty();
        $.each(rows, function (index, row) {
            $('#characters-data').append(row);
        });
    }

    function getColumnIndex(columnName) {
        // Helper function to get the index of the column by its name
        return $('th[data-field="' + columnName + '"]').index();
    }

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

                // Add chevron to the default sorting column
                $('th[data-field="firstName"]').append('<span style="margin-left: 5px;">&#x25B2;</span>');
                // The default sorting column is 'firstName'
                sortColumn = 'firstName';
            }
        });
    }
});
