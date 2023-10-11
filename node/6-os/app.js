const os = require('os');

// 서버가 동작하고 있는 환경에 대한 정보를 얻을 수 있다.
console.log(os.EOL === '\n'); // false
console.log(os.EOL === '\r\n'); // true
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname())