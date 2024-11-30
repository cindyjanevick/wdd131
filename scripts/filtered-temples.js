// declare and Instantiate Variables
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const historicTemplesLink = document.querySelector("#oldTemples");
const newTemplesLink = document.querySelector("#newTemples");
const smallTemplesLink = document.querySelector("#smallTemples");
const largeTemplesLink = document.querySelector("#largeTemples");
const homeLink = document.querySelector("#home");

// Create a Responsive Menu - Add Event Listener
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", function() {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");

    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    
    lastModifiedSpan.textContent = "Last Modification: " + document.lastModified;
});

// Array of Temple Objects
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005 August 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888 May 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015 June 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020 May 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974 November 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986 January 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983 December 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980 October 27",
        area: 53997,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-27491.jpg"  
    },
    {
        templeName: "Frankfurt Germany",
        location: "Frankfurt, Germany",
        dedicated: "1987 August 28",
        area: 32895,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-6600.jpg"  
    },
    {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii, United States",
        dedicated: "1919 November 27",
        area: 42100,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-772761-wallpaper.jpg"  
    }
  ];

// Function to create 'temple cards' for each temple
function createTempleCard(filteredTemples) {
    const container = document.querySelector(".container-images");
    container.innerHTML = ""; // Clear previous cards
    filteredTemples.forEach(temple => {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let location = document.createElement("p");
      let dedication = document.createElement("p");
      let area = document.createElement("p");
      let img = document.createElement("img");

      name.textContent = temple.templeName;
      location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

      //Format the dedication date
      let [year, month, day] = temple.dedicated.split(" ");
      dedication.innerHTML = `<span class="label">Dedicated:</span> ${year}, ${month}, ${day}`;

      area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", `${temple.name} Temple`);
      img.setAttribute("loading", "lazy");
      img.setAttribute("width", 400);
      img.setAttribute("height", 250);

      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(img);

      container.appendChild(card);
    });

}

// Event listeners for filtering
historicTemplesLink.addEventListener("click", () => {
  const historicTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() <= 1900);
  createTempleCard(historicTemples);
})

newTemplesLink.addEventListener("click", () => {
  const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000);
  createTempleCard(newTemples);
})

smallTemplesLink.addEventListener("click", () => {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  createTempleCard(smallTemples);
});

largeTemplesLink.addEventListener("click", () => {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  createTempleCard(largeTemples);
});

// Event listener for Home button to show all temples
homeLink.addEventListener("click", () => {
    createTempleCard(temples);
});

// Initial load of all temples
createTempleCard(temples);