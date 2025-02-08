const genratorPrime = require("./prime-genrator.js");
const {performance } = require("perf_hooks");

const startTime = performance.now();

const primeGenerator = genratorPrime();

console.log(genratorPrime(10,100_000_000));

console.log(`Time Taken: ${performance.now()-startTime} ms`);