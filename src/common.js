import { access, constants, readFile, writeFile } from 'node:fs/promises';
import process from 'node:process';

export default async function (name, stopTimeFile) {
  async function handleStop() {
    const stopTime = +new Date()
    await writeFile(stopTimeFile, `${stopTime}`)
    console.log(`${name} shutting down, stop time: ${stopTime}`)
  }

  async function handleSignal(signal) {
    await handleStop()
    process.exit(0)
  }

  process.on('SIGUSR2', handleSignal);

  let stopTime
  try {
    await access(stopTimeFile, constants.R_OK)
    stopTime = parseInt(await readFile(stopTimeFile, 'utf8'), 10)
    console.log(`read stop time from: ${stopTimeFile}, stop time: ${stopTime}`)
  } catch (err) {
    console.error(`cannot access stoptime file ${stopTimeFile}: ` +
      `${err.message}`);
  }

  if (!stopTime) {
    stopTime = +new Date()
  }

  console.log(`startup took ${+new Date() - stopTime}ms, round: ` +
    `${round(4.55876, 2)}`)
}