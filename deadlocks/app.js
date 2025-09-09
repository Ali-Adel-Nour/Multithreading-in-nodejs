const { Worker } = require("worker_threads");

const number = new Uint32Array(new SharedArrayBuffer(4)); // 32-bit number
const A = new SharedArrayBuffer(4);
const B = new SharedArrayBuffer(4);

const THREADS = 20;
let completed = 0;

for (let i = 0; i < 1; i++) {
  const worker1 = new Worker("./calc1.js", {
    workerData: { number: number.buffer,A,B },
  });

  const worker2 = new Worker("./calc2.js", {
    workerData: { number: number.buffer,A,B },
  });

}
