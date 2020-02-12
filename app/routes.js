const express = require('express')
const router = express.Router()

function redirect() {
	router.get('/drxik/*', function (req, res) {
	  var path = req.path
	  var cleared = path.replace('/drxik/','/')
	  res.redirect(cleared);
	});
}
redirect()

module.exports = router

// if someone is on 'drxik/' + path
// take em back to path
