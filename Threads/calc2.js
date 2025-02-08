const {Worker,workerData} = require('worker_threads')

const port = workerData.port

port.postMessage("some text for testing")

port.on("message",(msg) => {
  console.log("Worker recevied",msg)
})