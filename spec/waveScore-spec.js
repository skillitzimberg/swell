import { WaveScore } from './../src/waveScore';

describe('WaveScore', () => {
  it('getSwellPeriodScore() should return swell period score', () => {
    const swellPeriod = 14.8;
    const swellHeight = 2.0;
    const windDirection = 'SW';
    let waveScore = new WaveScore(swellPeriod, swellHeight, windDirection);
    expect(waveScore.getSwellPeriodScore()).toEqual(4);
  });

  it('getWindDirectionScore() should return wind direction score', () => {
    const swellPeriod = 19.0;
    const swellHeight = 1.8;
    const windDirection = 'SW';
    let waveScore = new WaveScore(swellPeriod, swellHeight, windDirection);
    expect(waveScore.getWindDirectionScore()).toEqual(1);
  });

  it('getWaveSizeScore() should return wave size score', () => {
    const swellPeriod = 17.4;
    const swellHeight = 2.3;
    const windDirection = 'SSW';
    let waveScore = new WaveScore(swellPeriod, swellHeight, windDirection);
    expect(waveScore.getWaveSizeScore()).toEqual(5);
  });

  it('calculateSurfRating() should return surf rating', () => {
    const swellPeriod = 13.8;
    const swellHeight = 1.8;
    const windDirection = 'S';
    const waveScore = new WaveScore(swellPeriod, swellHeight, windDirection);
    expect(waveScore.calculateSurfRating()).toEqual(10/3);
  });

});