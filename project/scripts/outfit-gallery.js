document.addEventListener("DOMContentLoaded", function() {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");

    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    
    lastModifiedSpan.textContent = "Last Modification: " + document.lastModified;
});


const outfitData = [
    {
        image: "images/4months (1).jpg",
        caption: "Outfit 1",
        location: "Misawa",
        age: "4 months",
        season: "Fall",
        fashionType: "Casual",
        babyName: "Abby&Lucas"
    },
    {
        image: "images/smileyboy.jpg",
        caption: "Smiley Boy",
        location: "Misawa",
        age: "2 months",
        season: "Summer",
        fashionType: "Casual",
        babyName: "Lucas"
    },
    {
        image: "images/princess2.jpg",
        caption: "Little princess",
        location: "Misawa",
        age: "2 months",
        season: "Summer",
        fashionType: "Casual",
        babyName: "Abby"
    },
    {
        image: "images/formal1.jpg",
        caption: "Ready to party",
        location: "Misawa",
        age: "4 months",
        season: "Fall",
        fashionType: "Formal",
        babyName: "Abby&Lucas"
    },
    {
        image: "images/lucasnewborn.jpg",
        caption: "Newborn Lucas",
        location: "Hawaii",
        age: "0 months",
        season: "Summer",
        fashionType: "Casual",
        babyName: "Lucas"
    },
    {
        image: "images/abbynewborn.jpg",
        caption: "Newborn Abby",
        location: "Hawaii",
        age: "0 months",
        season: "Summer",
        fashionType: "Casual",
        babyName: "Abby"
    },
    {
        image: "images/4thjuly.jpg",
        caption: "Independence Day",
        location: "Hawaii",
        age: "0 months",
        season: "Summer",
        fashionType: "Formal",
        babyName: "Abby&Lucas"
    },
    // Add at least 24 entries here...
];

const filters = {
    location: "",
    age: "",
    season: "",
    fashionType: "",
    babyName:"",
};

const locationSelect = document.getElementById("locationFilter");
const ageSelect = document.getElementById("ageFilter");
const seasonSelect = document.getElementById("seasonFilter");
const fashionSelect = document.getElementById("fashionFilter");
const babySelect = document.getElementById("babyFilter");
const gallery = document.getElementById("gallery");
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

function loadFilters() {
    const locations = [...new Set(outfitData.map(item => item.location))];
    const ages = [...new Set(outfitData.map(item => item.age))];
    const seasons = [...new Set(outfitData.map(item => item.season))];
    const fashionTypes = [...new Set(outfitData.map(item => item.fashionType))];
    const babyName = [...new Set(outfitData.map(item => item.babyName))];

    locations.forEach(location => {
        const option = document.createElement("option");
        option.value = location;
        option.textContent = location;
        locationSelect.appendChild(option);
    });

    ages.forEach(age => {
        const option = document.createElement("option");
        option.value = age;
        option.textContent = age;
        ageSelect.appendChild(option);
    });

    seasons.forEach(season => {
        const option = document.createElement("option");
        option.value = season;
        option.textContent = season;
        seasonSelect.appendChild(option);
    });

    fashionTypes.forEach(type => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type;
        fashionSelect.appendChild(option);
    });

    babyName.forEach(baby => {
        const option = document.createElement("option");
        option.value = baby;
        option.textContent = baby;
        babySelect.appendChild(option);
    });
}

function displayOutfits() {
    gallery.innerHTML = "";
    const filteredData = outfitData.filter(item => {
        return (filters.location ? item.location === filters.location : true) &&
               (filters.age ? item.age === filters.age : true) &&
               (filters.season ? item.season === filters.season : true) &&
               (filters.fashionType ? item.fashionType === filters.fashionType : true) &&
               (filters.babyName ? item.babyName === filters.babyName : true);
    });

    filteredData.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("image-card");
        card.innerHTML = `
            <img src="${item.image}" alt="${item.caption}">
            <h4>${item.caption}</h4>
            <p>Location: ${item.location}</p>
            <p>Age: ${item.age}</p>
            <p>Season: ${item.season}</p>
            <p>Fashion Type: ${item.fashionType}</p>
            <p>Baby Name: ${item.babyName}</p>
        `;
        gallery.appendChild(card);
    });
}

function updateFilter(filterType, value) {
    filters[filterType] = value;
    displayOutfits();
}

locationSelect.addEventListener("change", (e) => updateFilter("location", e.target.value));
ageSelect.addEventListener("change", (e) => updateFilter("age", e.target.value));
seasonSelect.addEventListener("change", (e) => updateFilter("season", e.target.value));
fashionSelect.addEventListener("change", (e) => updateFilter("fashionType", e.target.value));
babySelect.addEventListener("change", (e) => updateFilter("babyName", e.target.value));

loadFilters();
displayOutfits();

// Hamburger menu toggle
// Create a Responsive Menu - Add Event Listener
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
