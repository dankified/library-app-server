function handleGet(res) {
	res.writeHead(200, 'OK', {
		'Content-type': 'application/json'
	});
	res.end(JSON.stringify({message: "Something"}));
}


module.exports = function (req, res) {
	const {method} = req;

	switch(method) {
		case 'GET': {
			handleGet(res);
			break;
		}
		default:
			res.writeHead(402, 'Method not found');
	}
}