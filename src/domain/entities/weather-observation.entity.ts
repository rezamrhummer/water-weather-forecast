export class WeatherObservation {
  constructor(
    public readonly stationId: string,
    public readonly observedAt: Date,
    public readonly temperatureC: number | null,
    public readonly humidityPct: number | null,
    public readonly precipitationMm: number | null,
    public readonly windSpeedKmh: number | null,
    public readonly pressureHpa: number | null,
  ) {}
}