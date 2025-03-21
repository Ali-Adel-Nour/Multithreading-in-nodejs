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

 //const channel =new MessageChannel()

// const port1 = channel.port1

// const port2 = channel.port2

// port1.postMessage({name:"Ali"})
// port2.postMessage({name:"Alaa"})

// /port1.on("message",(msg) => {
//   console.log(`Message received from port 1:`,msg)
// })
// port2.on("message", (msg) => {
//   console.log(`Message received from port 2`,msg)
// })

//console.log(channel)


/* Communication between 2 workers threads   */

// const {port1, port2} = new MessageChannel()

// const thread1 = new Worker("./calc2.js",{workerData:{port:port1},transferList:[port1]})

// const thread2 = new Worker("./calc2.js",{workerData:{port2},transferList:[port2]})


/* Communication between main thread and 2 workers threads */
const channel1 = new MessageChannel()
const channel2 = new MessageChannel()

const thread1 = new Worker("./calc2.js",{workerData:{port:channel1.port2},transferList:[channel1.port2]})
const thread2 = new Worker("./calc2.js",{workerData:{port:channel2.port1},transferList:[channel2.port1]})


channel1.port1.on("message", (msg) => {
  console.log(`Message received from main thread:`,msg)
})

channel2.port2.on("message", (msg) => {
  console.log(`Message received from thread 1:`,msg)
})


// /* This easier but with much less contorol */
// const thread1 = new Worker("./calc2.js")

// thread1.on("message", (msg) => {
//   console.log("Message received from main thread:",msg)
// })

// thread1.postMessage({name:"Ali"})