const {workerData} = require("worker_threads");

const numberBuffer = new Uint32Array(workerData.number);

for(let i = 0 ; i<5000; i++){
    //Critical section
    //read and write on same time read 100 and write 101
    numberBuffer[0] = numberBuffer[0] + 1;
}
