class WaveScore {
  constructor(swellPeriod, swellHeight, windDirection) {
    this.swellPeriod = swellPeriod;
    this.swellHeight = swellHeight;
    this.windDirection = windDirection;
  }

  getSwellPeriodScore() {
    if (this.swellPeriod >= 16) {
      return 5;
    } else if (this.swellPeriod >= 13) {
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

  getWaveSizeScore() {
    const waveSize = this.swellHeight * this.swellPeriod;

    if (waveSize >= 30) {
      return 5;
    } else if (waveSize >= 25) {
      return 4;
    } else if (waveSize >= 20) {
      return 3;
    } else if (waveSize >= 11) {
      return 2;
    } else {
      return 1;
    }
  }

  calculateSurfRating() {
    const swellPeriodScore = this.getSwellPeriodScore();
    const waveSizeScore = this.getWaveSizeScore();
    const windDirectionScore = this.getWindDirectionScore();

    return (swellPeriodScore + waveSizeScore + windDirectionScore) / 3
  }

}

export { WaveScore };