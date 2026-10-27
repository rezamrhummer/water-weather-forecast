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
import { randomUUID } from 'crypto';
import { StationRepository } from '../../domain/repositories/station.repository.js';
import { Station } from '../../domain/entities/station.entity.js';
let CreateStationUseCase = class CreateStationUseCase {
    stationRepo;
    constructor(stationRepo) {
        this.stationRepo = stationRepo;
    }
    async execute(data) {
        const station = new Station(randomUUID(), data.name, data.latitude, data.longitude);
        return this.stationRepo.save(station);
    }
};
CreateStationUseCase = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [StationRepository])
], CreateStationUseCase);
export { CreateStationUseCase };
//# sourceMappingURL=create-station.use-case.js.map