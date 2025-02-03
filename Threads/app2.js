const {Worker} = require ("worker_threads");

const obj = {name:"Ali"}


new Worker("./calc2.js",{workerData:obj})


console.log("Object from main thread",obj)