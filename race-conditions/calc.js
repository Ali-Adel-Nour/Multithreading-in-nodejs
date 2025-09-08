const {workerData} = require("worker_threads");

const numberBuffer = new Uint32Array(workerData.number);

for(let i = 0 ; i<5000000; i++){
    //Critical section
    //read and write on same time read 100 and write 101
    //Atomics always deals with
    Atomics.add(numberBuffer, 0 , 1)
    //numberBuffer[0] = numberBuffer[0] + 1;
}
