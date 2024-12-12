document.addEventListener("DOMContentLoaded", function() {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");

    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    lastModifiedSpan.textContent = "Last Modification: " + document.lastModified;

    function calculateAge(birthdate) {
        const birthDate = new Date(birthdate);
        const today = new Date();
        let ageInMonths = (today.getFullYear() - birthDate.getFullYear()) * 12;
        ageInMonths -= birthDate.getMonth();
        ageInMonths += today.getMonth();

        let ageInDays = today.getDate() - birthDate.getDate();
        if (ageInDays < 0) {
            ageInMonths--;
            ageInDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        const years = Math.floor(ageInMonths / 12);
        const months = ageInMonths % 12;
        return `${years} years and ${months} months, ${ageInDays} days`;
    }

    const abbyAge = document.getElementById("abby-age");
    const lucasAge = document.getElementById("lucas-age");

    abbyAge.textContent = calculateAge("2024-06-22");
    lucasAge.textContent = calculateAge("2024-06-22");

    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');  // Toggle 'open' class to show/hide menu
        hamButton.classList.toggle('open');  // Change icon to 'X' when menu is open
    });
});
