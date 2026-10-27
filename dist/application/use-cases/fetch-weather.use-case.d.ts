import { OpenMeteoAdapter } from '../../infrastructure/open-meteo.adapter.js';
export declare class FetchWeatherUseCase {
    private readonly weatherApi;
    private predictor;
    constructor(weatherApi: OpenMeteoAdapter);
    execute(lat: number, lon: number, stationId: string): Promise<{
        stationId: string;
        latestObservation: import("../../domain/entities/weather-observation.entity.js").WeatherObservation;
        prediction: import("../../domain/services/rainfall-predictor.service.js").RainfallPrediction;
        historyCount: number;
    }>;
}
