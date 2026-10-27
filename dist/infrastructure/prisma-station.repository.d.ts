import { StationRepository } from '../domain/repositories/station.repository.js';
import { Station } from '../domain/entities/station.entity.js';
import { PrismaService } from './prisma.service.js';
export declare class PrismaStationRepository implements StationRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    save(station: Station): Promise<Station>;
    findAll(): Promise<Station[]>;
    findById(id: string): Promise<Station | null>;
}
