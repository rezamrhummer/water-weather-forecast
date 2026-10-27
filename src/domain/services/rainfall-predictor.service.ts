import { WeatherObservation } from '../entities/weather-observation.entity.js';

export interface RainfallPrediction {
  predictedRainMm: number;
  confidence: number;
  model: string;
}

export class RainfallPredictor {
  predict(history: WeatherObservation[]): RainfallPrediction {
    const values = history
      .map((o) => o.precipitationMm ?? 0)
      .slice(-7); // ۷ روز آخر

    if (values.length === 0) {
      return { predictedRainMm: 0, confidence: 0, model: 'wma_v1' };
    }

    const weights = values.map((_, i) => i + 1);
    const weightedSum = values.reduce((s, v, i) => s + v * weights[i], 0);
    const weightTotal = weights.reduce((a, b) => a + b, 0);
    
    const predictedRainMm = Number((weightedSum / weightTotal).toFixed(2));
    const confidence = Math.min(1, values.length / 7);

    return { predictedRainMm, confidence, model: 'wma_v1' };
  }
}