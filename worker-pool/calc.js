const { parentPort,parentPost } = require("worker_threads");
const generatePrimes = require("./prime-genrator");
const factorial = require("./factorial");

parentPort.on("message", ({ taskName, options }) => {
  switch (taskName) {
    case "generatePrimes":
      const primes = generatePrimes(options.count, options.start, {
        format: options.format,
        log: options.log,
      });
      parentPort.postMessage(primes);
      break;
    case "factorial":
      const fact = factorial(options.n);
      parentPort.postMessage(fact);
      break;
    default:
      parentPost.postMessage("Unknown task");
  }
});
