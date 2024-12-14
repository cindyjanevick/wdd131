document.addEventListener("DOMContentLoaded", function() {
    // Countdown functionality
    function setCountdown(targetDateStr) {
        const targetDate = new Date(targetDateStr).getTime();

        // If the target date is invalid, log an error and return
        if (isNaN(targetDate)) {
            console.error("Invalid target date:", targetDateStr);
            return;
        }

        // Update the countdown every second
        const countdownInterval = setInterval(function() {
            const now = new Date().getTime();
            const timeRemaining = targetDate - now;

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            // Display the countdown in the HTML element
            document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            // If the countdown is over, display a message
            if (timeRemaining < 0) {
                clearInterval(countdownInterval);
                document.getElementById("countdown").innerHTML = "The event has started!";
            }
        }, 1000);
    }

    // Get the target date from the HTML element's data attribute
    const countdownElement = document.getElementById("countdown");
    const targetDate = countdownElement ? countdownElement.getAttribute("data-target-date") : null;

    // If a target date is provided, start the countdown
    if (targetDate) {
        setCountdown(targetDate);
    } else {
        console.error("Target date not found in the HTML.");
    }

    // Footer functionality (current year and last modified date)
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");

    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;
    lastModifiedSpan.textContent = "Last Modification: " + document.lastModified;

    // Hamburger menu functionality
    const hamButton = document.getElementById("menu");
    const navigation = document.querySelector(".navigation");

    // Toggle the navigation and menu button state
    if (hamButton) {
        hamButton.addEventListener('click', () => {
            navigation.classList.toggle('open');
            hamButton.classList.toggle('open');
        });
    } else {
        console.error("Hamburger button not found in the HTML.");
    }
});
