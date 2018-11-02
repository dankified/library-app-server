const http = require('http');
const secureHeaders = require('./utils/secure-headers');
const corsHeaders = require('./utils/cors-headers');

http.createServer((req, res) => {
	secureHeaders(res);
	corsHeaders(res);
	res.writeHead(200, 'ok');
	res.end();
}).listen(5000, () => console.log("Listening on port 5000"));