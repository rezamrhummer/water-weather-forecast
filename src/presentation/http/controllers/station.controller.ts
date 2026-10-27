import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateStationUseCase } from '../../../application/use-cases/create-station.use-case.js';
import { CreateStationDto } from '../dtos/create-station.dto.js';
import { StationRepository } from '../../../domain/repositories/station.repository.js';

@Controller('stations')
export class StationController {
  constructor(
    private readonly createStation: CreateStationUseCase,
    private readonly stationRepo: StationRepository,
  ) {}

  @Post()
  async create(@Body() dto: CreateStationDto) {
    return this.createStation.execute(dto);
  }

  @Get()
  async findAll() {
    return this.stationRepo.findAll();
  }
}