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
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateStationUseCase } from '../../../application/use-cases/create-station.use-case.js';
import { CreateStationDto } from '../dtos/create-station.dto.js';
import { StationRepository } from '../../../domain/repositories/station.repository.js';
let StationController = class StationController {
    createStation;
    stationRepo;
    constructor(createStation, stationRepo) {
        this.createStation = createStation;
        this.stationRepo = stationRepo;
    }
    async create(dto) {
        return this.createStation.execute(dto);
    }
    async findAll() {
        return this.stationRepo.findAll();
    }
};
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateStationDto]),
    __metadata("design:returntype", Promise)
], StationController.prototype, "create", null);
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StationController.prototype, "findAll", null);
StationController = __decorate([
    Controller('stations'),
    __metadata("design:paramtypes", [CreateStationUseCase,
        StationRepository])
], StationController);
export { StationController };
//# sourceMappingURL=station.controller.js.map