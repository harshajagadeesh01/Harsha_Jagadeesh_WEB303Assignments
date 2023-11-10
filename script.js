$(document).ready(function () {
  // Fetch JSON data using jQuery AJAX
  $.ajax({
    url: 'data.json',
    dataType: 'json',
    success: function (data) {
      // Call a function to populate the table with the JSON data
      populateTable(data);
    }
  });

  // Initial sort column and order
  var sortColumn = 'firstName';
  var sortOrder = 'asc';

  // Function to populate the table with JSON data
  function populateTable(data) {
    var tableBody = $('#characterTable tbody');
    tableBody.empty(); // Clear existing rows

    // Loop through the JSON data and append rows to the table
    $.each(data, function (index, character) {
      var row = '<tr>';
      row += '<td>' + character.firstName + '</td>';
      row += '<td>' + character.lastName + '</td>';
      // Add other columns here
      row += '<td>' + character.date + '</td>';
      row += '</tr>';

      tableBody.append(row);
    });

    // Add event listener for sorting when a heading is clicked
    $('.sort').on('click', function (e) {
      e.preventDefault();
      var clickedColumn = $(this).data('column');

      // Toggle sort order on successive clicks
      if (sortColumn === clickedColumn) {
        sortOrder = (sortOrder === 'asc') ? 'desc' : 'asc';
      } else {
        sortColumn = clickedColumn;
        sortOrder = 'asc';
      }

      // Call a function to sort and update the table
      sortTable();
    });

    // Initial sorting when the page loads
    sortTable();
  }

  // Function to sort and update the table
  function sortTable() {
    var rows = $('#characterTable tbody tr').get();

    rows.sort(function (a, b) {
      var keyA = $(a).children('td').eq(sortOrder === 'asc' ? 0 : 1).text();
      var keyB = $(b).children('td').eq(sortOrder === 'asc' ? 0 : 1).text();

      // Compare based on the selected column and sort order
      if (keyA < keyB) return sortOrder === 'asc' ? -1 : 1;
      if (keyA > keyB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    // Remove existing rows and append the sorted rows
    $.each(rows, function (index, row) {
      $('#characterTable tbody').append(row);
    });

    // Update chevron indicators
    $('.sort').html(function (i, html) {
      return html.replace(/▲|▼/, '');
    });

    var chevron = sortOrder === 'asc' ? '&#x25B2;' : '&#x25BC;';
    $('.sort[data-column="' + sortColumn + '"]').append(' ' + chevron);
  }
});
