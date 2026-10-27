var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
import { WeatherObservation } from '../domain/entities/weather-observation.entity.js';
let OpenMeteoAdapter = class OpenMeteoAdapter {
    baseUrl = 'https://api.open-meteo.com/v1/forecast';
    async fetchRecent(lat, lon, stationId, days = 7) {
        const params = new URLSearchParams({
            latitude: String(lat),
            longitude: String(lon),
            hourly: 'temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,surface_pressure',
            past_days: String(days),
            forecast_days: '0',
            timezone: 'auto',
        });
        const response = await fetch(`${this.baseUrl}?${params}`);
        if (!response.ok)
            throw new Error(`خطا در Open-Meteo: ${response.status}`);
        const data = await response.json();
        return data.hourly.time.map((timeStr, index) => {
            return new WeatherObservation(stationId, new Date(timeStr), data.hourly.temperature_2m[index] ?? null, data.hourly.relative_humidity_2m[index] ?? null, data.hourly.precipitation[index] ?? null, data.hourly.wind_speed_10m[index] ?? null, data.hourly.surface_pressure[index] ?? null);
        });
    }
};
OpenMeteoAdapter = __decorate([
    Injectable()
], OpenMeteoAdapter);
export { OpenMeteoAdapter };
//# sourceMappingURL=open-meteo.adapter.js.map