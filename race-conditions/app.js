const {Worker} = require("worker_threads"); 
const {Buffer} = require("buffer");

const number = Buffer.from(new SharedArrayBuffer(4)); 


const THREADS = 8;
let completed = 0;

console.log("Original data:", number);

for (let i = 0; i < 8; i++) {
  const worker = new Worker("./calc.js", {
    workerData: {
      number:number.buffer
    }
  });
  worker.on("exit", () => {
    completed++;
    if (completed === THREADS) {
      console.log("Final number is:", number.readUInt32LE());
    }
  });
}

