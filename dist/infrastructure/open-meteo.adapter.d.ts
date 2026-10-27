import { WeatherObservation } from '../domain/entities/weather-observation.entity.js';
export declare class OpenMeteoAdapter {
    private readonly baseUrl;
    fetchRecent(lat: number, lon: number, stationId: string, days?: number): Promise<WeatherObservation[]>;
}
