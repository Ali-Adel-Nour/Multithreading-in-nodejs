const {Worker,workerData} = require('worker_threads')

const obj = workerData

obj.name = "Ahmed"

console.log(obj)