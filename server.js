// MODULES
var express = require('express')
var path = require('path')
var hbs = require('hbs')

// SERVER INIT
var app = express()
var server =  require('http').createServer(app) 

// SERVER CONFIG
app.set('trust proxy', 1)
app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname, 'views'))

// CLIENT CONFIG
app.use('/css', express.static(path.join(__dirname, 'css')))
app.use('/resources', express.static(path.join(__dirname, 'resources')))

// PAGES
app.get('*', function (req, res) {
	res.render('index')
})

// LISTENER
server.listen(process.env.PORT || 8080)