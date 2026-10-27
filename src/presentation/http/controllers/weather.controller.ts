import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { FetchWeatherUseCase } from '../../../application/use-cases/fetch-weather.use-case.js';
import { StationRepository } from '../../../domain/repositories/station.repository.js';

@Controller('weather')
export class WeatherController {
  constructor(
    private readonly fetchWeather: FetchWeatherUseCase,
    private readonly stationRepo: StationRepository,
  ) {}

  @Get(':stationId')
  async getWeather(@Param('stationId') stationId: string) {
    const station = await this.stationRepo.findById(stationId);
    if (!station) {
      throw new NotFoundException('ایستگاه پیدا نشد');
    }
    return this.fetchWeather.execute(station.latitude, station.longitude, station.id);
  }
}