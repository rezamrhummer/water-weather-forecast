const API_URL = '/stations';
const WEATHER_URL = '/weather';

async function loadStations() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        const list = document.getElementById('station-list');
        list.innerHTML = data.length ? '' : '<li>No stations registered yet.</li>';
        
        data.forEach(st => {
            list.innerHTML += `
                <li>
                    <strong>${st.name}</strong><br>
                    <small>Lat: ${st.latitude} | Lon: ${st.longitude}</small><br>
                    <button onclick="getWeather('${st.id}', '${st.name}')" style="padding: 5px; font-size: 12px; margin-top: 8px; background-color: #10b981;">Get Prediction</button>
                </li>
            `;
        });
    } catch (error) {
        console.error("Error loading stations:", error);
    }
}

async function getWeather(stationId, stationName) {
    const resultCard = document.getElementById('result-card');
    const resultDiv = document.getElementById('prediction-result');
    
    resultCard.style.display = 'block';
    resultDiv.innerHTML = '<p>Fetching data from satellite...</p>';

    try {
        const res = await fetch(`${WEATHER_URL}/${stationId}`);
        if (!res.ok) throw new Error('Error fetching data');
        
        const data = await res.json();
        
        resultDiv.innerHTML = `
            <p><strong>Station:</strong> ${stationName}</p>
            <p><strong>Predicted Rainfall:</strong> <span style="color: #2563eb; font-weight: bold;">${data.prediction.predictedRainMm} mm</span></p>
            <p><strong>Confidence Level:</strong> ${(data.prediction.confidence * 100).toFixed(0)}%</p>
            <p><strong>Calculation Model:</strong> ${data.prediction.model}</p>
            <p><small>Processed Data Points: ${data.historyCount} hours</small></p>
        `;
    } catch (error) {
        resultDiv.innerHTML = '<p style="color: red;">Error connecting to server. Please try again.</p>';
    }
}

document.getElementById('station-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
        name: document.getElementById('name').value,
        latitude: parseFloat(document.getElementById('lat').value),
        longitude: parseFloat(document.getElementById('lon').value),
    };
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (res.ok) {
        document.getElementById('station-form').reset();
        loadStations();
    } else {
        alert('Error registering station! Please try again.');
    }
});

loadStations();