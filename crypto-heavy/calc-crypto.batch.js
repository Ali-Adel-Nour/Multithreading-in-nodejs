const { workerData, parentPort } = require("worker_threads");
const crypto = require("crypto");

const BATCH_SIZE = 4096
const buffer = Buffer.alloc(BATCH_SIZE);


function fillBuffer(){
  crypto.randomFillSync(buffer)
}

// function generateRandomNumber() {
//   crypto.randomFillSync(buffer);
//   const randomValue = buffer.readUInt16BE(0); // read the buffer as an unsigned 16-bit integer
//   return randomValue;
// }

function readRandomNumber(offset){
  const randomNumber = buffer.readInt16BE(offset);
  return randomNumber;
}

let sum = 0;
let random;
let bufferOffset = 0

for (let i = 0; i < workerData.count; i++) {
  random = readRandomNumber(bufferOffset);
  bufferOffset += 2

  if(bufferOffset >= BATCH_SIZE){
    fillBuffer()
    bufferOffset = 0
  }

  // random = generateRandomNumber();
  sum += random;

  if (sum > 100_000_000) {
    sum = 0;
  }
}

parentPort.postMessage(sum);
