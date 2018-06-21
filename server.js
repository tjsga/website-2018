// MODULES
var express = require('express')
var path = require('path')
var hbs = require('hbs')
var fs = require('fs')

// SERVER INIT
var app = express()
var server =  require('http').createServer(app)

// SERVER CONFIG
app.set('trust proxy', 1)
app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname, 'views'))
hbs.registerHelper('listFirstThree', function (context, options) {
	var ret = ""
	for (var i = 0, j = Math.min(context.length, 3); i < j; i++) { 
		ret += options.fn(context[i])
	}
	return ret
})
hbs.registerHelper('firstSentences', function (context) { 
	return context.toString().split('.').slice(0, 1).join('.')
})
hbs.registerHelper('first3Sentences', function (context) { 
	return context.toString().split('.').slice(0, 3).join('.')
})
hbs.registerHelper('eq', function (v1, v2) { 
	return v1 == v2
})

// CLIENT CONFIG
app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/css', express.static(path.join(__dirname, 'css')))
app.use('/resources', express.static(path.join(__dirname, 'resources')))

// PAGES
app.get('/officers', function (req, res) {
	var content = JSON.parse(fs.readFileSync('site.json'))
	res.render('officers', { site: content })
})

app.get('/committee', function (req, res) {
	var content = JSON.parse(fs.readFileSync('site.json'))
	res.render('committee', { site: content })
})

app.get('/council', function (req, res) {
	var content = JSON.parse(fs.readFileSync('site.json'))
	res.render('council', { site: content })
})

app.get('/mission', function (req, res) {
	var content = JSON.parse(fs.readFileSync('site.json'))
	res.render('mission', { site: content })
})

app.get('/minutes', function (req, res) {
	var content = JSON.parse(fs.readFileSync('site.json'))
	res.render('minutes', { site: content })
})

// app.get('/projects', function (req, res) {
// 	var content = JSON.parse(fs.readFileSync('site.json'))
// 	res.render('projects', { site: content })
// })

app.get('/news', function (req, res) {
	var content = JSON.parse(fs.readFileSync('site.json'))
	res.render('news', { site: content })
})

app.get('/news/:page', function (req, res) {
	var id = req.params.page
	console.log(id)
	var content = JSON.parse(fs.readFileSync('site.json'))
	res.render('newsArticle', { site: content, id: id })
})

app.get('/involved', function (req, res) {
	var content = JSON.parse(fs.readFileSync('site.json'))
	res.render('involved', { site: content })
})

app.get('/', function (req, res) {
	var content = JSON.parse(fs.readFileSync('site.json'))
	res.render('index', { site: content })
})

// LISTENER
server.listen(process.env.PORT || 8080)