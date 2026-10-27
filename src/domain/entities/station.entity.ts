export class Station {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly latitude: number,
    public readonly longitude: number,
  ) {}
}