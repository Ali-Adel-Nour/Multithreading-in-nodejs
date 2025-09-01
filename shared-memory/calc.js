const {workerData,threadId} = require("worker_threads");

const data = Buffer.from(workerData.data);

console.log(`Worker ${threadId} started`,data);

data[threadId] = 255