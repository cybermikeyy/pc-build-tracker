console.log("JavaScript connected!");

// select HTML elements
const formData = document.querySelector("#form");
const compNameData = document.querySelector("#compName");
const catData = document.querySelector("#cat");
const priceData = document.querySelector("#price");

// Handle form submisiion
formData.addEventListener("submit", function (event) {
    event.preventDefault();  // this line prevents the page from refreshing after submission
    const componentName = compNameData.value.trim();
    const category = catData.value.trim();
    const price = priceData.value;

    console.log(componentName);
    console.log(category);
    console.log(price);
});

