var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { OpenMeteoAdapter } from '../../infrastructure/open-meteo.adapter.js';
import { RainfallPredictor } from '../../domain/services/rainfall-predictor.service.js';
let FetchWeatherUseCase = class FetchWeatherUseCase {
    weatherApi;
    predictor = new RainfallPredictor();
    constructor(weatherApi) {
        this.weatherApi = weatherApi;
    }
    async execute(lat, lon, stationId) {
        const observations = await this.weatherApi.fetchRecent(lat, lon, stationId, 7);
        const prediction = this.predictor.predict(observations);
        return {
            stationId,
            latestObservation: observations[observations.length - 1] || null,
            prediction,
            historyCount: observations.length
        };
    }
};
FetchWeatherUseCase = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [OpenMeteoAdapter])
], FetchWeatherUseCase);
export { FetchWeatherUseCase };
//# sourceMappingURL=fetch-weather.use-case.js.map