class WaveScore {
  constructor(swellPeriod, swellHeight, windDirection) {
    this.swellPeriod = swellPeriod;
    this.swellHeight = swellHeight;
    this.windDirection = windDirection;
  }

  getSwellPeriodScore() {
    if (this.swellPeriod >= 16) {
      return 5;
    } else if (this.swellPeriod >= 12) {
      return 4;
    } else if (this.swellPeriod >= 10) {
      return 3;
    } else {
      return 1;
    }
  }

  getWindDirectionScore() {
    if (this.windDirection === 'E') {
      return 5;
    } else if (this.windDirection === 'NE' || this.windDirection === 'SE') {
      return 4;
    } else if (this.windDirection === 'S') {
      return 3;
    } else {
      return 1;
    }
  }

}

export { WaveScore };