/*
    Assignment 05
*/
class ContentItem {
  constructor(id, name, description, category) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
  }

  updateContentItem(id, name, description, category) {
    if (id === this.id) {
      if (name !== null) this.name = name;
      if (description !== null) this.description = description;
      if (category !== null) this.category = category;
    }
  }

  toString() {
    return `<div class="content-item-wrapper" id="content-item-${this.id}">
                <h2>${this.name}</h2>
                <p>${this.description}</p>
                <div>${this.category}</div>
            </div>`;
  }
}

const contentItems = [
  new ContentItem(0, "Item 1", "Description 1", "Category 1"),
  new ContentItem(1, "Item 2", "Description 2", "Category 2"),
  new ContentItem(2, "Item 3", "Description 3", "Category 3"),
  new ContentItem(3, "Item 4", "Description 4", "Category 4"),
  new ContentItem(4, "Item 5", "Description 5", "Category 5"),
];

$(document).ready(function () {
  const contentItemList = $("#content-item-list");

  contentItems.forEach((item) => {
    const itemHTML = item.toString();
    contentItemList.append(itemHTML);
  });

  $(".content-item-wrapper").css({
    border: "1px solid #000",
    width: "300px",
    padding: "10px",
    margin: "20px auto",
  });

  // Update the theme title
  $("h2:contains('THEME TITLE HERE')").text("Your Theme Title");
});



