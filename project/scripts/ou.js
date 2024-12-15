const outfitData = [
    
        {
            image: "images/4months.webp",
            caption: "Outfit 1",
            location: "Misawa",
            age: "4 ",
            season: "Fall",
            fashionType: "Casual",
            babyName: "Abby&Lucas",
            alt: "Abby and Lucas wearing a casual fall outfit"
        },
        
        {
            image: "images/princess2.webp",
            caption: "Little princess",
            location: "Misawa",
            age: "2 ",
            season: "Summer",
            fashionType: "Casual",
            babyName: "Abby",
            alt: "Abby chilling in pink"
        },
        {
            image: "images/formal1.webp",
            caption: "Ready to party",
            location: "Misawa",
            age: "4 ",
            season: "Fall",
            fashionType: "Formal",
            babyName: "Abby&Lucas",
            alt: "Abby and Lucas wearing a formal white outfit"
        },
        {
            image: "images/lucasnewborn.webp",
            caption: "Newborn Lucas",
            location: "Hawaii",
            age: "0",
            season: "Summer",
            fashionType: "Casual",
            babyName: "Lucas",
            alt: "Just out of the womb Lucas"
        },
        {
            image: "images/abbynewborn.webp",
            caption: "Newborn Abby",
            location: "Hawaii",
            age: "0",
            season: "Summer",
            fashionType: "Casual",
            babyName: "Abby",
            alt: "Just out of the womb Abby"
        },
        {
            image: "images/4thjuly.webp",
            caption: "Independence Day",
            location: "Hawaii",
            age: "0 ",
            season: "Summer",
            fashionType: "Formal",
            babyName: "Abby&Lucas",
            alt: "Celebration 4th of July"
        },
        {
            image: "images/yummz.webp",
            caption: "Sauces",
            location: "Misawa",
            age: "2 ",
            season: "Summer",
            fashionType: "Casual",
            babyName: "Abby&Lucas",
            alt: "Mustard and Ketchup"
        },
        {
            image: "images/abbyyellow.webp",
            caption: "Princess in yellow",
            location: "Misawa",
            age: "2 ",
            season: "Summer",
            fashionType: "Casual",
            babyName: "Abby",
            alt: "Abby chilling in yellow"
        },
        {
            image: "images/sportyboy.webp",
            caption: "Sport outfit",
            location: "Misawa",
            age: "2 ",
            season: "Summer",
            fashionType: "Casual",
            babyName: "Abby",
            alt: "Lucas in a sport outfit"
        },
        // Add at least 24 entries here...
    
];

// Filter function for all filters combined
function filterImages() {
    const filterValue = document.getElementById("filterDropdown").value;

    let filteredOutfits = outfitData;

    if (filterValue.startsWith('age_')) {
        const age = filterValue.replace('age_', '');
        filteredOutfits = filteredOutfits.filter(outfit => outfit.age == age);
    } else if (filterValue.startsWith('location_')) {
        const location = filterValue.replace('location_', '').toLowerCase();
        filteredOutfits = filteredOutfits.filter(outfit => outfit.location.toLowerCase() === location);
    } else if (filterValue.startsWith('fashion_')) {
        const fashionType = filterValue.replace('fashion_', '').toLowerCase();
        filteredOutfits = filteredOutfits.filter(outfit => outfit.fashionType.toLowerCase() === fashionType);
    } else if (filterValue.startsWith('name_')) {
        const babyName = filterValue.replace('name_', '');
        filteredOutfits = filteredOutfits.filter(outfit => outfit.babyName === babyName);
    }

    displayOutfits(filteredOutfits);
}


// Display function to render images and info
function displayOutfits(outfits) {
    const container = document.getElementById("outfit-cards-container");
    container.innerHTML = ""; // Clear previous content

    outfits.forEach(outfit => {
        const card = document.createElement("div");
        card.classList.add("outfit-card");

        card.innerHTML = `
            <img src="${outfit.image}" alt="${outfit.caption}" />
            <h2>${outfit.caption}</h2>
            <div class="info">
                <p><strong>Location:</strong> ${outfit.location}</p>
                <p><strong>Age:</strong> ${outfit.age} months</p>
                <p><strong>Season:</strong> ${outfit.season}</p>
                <p><strong>Fashion Type:</strong> ${outfit.fashionType}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Call the display function initially to show all images
window.onload = function () {
    displayOutfits(outfitData);  // Display all outfits initially
};

document.addEventListener("DOMContentLoaded", function() {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");

    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    
    lastModifiedSpan.textContent = "Last Modification: " + document.lastModified;
});
// JavaScript for the hamburger menu toggle
const menuButton = document.getElementById("menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", function() {
    navigation.classList.toggle("open");  // Toggle the 'open' class on the navigation
    menuButton.classList.toggle("open");  // Toggle the 'open' class on the menu button to change the icon to 'X'
});

const form = document.getElementById('feedbackForm');
        const thankYouMessage = document.getElementById('thankYouMessage');

        // Handle form submission
        form.addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent the form from submitting normally
            form.reset();  // Reset the form fields
            thankYouMessage.style.display = 'block';  // Show the thank you message
        });
