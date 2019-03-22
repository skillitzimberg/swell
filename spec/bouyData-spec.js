import { BouyData } from './../src/bouyData';
const mockData = require('../src/bouyDataMock.txt');

describe('BouyData', () => {
  it('getBouyData() should return correct data', () => {
    spyOn(BouyData.prototype, 'getBouyData').and.returnValue(Promise.resolve(mockData));

    const url = 'https://www.ndbc.noaa.gov/data/realtime2/46029.spec';
    const bouyData = new BouyData();
    bouyData.getBouyData(url).then((result) => {
      expect(bouyData.prototype.getBouyData(url)).toHaveBeenCalledWith(url);
      expect(result).toEqual(mockData);
    })
  });

});