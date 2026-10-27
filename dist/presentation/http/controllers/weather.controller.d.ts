import { FetchWeatherUseCase } from '../../../application/use-cases/fetch-weather.use-case.js';
import { StationRepository } from '../../../domain/repositories/station.repository.js';
export declare class WeatherController {
    private readonly fetchWeather;
    private readonly stationRepo;
    constructor(fetchWeather: FetchWeatherUseCase, stationRepo: StationRepository);
    getWeather(stationId: string): Promise<{
        stationId: string;
        latestObservation: import("../../../domain/entities/weather-observation.entity.js").WeatherObservation;
        prediction: import("../../../domain/services/rainfall-predictor.service.js").RainfallPrediction;
        historyCount: number;
    }>;
}
