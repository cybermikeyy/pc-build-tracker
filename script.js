console.log("JavaScript connected!");

// select HTML elements
const formData = document.querySelector("#form");
const compNameData = document.querySelector("#compName");
const catData = document.querySelector("#cat");
const priceData = document.querySelector("#price");
const buildListData = document.querySelector("#buildList");
const noCommentData = document.querySelector("#noComment")

// Handle form submisiion
formData.addEventListener("submit", function (event) {
    event.preventDefault();  // this line prevents the page from refreshing after submission
    const componentName = compNameData.value.trim();
    const category = catData.value.trim();
    const price = priceData.value;

    if (componentName === "" || category === "" || price === "") {
         alert("Field(s) cannot be left empty.");
         return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = `${componentName} - ${category} - $${price}`;
    buildListData.append(listItem);
    formData.reset();  // clears the boxes after components are added
    noCommentData.textContent = "";
});

