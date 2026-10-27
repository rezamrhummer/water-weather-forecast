-- CreateTable
CREATE TABLE "Station" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Station_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeatherObservation" (
    "id" TEXT NOT NULL,
    "stationId" TEXT NOT NULL,
    "observedAt" TIMESTAMP(3) NOT NULL,
    "temperatureC" DOUBLE PRECISION,
    "humidityPct" DOUBLE PRECISION,
    "precipitationMm" DOUBLE PRECISION,
    "windSpeedKmh" DOUBLE PRECISION,
    "pressureHpa" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WeatherObservation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WeatherObservation" ADD CONSTRAINT "WeatherObservation_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE CASCADE ON UPDATE CASCADE;
