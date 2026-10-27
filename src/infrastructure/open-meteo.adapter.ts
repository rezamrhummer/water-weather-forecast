import { Injectable } from '@nestjs/common';
import { WeatherObservation } from '../domain/entities/weather-observation.entity.js';

@Injectable()
export class OpenMeteoAdapter {
  private readonly baseUrl = 'https://api.open-meteo.com/v1/forecast';

  async fetchRecent(lat: number, lon: number, stationId: string, days = 7): Promise<WeatherObservation[]> {
    const params = new URLSearchParams({
      latitude: String(lat),
      longitude: String(lon),
      hourly: 'temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,surface_pressure',
      past_days: String(days),
      forecast_days: '0',
      timezone: 'auto',
    });

    const response = await fetch(`${this.baseUrl}?${params}`);
    if (!response.ok) throw new Error(`خطا در Open-Meteo: ${response.status}`);
    
    const data = await response.json();

    return data.hourly.time.map((timeStr: string, index: number) => {
      return new WeatherObservation(
        stationId,
        new Date(timeStr),
        data.hourly.temperature_2m[index] ?? null,
        data.hourly.relative_humidity_2m[index] ?? null,
        data.hourly.precipitation[index] ?? null,
        data.hourly.wind_speed_10m[index] ?? null,
        data.hourly.surface_pressure[index] ?? null,
      );
    });
  }
}