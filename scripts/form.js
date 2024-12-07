document.addEventListener("DOMContentLoaded", function() {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");

    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    lastModifiedSpan.textContent = "Last Modification: " + document.lastModified;
});


document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('product-select'); // Reference to the <select> element

const products = [
    { id: 1, name: "Baby Onesie - Newborn" },
    { id: 2, name: "Baby Romper - 3-6 Months" },
    { id: 3, name: "Baby Blanket - Soft Cotton" },
    { id: 4, name: "Baby Hat - Wool Knit" },
    { id: 5, name: "Baby Shoes - 6-12 Months" }
];


  products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;  // Set the product ID as the value of the option
        option.textContent = product.name;  // Set the product name as the display text
        productSelect.appendChild(option);  // Append the option to the <select> element
    });
    form.addEventListener('submit', function(event) {
        let checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);
        if (!checkedOne) {
            event.preventDefault();
            alert('Please check at least one feature.');
        } else {
            // Increment review count in localStorage
            let reviewCount = localStorage.getItem('reviewCount');
            if (!reviewCount) {
                reviewCount = 0;
            }
            reviewCount = parseInt(reviewCount) + 1;
            localStorage.setItem('reviewCount', reviewCount);
        }
    });

    
    
})