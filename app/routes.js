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
	'beingIdentityProvider' : 'https://paper.dropbox.com/doc/Identity-providers-on-the-trust-framework-what-you-must-do-C9LFORoDTa2aQLIByOj0D' 
}) 

// sitekit
renderPages('kzhnz', { 
	'url' : 'kzhnz',
	'beingIdentityProvider' : 'https://blog.gemalto.com/wp-content/uploads/2018/02/digital-id.jpg' 
}) 

module.exports = router
