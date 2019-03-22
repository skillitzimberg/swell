import { TestClass } from './testclass';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

let newTest = new TestClass();
const message = newTest.getMessage();

$(document).ready(function() {
  $('#displayMessage').append(message);
});
