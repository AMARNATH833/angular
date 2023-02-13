/// <reference lib="webworker" />

import {PrimeCalculator} from './app.prime';


addEventListener('message', ({ data }) => {
  //const response = `worker response to ${data}`;
  const response=PrimeCalculator.findNthPrime(parseInt(data))
  postMessage(response);
});
