class WaveScore {
  constructor(swellPeriod, swellHeight, windDirection) {
    this.swellPeriod = swellPeriod;
    this.swellHeight = swellHeight;
    this.windDirection = windDirection;
  }

  getSwellPeriodScore() {
    return 3;
  }

}

export { WaveScore };