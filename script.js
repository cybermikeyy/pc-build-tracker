console.log("JavaScript connected!");

// select HTML elements
const formData = document.querySelector("#form");
const compNameData = document.querySelector("#compName");
const catData = document.querySelector("#cat");
const priceData = document.querySelector("#price");
const buildListData = document.querySelector("#buildList");
const noCommentData = document.querySelector("#noComment");
const totalDisplayData = document.querySelector("#totalDisplay");

// Track build total
let totalPrice = 0;

// Handle form submision
formData.addEventListener("submit", function (event) {
    event.preventDefault();  // this line prevents the page from refreshing after submission
    const componentName = compNameData.value.trim();
    const category = catData.value.trim();
    const price = Number(priceData.value);

    if (componentName === "" || category === "" || priceData.value === "") {
         alert("Field(s) cannot be left empty.");
         return;
    }

    totalPrice += price;

    const listItem = document.createElement("li");
    listItem.textContent = `${componentName} - ${category} - $${price}`;
    totalDisplayData.textContent = `Total: $${totalPrice}`;
    buildListData.append(listItem);
    formData.reset();  // clears the boxes after components are added
    noCommentData.textContent = "";  // clears the 'No components added yet...' line when item is added to list
});

