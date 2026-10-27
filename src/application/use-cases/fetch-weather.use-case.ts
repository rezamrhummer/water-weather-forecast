import { Injectable } from '@nestjs/common';
import { OpenMeteoAdapter } from '../../infrastructure/open-meteo.adapter.js';
import { RainfallPredictor } from '../../domain/services/rainfall-predictor.service.js';

@Injectable()
export class FetchWeatherUseCase {
  private predictor = new RainfallPredictor();

  constructor(private readonly weatherApi: OpenMeteoAdapter) {}

  async execute(lat: number, lon: number, stationId: string) {
    const observations = await this.weatherApi.fetchRecent(lat, lon, stationId, 7);
    const prediction = this.predictor.predict(observations);

    return {
      stationId,
      latestObservation: observations[observations.length - 1] || null,
      prediction,
      historyCount: observations.length
    };
  }
}