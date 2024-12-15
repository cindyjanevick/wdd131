// Outfit data
const outfitData = [
    {
        image: "images/4months.webp",
        caption: "Outfit 1",
        location: "Misawa",
        age: "4",
        season: "Fall",
        fashionType: "Casual",
        babyName: "Abby&Lucas",
        alt: "Abby and Lucas wearing a casual fall outfit"
    },
    {
        image: "images/princess3.webp",
        caption: "Little princess",
        location: "Misawa",
        age: "2",
        season: "Summer",
        fashionType: "Casual",
        babyName: "Abby",
        alt: "Abby chilling in pink"
    },
    {
        image: "images/formal1.webp",
        caption: "Ready to party",
        location: "Misawa",
        age: "4",
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
        age: "0",
        season: "Summer",
        fashionType: "Formal",
        babyName: "Abby&Lucas",
        alt: "Celebration 4th of July"
    },
    {
        image: "images/yummz.webp",
        caption: "Sauces",
        location: "Misawa",
        age: "2",
        season: "Summer",
        fashionType: "Casual",
        babyName: "Abby&Lucas",
        alt: "Mustard and Ketchup"
    },
    {
        image: "images/abbyyellow.webp",
        caption: "Princess in yellow",
        location: "Misawa",
        age: "2",
        season: "Summer",
        fashionType: "Casual",
        babyName: "Abby",
        alt: "Abby chilling in yellow"
    },
    {
        image: "images/sportyboy.webp",
        caption: "Sport outfit",
        location: "Misawa",
        age: "2",
        season: "Summer",
        fashionType: "Casual",
        babyName: "Lucas",
        alt: "Lucas in a sport outfit"
    },
    // Add more outfits as needed...
];

// Function to render the outfits dynamically
function renderOutfits(filteredOutfits) {
    const container = document.getElementById('outfit-cards-container');
    container.innerHTML = ''; // Clear the container first

    filteredOutfits.forEach((outfit) => {
        const card = document.createElement('div');
        card.className = 'outfit-card';

        const image = document.createElement('img');
        image.src = outfit.image;
        
        image.alt = outfit.alt;  // Set alt attribute from data
        image.loading = 'lazy';  // Enable lazy loading

        const caption = document.createElement('h2');
        caption.textContent = outfit.caption;

        const info = document.createElement('div');
        info.className = 'info';
        info.innerHTML = `
            <p>Location: ${outfit.location}</p>
            <p>Age: ${outfit.age}</p>
            <p>Fashion: ${outfit.fashionType}</p>
            <p>Name: ${outfit.babyName}</p>
        `;

        card.appendChild(image);
        card.appendChild(caption);
        card.appendChild(info);
        container.appendChild(card);
    });
}

// Initial render of all outfits
renderOutfits(outfitData);

// Filter functionality
function filterImages() {
    const selectedValue = document.getElementById('filterDropdown').value;

    const filteredOutfits = outfitData.filter((outfit) => {
        if (!selectedValue) return true; // If no filter is selected, show all outfits

        // Check for matching filters
        if (selectedValue.startsWith('age_')) {
            const ageFilter = selectedValue.replace('age_', '');
            return outfit.age.includes(ageFilter);
        } else if (selectedValue.startsWith('location_')) {
            const locationFilter = selectedValue.replace('location_', '');
            return outfit.location.toLowerCase() === locationFilter;
        } else if (selectedValue.startsWith('fashion_')) {
            const fashionFilter = selectedValue.replace('fashion_', '');
            return outfit.fashionType.toLowerCase() === fashionFilter;
        } else if (selectedValue.startsWith('name_')) {
            const nameFilter = selectedValue.replace('name_', '');
            return outfit.babyName.toLowerCase().includes(nameFilter.toLowerCase());
        }
        return false;
    });

    renderOutfits(filteredOutfits); // Re-render filtered outfits
}

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
// Dynamic year and last modified date in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
