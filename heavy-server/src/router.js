// Controllers
const User = require("./controllers/user");
const generatePrimes = require("../lib/prime-genrator.js");
const {performance } = require("perf_hooks");

module.exports = (server) => {
  // ------------------------------------------------ //
  // ************ USER ROUTES ************* //
  // ------------------------------------------------ //

  // Log a user in and give them a token
  server.route("post", "/api/login", User.logUserIn);

  // Log a user out
  server.route("delete", "/api/logout", User.logUserOut);

  // Send user info
  server.route("get", "/api/user", User.sendUserInfo);

  // Update a user info
  server.route("put", "/api/user", User.updateUser);

  // ------------------------------------------------ //
  // ************ PRIME NUMBER ROUTES ************* //
  // ------------------------------------------------ //

  server.route("get", "/api/primes", (req, res) => {
    const count = Number(req.params.get("count"));
   let startingNumber = BigInt(req.params.get("start"));
    const start = performance.now()

    if(startingNumber < BigInt(Number.MAX_SAFE_INTEGER)){
      startingNumber = Number(startingNumber);

    }
   const primes = generatePrimes(count, startingNumber,{format:true})

    res.json({
      primes,
      time: ((performance.now() - start) / 1000).toFixed(2),

    });
  });
};
