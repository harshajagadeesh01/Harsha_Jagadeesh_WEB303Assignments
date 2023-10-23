/*
    Assignment 05
    Student Name: Harsha Jagadeesh
    Student Number: 0810531
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
  new ContentItem(0, "Assassins Creed", "Description: The series blends historical fiction, action-adventure gameplay, and science fiction elements. Each game typically features a different historical setting and a new protagonist", "Category: Action Adventure"),
  new ContentItem(1, "Far Cry", "Far Cry games are usually set in Jungle or Wilderness. It is an open world game that gives you the freedom to explore and drive vehicles around while diving into some thriller actions sequences.", "Category: Action Adventure"),
  new ContentItem(2, "The Division", "The Division is a third person open world shooter that lets you team up with upto 4 co-op players online to complete missions and activities together with your team.", "Category: Role Playing Adventure"),
  new ContentItem(3, "Watch Dogs", "Watch dogs is a open world get that lets you hack into city os, electronic objects and vehicles", "Category: Open World Adventure"),
  new ContentItem(4, "Tom Clancy's", "Tom Clancy's games are a tactical shooter that lets you take down enemies using Stealth and tactical gadgets and equipments.", "Category: Tactical Adventure"),
];

$(document).ready(function () {
  const contentItemList = $("#content-item-list");

  contentItems.forEach((item) => {
    const itemHTML = item.toString();
    contentItemList.append(itemHTML);
  });

  $(".content-item-wrapper").css({
    border: "5px solid #953", 
    width: "350px",
    padding: "20px",
    margin: "20px auto",

  });

 $("h2:contains('THEME TITLE HERE')").text("Ubisoft Games");
 
});



