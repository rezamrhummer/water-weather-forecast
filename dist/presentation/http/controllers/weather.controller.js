var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { FetchWeatherUseCase } from '../../../application/use-cases/fetch-weather.use-case.js';
import { StationRepository } from '../../../domain/repositories/station.repository.js';
let WeatherController = class WeatherController {
    fetchWeather;
    stationRepo;
    constructor(fetchWeather, stationRepo) {
        this.fetchWeather = fetchWeather;
        this.stationRepo = stationRepo;
    }
    async getWeather(stationId) {
        const station = await this.stationRepo.findById(stationId);
        if (!station) {
            throw new NotFoundException('ایستگاه پیدا نشد');
        }
        return this.fetchWeather.execute(station.latitude, station.longitude, station.id);
    }
};
__decorate([
    Get(':stationId'),
    __param(0, Param('stationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WeatherController.prototype, "getWeather", null);
WeatherController = __decorate([
    Controller('weather'),
    __metadata("design:paramtypes", [FetchWeatherUseCase,
        StationRepository])
], WeatherController);
export { WeatherController };
//# sourceMappingURL=weather.controller.js.map