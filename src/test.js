import { round } from 'mathjs';
// import round from 'lodash-es/round.js';
import { access, constants, readFile, writeFile } from 'node:fs/promises';
import process from 'node:process';

const stopTimeFile = 'stoptime'

// Using a single function to handle multiple signals
async function handle(signal) {
  const stopTime = +new Date()
  await writeFile(stopTimeFile, `${stopTime}`)
  console.log(`shutting down, stop time: ${stopTime}`)
  process.exit(0)
}

process.on('SIGUSR2', handle);

let stopTime
try {
  await access(stopTimeFile, constants.R_OK)
  stopTime = parseInt(await readFile(stopTimeFile, 'utf8'), 10)
  console.log(`read stop time from file: ${stopTime}`)
} catch (err) {
  console.error(`cannot access stoptime file: ${err}`);
} 

if (!stopTime) {
  stopTime = +new Date()
}

console.log(`startup took ${+new Date() - stopTime}ms, round: ` +
  `${round(4.55876, 2)}`)

setInterval(() => {
}, 1000)
