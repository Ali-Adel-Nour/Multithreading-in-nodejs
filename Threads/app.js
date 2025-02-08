const {Worker,MessageChannel} = require ("worker_threads");

// const a = 400

// for (let i = 0; i <16; i++) {
//   const thread = new Worker("./calc.js")
// }

// // const thread1 = new Worker("./calc.js")
// // const thread2 = new Worker("./calc.js")

// // setTimeout(() => {
// //   const thread3 = new Worker("./calc.js")
// // }, 5000)

// console.log(a)

const channel =new MessageChannel()

const port1 = channel.port1

const port2 = channel.port2

port1.postMessage({name:"Ali"})
port2.postMessage({name:"Alaa"})

/port1.on("message",(msg) => {
  console.log(`Message received from port 1:`,msg)
})
port2.on("message", (msg) => {
  console.log(`Message received from port 2`,msg)
})

//console.log(channel)