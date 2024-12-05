document.getElementById("tempForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const temperature = parseFloat(document.getElementById("temperature").value);
    const convertFrom = document.getElementById("convertFrom").value;
    const convertTo = document.getElementById("convertTo").value;
    let result;
    let originalTemperature = temperature;

    if (isNaN(temperature)) {
        alert("Please enter a valid temperature.");
        return;
    }

    // Convert the input temperature to Celsius first
    if (convertFrom === "fahrenheit") {
        originalTemperature = (temperature - 32) * 5 / 9; // Fahrenheit to Celsius
    } else if (convertFrom === "kelvin") {
        originalTemperature = temperature - 273.15; // Kelvin to Celsius
    }

    // Now convert from Celsius to the target unit
    if (convertTo === "fahrenheit") {
        result = (originalTemperature * 9 / 5) + 32; // Celsius to Fahrenheit
    } else if (convertTo === "kelvin") {
        result = originalTemperature + 273.15; // Celsius to Kelvin
    } else {
        result = originalTemperature; // Celsius to Celsius
    }

    // Update both result boxes
    document.getElementById("resultFrom").textContent = `${temperature}° ${convertFrom.charAt(0).toUpperCase() + convertFrom.slice(1)}`;
    document.getElementById("resultTo").textContent = `${result.toFixed(2)}° ${convertTo.charAt(0).toUpperCase() + convertTo.slice(1)}`;
});
