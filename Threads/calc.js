const {Worker} = require('worker_threads')


setTimeout(() => {
 new Worker("./calc.js")
}, 3000)

// const a = 1000

// console.log(a)

// for(let i =0; i<10_000_000_000; i++){}
// setInterval(() => {},50)

//process.exit(0)