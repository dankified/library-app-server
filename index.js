//Imports
//node internal modules
const http = require('http');
const https = require('http');
const fs = require('fs');
//headers config
const secureHeaders = require('./utils/headerPolicies/secure-headers');
const corsHeaders = require('./utils/headerPolicies/cors-headers');
//config
const {port, envName} = require('./utils/config');

const booksHandler = require('./handlers/booksHandler');

let unifiedServer = function (req, res) {
  secureHeaders(res);
  corsHeaders(res);
  switch(req.url) {
    case '/books':
      booksHandler(req, res);
      break;
    default:
      ///notFoundHandler(req, res);
  }
}

if(envName === 'production') {
  const httpsServerOptions = {
    'key': fs.readFileSync('./utils/https/key.pem'),
    'cert': fs.readFileSync('./utils/https/cert.pem')
  };
  https.createServer(httpsServerOptions, (req, res) => {
    unifiedServer(req, res);
  }).listen(port, () => console.log(`Listening on port ${port}`));
} else {
  http.createServer((req, res) => {
    unifiedServer(req, res);
  }).listen(port, () => console.log(`Listening on port ${port}`));  
}

