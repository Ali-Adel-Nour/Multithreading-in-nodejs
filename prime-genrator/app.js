const {Worker } = require("worker_threads");
const {performance } = require("perf_hooks");



const THREADS = 2
const count = 200  //number of prime numbers that we want
let completed = 0


const startTime = performance.now();

for(let i =0  ;i <THREADS;i++){
  const worker = new Worker("./calc.js",{
  workerData: {count: count /  THREADS,start:100_000_000_000 + i * 300},
  })
  const threadId = worker.threadId;
  console.log(`Worker ${threadId} started`)
  worker.on("message",(primes)=>{
    result = result.concat(primes)
  })
  worker.addListener("error",(err) => {
    console.log(err)
  })
  worker.on("exit",(code)=>{
    console.log(`Worker ${threadId} finished`)

    completed++

    if(completed === THREADS){
      console.log(`Time Taken: ${performance.now()-startTime} ms`);

    }

    if(code !== 0){
      console.error(`Worker ${threadId} exited with code ${code}`)
    }


  })
}
