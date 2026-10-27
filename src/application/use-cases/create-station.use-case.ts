import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { StationRepository } from '../../domain/repositories/station.repository.js';
import { Station } from '../../domain/entities/station.entity.js';

@Injectable()
export class CreateStationUseCase {
  constructor(private readonly stationRepo: StationRepository) {}

  async execute(data: { name: string; latitude: number; longitude: number }) {
    const station = new Station(randomUUID(), data.name, data.latitude, data.longitude);
    return this.stationRepo.save(station);
  }
}