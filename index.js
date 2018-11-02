const http = require('http');
const secureHeaders = require('./utils/secure-headers');

http.createServer((req, res) => {
	secureHeaders(res);
}).listen(5000, () => console.log("Listening on port 5000"));