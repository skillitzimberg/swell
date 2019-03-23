import { WaveScore } from './waveScore';
import { BouyData } from './bouyData';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  const url = 'https://www.ndbc.noaa.gov/data/realtime2/46029.spec';
  const newBouyData = new BouyData();
  
  let currentBouyData = newBouyData.getBouyData(url);
  currentBouyData.then((text) => {
    const today = new Date();
    let lineDate;
    let line;
    let lineArray;
    const lines = text.split('\n');
    let currentData;
    
    for (let i = 2; i < lines.length; i++) {
      line = lines[i];
      lineArray = line.split(' ');
      lineDate = new Date(lineArray[0], lineArray[1] - 1, lineArray[2]).toLocaleDateString();
      debugger;
      if ( today.toLocaleDateString() === lineDate && today.getHours() === parseInt(lineArray[3]) ) {
        currentData = lineArray;
      }
    }
    console.log('currentData after: ', currentData);

    const cleanData = currentData.filter( (element) => {
      return element != "";
    });
    console.log('cleanData: ', cleanData);

    const year = parseInt(cleanData[0]);
    const month = parseInt(cleanData[1]) - 1;
    const day = parseInt(cleanData[2]);
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(year, month, day).toLocaleDateString("en-US", options);

    const swellHeight = parseFloat(cleanData[6]).toPrecision(2);
    const swellPeriod = parseFloat(cleanData[7]).toPrecision(3);

    let windDirection = cleanData[11];

    const newWaveScore = new WaveScore(swellPeriod, swellHeight, windDirection);
    const waveScore = newWaveScore.calculateSurfRating().toPrecision(3);

    $('#date').append(`${date}`);
    $('#swellPeriod').append(`Swell Period: ${swellPeriod}`);
    $('#swellHeight').append(`Swell Height: ${swellHeight}`);
    $('#windDirection').append(`Wind Direction: ${windDirection}`);
    $('#waveScore').append(`Wave Score: ${waveScore}`);

    $( "#update" ).click(function() {
      currentBouyData = newBouyData.getBouyData(url);
      console.log(currentBouyData, " ", new Date());
    });
  }).catch(function(error) {
    $('#error').append(`Wave Score: ${error}`);
  });
});
