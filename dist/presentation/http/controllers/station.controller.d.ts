import { CreateStationUseCase } from '../../../application/use-cases/create-station.use-case.js';
import { CreateStationDto } from '../dtos/create-station.dto.js';
import { StationRepository } from '../../../domain/repositories/station.repository.js';
export declare class StationController {
    private readonly createStation;
    private readonly stationRepo;
    constructor(createStation: CreateStationUseCase, stationRepo: StationRepository);
    create(dto: CreateStationDto): Promise<import("../../../domain/entities/station.entity.js").Station>;
    findAll(): Promise<import("../../../domain/entities/station.entity.js").Station[]>;
}
