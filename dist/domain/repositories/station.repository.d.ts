import { Station } from '../entities/station.entity.js';
export declare abstract class StationRepository {
    abstract save(station: Station): Promise<Station>;
    abstract findAll(): Promise<Station[]>;
    abstract findById(id: string): Promise<Station | null>;
}
