/*
    Assignment 05
*/

$(document).ready(function () {
    class ContentItem {
        constructor(id, name, description, categoryGenre) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.categoryGenre = categoryGenre;
        }

        updateContentItem(id, name, description, categoryGenre) {
            if (this.id === id) {
                if (name !== null) {
                    this.name = name;
                }
                if (description !== null) {
                    this.description = description;
                }
                if (categoryGenre !== null) {
                    this.categoryGenre = categoryGenre;
                }
            }
        }

        toString() {
            return `
            <div class="content-item-wrapper" id="content-item-${this.id}">
                <h2>${this.name}</h2>
                <p>${this.description}</p>
                <div>${this.categoryGenre}</div>
            </div>
        `;
        }
    }

    const contentItems = [
        new ContentItem(0, "Toronto", "Toronto is the most populous city in Canada and the capital city of the Canadian province of Ontario.", "City"),
        new ContentItem(1, "Vancouver", "Vancouver is a major city in western Canada, located in the Lower Mainland region of British Columbia.", "City"),
        new ContentItem(2, "New York", "New York, often called New York City or NYC, is the most populous city in the United States.", "City"),
        new ContentItem(3, "Barcelona", "It is the capital and largest city of the autonomous community of Catalonia, as well as the second-most populous municipality of Spain", "City"),
        new ContentItem(4, "Mumbai", "Mumbai is the capital city of the Indian state of Maharashtra. Mumbai is the de facto financial centre and the most populous city of India", "City"),
    ];

    const themeTitle = "My Favorite Cities"; 
    $('h2').text(themeTitle);

    const contentList = $('#content-item-list');
    contentItems.forEach(contentItem => {
        const itemHTML = contentItem.toString();
        contentList.append(itemHTML);
    });

    $('.content-item-wrapper').css({
        border: '1px solid #000',
        width: '300px',
        padding: '10px',
        margin: '10px auto',
    });

    //Bonus
    $('#updateSuccessfulButton').click(function () {
        contentItems[0].updateContentItem(0, "Manchester", null, null);
        $('#content-item-0 h2').text(contentItems[0].name);
    });

    $('#updateUnsuccessfulButton').click(function () {
        contentItems[1].updateContentItem(0, "Berlin", null, null);
        $('#content-item-1 h2').text(contentItems[1].name);
    });


});


