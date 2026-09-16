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

    if (price <= 0) {
        alert("Price must be greater than $0, scene?");
        return;
    }

    totalPrice += price;

    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");  // intentionally typed delete-button as opposed to deleteButton to match CSS naming conventions (kebab-case LOL)
    deleteButton.textContent = "Delete";
    listItem.textContent = `${componentName} - ${category} - $${price.toFixed(2)}`;
    totalDisplayData.textContent = `Total: $${totalPrice.toFixed(2)}`;
    listItem.append(deleteButton);
    buildListData.append(listItem);
    formData.reset();  // clears the boxes after components are added
    noCommentData.textContent = "";  // clears the 'No components added yet...' line when item is added to list
});

