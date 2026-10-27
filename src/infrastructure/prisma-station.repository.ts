import { Injectable } from '@nestjs/common';
import { StationRepository } from '../domain/repositories/station.repository.js';
import { Station } from '../domain/entities/station.entity.js';
import { PrismaService } from './prisma.service.js';

@Injectable()
export class PrismaStationRepository implements StationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(station: Station): Promise<Station> {
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

  async findAll(): Promise<Station[]> {
    const all = await this.prisma.station.findMany();
    return all.map((s) => new Station(s.id, s.name, s.latitude, s.longitude));
  }

  async findById(id: string): Promise<Station | null> {
    const found = await this.prisma.station.findUnique({ where: { id } });
    if (!found) return null;
    return new Station(found.id, found.name, found.latitude, found.longitude);
  }
}