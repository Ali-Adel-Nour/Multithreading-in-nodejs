const {workerData,parentPort} = require('worker_threads')

const generatePrimes = require("./prime-genrator")

const primes = generatePrimes(workerData.count, workerData.start,{format:true})