// Create a Responsive Menu - Add Event Listener
const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('nav ul');

// Add event listener to the hamburger button for toggle functionality
hamButton.addEventListener('click', () => {
    // Toggle 'open' class to switch between hamburger and X icon
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// Update Current Year and Last Modified Date in Footer
const currentYear = document.getElementById('currentyear');
const today = new Date();

currentYear.textContent = `${today.getFullYear()}`;

let dateLastModified = document.lastModified;
let displayContent = document.getElementById('lastmodified');
displayContent.textContent = `Last Modification: ${dateLastModified}`;

// Calculate and display the baby's age based on birthdate
const calculateAge = (birthDate) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    // Adjust if the birthday hasn't occurred yet this year
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    const months = today.getMonth() - birthDate.getMonth();
    const fullMonths = months < 0 ? (12 + months) : months;

    return { years: age, months: fullMonths };
};

// Example birthdates for the babies (adjust these dates as needed)
const baby1BirthDate = new Date("2024-06-22"); // Example birthdate for Baby 1
const baby2BirthDate = new Date("2024-06-22"); // Example birthdate for Baby 2

// Display the ages of the babies in years and months
const baby1AgeElement = document.querySelector('.baby1-age');
const baby2AgeElement = document.querySelector('.baby2-age');

// Calculate and display the baby's age in years and months
const baby1Age = calculateAge(baby1BirthDate);
const baby2Age = calculateAge(baby2BirthDate);

// Format age as "X years, Y months"
baby1AgeElement.textContent = `Age: ${baby1Age.years} Years, ${baby1Age.months} Months`;
baby2AgeElement.textContent = `Age: ${baby2Age.years} Years, ${baby2Age.months} Months`;

// Update year and last modified date after the page loads
document.addEventListener("DOMContentLoaded", function() {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastmodified");

    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    lastModifiedSpan.textContent = "Last Modification: " + document.lastModified;
});
