export class WeatherObservation {
    stationId;
    observedAt;
    temperatureC;
    humidityPct;
    precipitationMm;
    windSpeedKmh;
    pressureHpa;
    constructor(stationId, observedAt, temperatureC, humidityPct, precipitationMm, windSpeedKmh, pressureHpa) {
        this.stationId = stationId;
        this.observedAt = observedAt;
        this.temperatureC = temperatureC;
        this.humidityPct = humidityPct;
        this.precipitationMm = precipitationMm;
        this.windSpeedKmh = windSpeedKmh;
        this.pressureHpa = pressureHpa;
    }
}
//# sourceMappingURL=weather-observation.entity.js.map