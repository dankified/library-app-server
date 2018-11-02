const http = require('http');
const secureHeaders = require('./utils/secure-headers');
const corsHeaders = require('./utils/cors-headers');

const booksHandler = require('./handlers/booksHandler');

http.createServer((req, res) => {
	secureHeaders(res);
	corsHeaders(res);

	switch(req.url) {
		case '/books':
			booksHandler(req, res);
			break;
		default:
			///notFoundHandler(req, res);
	}

}).listen(5000, () => console.log("Listening on port 5000"));