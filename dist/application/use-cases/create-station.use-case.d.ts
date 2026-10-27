import { StationRepository } from '../../domain/repositories/station.repository.js';
import { Station } from '../../domain/entities/station.entity.js';
export declare class CreateStationUseCase {
    private readonly stationRepo;
    constructor(stationRepo: StationRepository);
    execute(data: {
        name: string;
        latitude: number;
        longitude: number;
    }): Promise<Station>;
}
