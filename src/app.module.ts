import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaService } from './infrastructure/prisma.service.js';
import { PrismaStationRepository } from './infrastructure/prisma-station.repository.js';
import { StationRepository } from './domain/repositories/station.repository.js';
import { OpenMeteoAdapter } from './infrastructure/open-meteo.adapter.js';
import { CreateStationUseCase } from './application/use-cases/create-station.use-case.js';
import { FetchWeatherUseCase } from './application/use-cases/fetch-weather.use-case.js';
import { StationController } from './presentation/http/controllers/station.controller.js';
import { WeatherController } from './presentation/http/controllers/weather.controller.js';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'public'),
    }),
  ],
  controllers: [AppController, StationController, WeatherController],
  providers: [
    AppService,
    PrismaService,
    OpenMeteoAdapter,
    CreateStationUseCase,
    FetchWeatherUseCase,
    {
      provide: StationRepository,
      useClass: PrismaStationRepository,
    },
  ],
})
export class AppModule {}