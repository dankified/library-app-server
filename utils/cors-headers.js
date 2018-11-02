const cors = [
	{ name: 'Access-Control-Allow-Origin', value: '*' },
	{ name: 'Access-Control-Request-Method', value: '*' },
	{ name: 'Access-Control-Allow-Methods', value: 'OPTIONS, GET'},
	{ name: 'Access-Control-Allow-Headers', value: '*'}
]

module.exports = function(res) {
	cors.forEach(({name, value}) => {
		res.setHeader(name, value);
	})
}