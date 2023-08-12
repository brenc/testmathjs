import { execaNode } from 'execa';

setInterval(async () => {
  let start = +new Date()
  await execaNode('src/test_mathjs.js')
  const mathjsLoadTime = +new Date() - start

  start = +new Date()
  await execaNode('src/test_lodash.js')
  const lodashLoadTime = +new Date() - start

  const timesFaster = Math.round(mathjsLoadTime / lodashLoadTime)

  console.log(`mathjs load time: ${mathjsLoadTime}ms, lodash load time: ` +
    `${lodashLoadTime}ms, diff: ${mathjsLoadTime - lodashLoadTime}ms, ` +
    `lodash loaded ${timesFaster}x faster than mathjs`)
}, 1000)