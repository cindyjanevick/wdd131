const outfitData = [
    
        {
            image: "images/4months (1).jpg",
            caption: "Outfit 1",
            location: "Misawa",
            age: "4 ",
            season: "Fall",
            fashionType: "Casual",
            babyName: "Abby&Lucas"
        },
        {
            image: "images/smileyboy.jpg",
            caption: "Smiley Boy",
            location: "Misawa",
            age: "2 ",
            season: "Summer",
            fashionType: "Casual",
            babyName: "Lucas"
        },
        {
            image: "images/princess2.jpg",
            caption: "Little princess",
            location: "Misawa",
            age: "2 ",
            season: "Summer",
            fashionType: "Casual",
            babyName: "Abby"
        },
        {
            image: "images/formal1.jpg",
            caption: "Ready to party",
            location: "Misawa",
            age: "4 ",
            season: "Fall",
            fashionType: "Formal",
            babyName: "Abby&Lucas"
        },
        {
            image: "images/lucasnewborn.jpg",
            caption: "Newborn Lucas",
            location: "Hawaii",
            age: "0",
            season: "Summer",
            fashionType: "Casual",
            babyName: "Lucas"
        },
        {
            image: "images/abbynewborn.jpg",
            caption: "Newborn Abby",
            location: "Hawaii",
            age: "0",
            season: "Summer",
            fashionType: "Casual",
            babyName: "Abby"
        },
        {
            image: "images/4thjuly.jpg",
            caption: "Independence Day",
            location: "Hawaii",
            age: "0 ",
            season: "Summer",
            fashionType: "Formal",
            babyName: "Abby&Lucas"
        },
        {
            image: "images/yummz.jpg",
            caption: "Sauces",
            location: "Misawa",
            age: "2 ",
            season: "Summer",
            fashionType: "Casual",
            babyName: "Abby&Lucas"
        },
        {
            image: "images/abbyyellow.jpg",
            caption: "Princess in yellow",
            location: "Misawa",
            age: "2 ",
            season: "Summer",
            fashionType: "Casual",
            babyName: "Abby"
        },
        {
            image: "images/sportyboy.jpg",
            caption: "Sport outfit",
            location: "Misawa",
            age: "2 ",
            season: "Summer",
            fashionType: "Casual",
            babyName: "Abby"
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
