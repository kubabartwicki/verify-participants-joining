const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

function renderPages(companyName, links) {
	router.get('/' + companyName, function (req, res) {
	  res.render('templates/index', links);
	});
	router.get('/' + companyName + '/*', function (req, res) {
	  var path = req.path
	  var cleared = path.replace('/' + companyName + '/','')
	  res.render('templates/' + cleared, links);
	});
}

// demo
renderPages('drxik', { 
	'url' : 'drxik',
	'variable' : 'value A' 
}) 

// sitekit
renderPages('kzhnz', { 
	'url' : 'kzhnz',
	'variable' : 'value B' 
}) 

module.exports = router
