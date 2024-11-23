/*Display current year 
and Last Modified*/

const currentYear = document.getElementById('currentyear');
const today = new Date(); 

currentYear.textContent = `${today.getFullYear()}`; 


let dateLastModified = document.lastModified;
let displayContent = document.getElementById('lastmodified');

displayContent.textContent = `Last Modification: ${dateLastModified}`;




/*Calculate Wind Chill*/

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        
        const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2); 
    } else {
        return "N/A";
    }
}

// Print wind chill value when the window loads
window.onload = function() {
    const temperature = 31;
    const windSpeed = 5;
    const windChillValue = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = `${windChillValue}`;
};

// Replace with your API key
const apiKey = '1286ded8fde24b5aba6183949241711';

// Set the desired city and API endpoint
const city = 'Misawa'; // Change the city as needed
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

// Fetch weather data
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Extract necessary data
        const temp = data.current.temp_c;
        const conditions = data.current.condition.text;
        const windSpeed = data.current.wind_kph;

        // Update the HTML content
        document.getElementById('temp').textContent = temp;
        document.getElementById('conditions').textContent = conditions;
        document.getElementById('wind').textContent = (windSpeed / 3.6).toFixed(2); // Convert km/h to m/s
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('temp').textContent = 'N/A';
        document.getElementById('conditions').textContent = 'Error fetching data';
        document.getElementById('wind').textContent = 'N/A';
    });
