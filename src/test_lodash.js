import round from 'lodash-es/round.js';
// import { Redis } from 'ioredis'
// import { printDependencies } from 'mathjs';
// 
// // import main from './common.js'
// 
// const name = 'lodash'
// const redis = new Redis({
//     host: 'redis',
//     keyPrefix: name,
//   });
// 
// process.on('beforeExit', (code) => {
//   console.log('Process beforeExit event with code: ', code);
// });
// 
// process.on('SIGUSR2', (code) => {
//   console.log('SIGUSR2 event with code: ', code);
// });
// 
// process.on('exit', (code) => {
//   console.log('Process exit event with code: ', code);
// });
// 
// await redis.set('start_time', +new Date())
// 
// console.log(await redis.get('start_time'))
// 
// process.exit(1)