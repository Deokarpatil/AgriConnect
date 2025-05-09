document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('recommendation-form');
    const inputSummary = document.getElementById('input-summary');
    
    if (inputSummary && window.inputData) {
        const inputs = [
            { name: 'Nitrogen (N)', value: inputData.Nitrogen + ' mg/kg', status: getNutrientStatus(inputData.Nitrogen) },
            { name: 'Phosphorus (P)', value: inputData.Phosphorus + ' mg/kg', status: getNutrientStatus(inputData.Phosphorus) },
            { name: 'Potassium (K)', value: inputData.Potassium + ' mg/kg', status: getNutrientStatus(inputData.Potassium) },
            { name: 'Temperature', value: inputData.Temperature + ' °C', status: getTemperatureStatus(inputData.Temperature) },
            { name: 'Humidity', value: inputData.Humidity + ' %', status: getHumidityStatus(inputData.Humidity) },
            { name: 'pH', value: inputData.Ph, status: getPHStatus(inputData.Ph) },
            { name: 'Rainfall', value: inputData.Rainfall + ' mm', status: getRainfallStatus(inputData.Rainfall) }
        ];
        
        inputs.forEach(function(input) {
            const tr = document.createElement('tr');
            const statusClass = getStatusClass(input.status);
            
            tr.innerHTML = 
                '<td>' + input.name + '</td>' +
                '<td>' + input.value + '</td>' +
                '<td><span class="badge bg-' + statusClass + '">' + input.status + '</span></td>';
            
            inputSummary.appendChild(tr);
        });
    }
});

function getNutrientStatus(value) {
    if (value < 20) return 'Low';
    if (value < 40) return 'Moderate';
    if (value < 60) return 'Good';
    return 'High';
}

function getTemperatureStatus(value) {
    if (value < 10) return 'Too Cold';
    if (value > 40) return 'Too Hot';
    if (value < 15 || value > 35) return 'Marginal';
    return 'Optimal';
}

function getHumidityStatus(value) {
    if (value < 30) return 'Too Dry';
    if (value > 90) return 'Too Humid';
    if (value < 40 || value > 80) return 'Marginal';
    return 'Optimal';
}

function getPHStatus(value) {
    if (value < 5) return 'Too Acidic';
    if (value > 8.5) return 'Too Alkaline';
    if (value < 5.5 || value > 7.5) return 'Marginal';
    return 'Optimal';
}

function getRainfallStatus(value) {
    if (value < 500) return 'Too Dry';
    if (value > 2000) return 'Too Wet';
    if (value < 800 || value > 1500) return 'Marginal';
    return 'Optimal';
}

function getStatusClass(status) {
    switch(status) {
        case 'Optimal':
        case 'Good':
            return 'success';
        case 'Moderate':
        case 'Marginal':
            return 'warning';
        case 'Low':
        case 'Too Cold':
        case 'Too Hot':
        case 'Too Dry':
        case 'Too Humid':
        case 'Too Acidic':
        case 'Too Alkaline':
        case 'Too Wet':
            return 'danger';
        default:
            return 'secondary';
    }
} 