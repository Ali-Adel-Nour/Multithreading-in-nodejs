const Pool = require("./pool");
const { performance } = require("perf_hooks");

const numWorkers = 4;
const pool = new Pool(numWorkers);

let result = [];
let tasksDone = 0;
const totalTasks = 2000
const start = performance.now();

for (let i = 0; i < totalTasks; i++) {
  if (i % 5 ===0){

  }else{


      pool.submit(
    "factorial",
    {
      n:BigInt(i)
    },
    (factorialResult) => {

     console.log(`Factorial of ${i} is ${factorialResult}`);
      tasksDone++;

    

      if (tasksDone === totalTasks) {
        console.log(`Time taken: ${performance.now() - start}ms`);
        console.log(result.sort());
        process.exit(0);
      }
    }
  );
  }
  pool.submit(
    "generatePrimes",
    {
      count: 20,
      start: 1_000_000 + i * 500,
      format: true,
      log: false,
    },
    (primes) => {
      // console.log("Primes generated.");

      tasksDone++;

      result = result.concat(primes);

      if (tasksDone === totalTasks) {
        console.log(`Time taken: ${performance.now() - start}ms`);
        console.log(result.sort());
        process.exit(0);
      }
    }
  );
}
