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
import { Station } from '../domain/entities/station.entity.js';
import { PrismaService } from './prisma.service.js';
let PrismaStationRepository = class PrismaStationRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async save(station) {
        const created = await this.prisma.station.create({
            data: {
                id: station.id,
                name: station.name,
                latitude: station.latitude,
                longitude: station.longitude,
            },
        });
        return new Station(created.id, created.name, created.latitude, created.longitude);
    }
    async findAll() {
        const all = await this.prisma.station.findMany();
        return all.map((s) => new Station(s.id, s.name, s.latitude, s.longitude));
    }
    async findById(id) {
        const found = await this.prisma.station.findUnique({ where: { id } });
        if (!found)
            return null;
        return new Station(found.id, found.name, found.latitude, found.longitude);
    }
};
PrismaStationRepository = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], PrismaStationRepository);
export { PrismaStationRepository };
//# sourceMappingURL=prisma-station.repository.js.map