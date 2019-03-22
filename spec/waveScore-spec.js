import { WaveScore } from './../src/waveScore';

describe('WaveScore', () => {
  it('getSwellPeriodScore() should return swell period score', () => {
    const swellPeriod = 14.8;
    const swellHeight = 2.0;
    const windDirection = 'SW';
    let waveScore = new WaveScore(swellPeriod, swellHeight, windDirection);
    expect(waveScore.getSwellPeriodScore()).toEqual(4);
  });

});