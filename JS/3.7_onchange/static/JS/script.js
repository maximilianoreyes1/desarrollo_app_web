
function cityAlert() {
    alert("Loading weather report...");
}

function hideCookieBanner(element) {
    element.parentElement.remove();
}


// Temperatura conversión
var allTempSpans = document.querySelectorAll(".temp-high, .temp-low");
var originalCelsius = [];

for (var i = 0; i < allTempSpans.length; i++) {
    var temp = parseInt(allTempSpans[i].innerText);
    originalCelsius.push(temp);
}

function convertTemps(element) {
    var unit = element.value;

    for (var i = 0; i < allTempSpans.length; i++) {
        var originalC = originalCelsius[i];

        if (unit === 'fahrenheit') {
            var fahrenheit = Math.round((originalC * 9 / 5) + 32);
            allTempSpans[i].innerText = fahrenheit + "°";
        } else {
            allTempSpans[i].innerText = originalC + "°";
        }
    }
}