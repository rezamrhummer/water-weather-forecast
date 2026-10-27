export declare class WeatherObservation {
    readonly stationId: string;
    readonly observedAt: Date;
    readonly temperatureC: number | null;
    readonly humidityPct: number | null;
    readonly precipitationMm: number | null;
    readonly windSpeedKmh: number | null;
    readonly pressureHpa: number | null;
    constructor(stationId: string, observedAt: Date, temperatureC: number | null, humidityPct: number | null, precipitationMm: number | null, windSpeedKmh: number | null, pressureHpa: number | null);
}
