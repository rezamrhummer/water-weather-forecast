import { IsString, IsLatitude, IsLongitude } from 'class-validator';

export class CreateStationDto {
  @IsString()
  name: string;

  @IsLatitude()
  latitude: number;

  @IsLongitude()
  longitude: number;
}