import { WeatherObservation } from '../entities/weather-observation.entity.js';
export interface RainfallPrediction {
    predictedRainMm: number;
    confidence: number;
    model: string;
}
export declare class RainfallPredictor {
    predict(history: WeatherObservation[]): RainfallPrediction;
}
