import { WaveScore } from './waveScore';
import { BouyData } from './bouyData';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  const url = 'https://www.ndbc.noaa.gov/data/realtime2/46029.spec';
  const newBouyData = new BouyData();
  
  const currentBouyData = newBouyData.getBouyData(url);

  currentBouyData.then((text) => {
    
    const lines = text.split('\n');
    const currentData = lines[2];
    const tabs = currentData.split(' ');

    const year = parseInt(tabs[0]);
    const month = parseInt(tabs[1]) - 1;
    const day = parseInt(tabs[2]);
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(year, month, day).toLocaleDateString("en-US", options);

    const swellHeight = parseFloat(tabs[8]).toPrecision(2);
    const swellPeriod = parseFloat(tabs[9]).toPrecision(3);
    const windDirection = tabs[15];

    const newWaveScore = new WaveScore(swellPeriod, swellHeight, windDirection);
    const waveScore = newWaveScore.calculateSurfRating().toPrecision(3);

    $('#date').append(`${date}`);
    $('#swellPeriod').append(`Swell Period: ${swellPeriod}`);
    $('#swellHeight').append(`Swell Height: ${swellHeight}`);
    $('#windDirection').append(`Wind Direction: ${windDirection}`);
    $('#waveScore').append(`Wave Score: ${waveScore}`);
  });

});
