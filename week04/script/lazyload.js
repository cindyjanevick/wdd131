// Set the current year in the footer
document.addEventListener("DOMContentLoaded", function() {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");

    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    // Display the last modified date
    lastModifiedSpan.textContent = "Last Modification: " + document.lastModified;
});
