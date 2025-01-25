const {Worker} = require ("worker_threads");

const a = 400

for (let i = 0; i <16; i++) {
  const thread = new Worker("./calc.js")
}

// const thread1 = new Worker("./calc.js")
// const thread2 = new Worker("./calc.js")

// setTimeout(() => {
//   const thread3 = new Worker("./calc.js")
// }, 5000)

console.log(a)