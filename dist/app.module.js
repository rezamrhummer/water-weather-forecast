var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
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
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map