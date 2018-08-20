const EDITINGPASSWORD = '#420dglazeit'

// MODULES
var express = require('express')
var path = require('path')
var hbs = require('hbs')
var fs = require('fs')
var bodyParser = require("body-parser")

// SERVER INIT
var app = express()
var server =  require('http').createServer(app)

// SERVER CONFIG
app.set('trust proxy', 1)
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

hbs.registerPartials(path.join(__dirname, 'views'))
hbs.registerHelper('listFirstThree', function (context, options) {
	var ret = ""
	for (var i = 0, j = Math.min(context.length, 3); i < j; i++) { 
		ret += options.fn(context[i])
	}
	return ret
})
hbs.registerHelper('firstSentences', function (context) { 
	return context[0].para.toString()
})
hbs.registerHelper('first3Sentences', function (context) { 
	return context.toString().split('.').slice(0, 3).join('.')
})
hbs.registerHelper('eq', function (v1, v2) { 
	return v1 == v2
})

function sendReminderEmailsForHoco(judges) {
	judges.forEach((e) => {
		var send = require('gmail-send')({
			user: 'sga.tjhsst@gmail.com',
			pass: '#dglazeit',
			to: e.email,
			subject: 'Homecoming Judging Reminder',
			text: 'Hello ' + e.firstName + ' ' + e.lastName + ', \nYou registered to judge a variety of events for Homecoming 2018.\nPlease go to https://sga.tjhsst.edu/judging2018 to complete judging.\nYour password is ' + e.password,
		})
		send({}, function (err, res) {})
	})
}

// CLIENT CONFIG
app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/css', express.static(path.join(__dirname, 'css')))
app.use('/resources', express.static(path.join(__dirname, 'resources')))

// PAGES
app.post('/remindJudges', function(req, res) {
	sendReminderEmailsForHoco(JSON.parse(fs.readFileSync('hoco.json')).judges)
	res.send('reminded???')
})

app.get('/remindJudges', function(req, res) {
	res.render('remindActivator', {})
})

app.post('/judgeSignup', function (req, res) {
	var data = JSON.parse(req.body.data)
	var content = JSON.parse(fs.readFileSync('hoco.json'))
	data.password = (Math.floor(Math.random() * 900000) + 100000)
	content.judges.push(data)
	fs.writeFileSync('hoco.json', JSON.stringify(content))
	res.send({ status: 'Registered' })
})

app.post('/judging2018', function (req, res) {
	var hoco = JSON.parse(fs.readFileSync('hoco.json'))
	var data = JSON.parse(req.body.data)
	console.log(data)
	var good = false
	hoco.judges.forEach((e, i) => {
		console.log(e.password, data.password)
		if(e.email === data.judge.email && e.password == data.password) {
			hoco.judges[i].scores = data.scores
			fs.writeFileSync('hoco.json', JSON.stringify(hoco))
			good = true
		}
	})
	if (good) {
		res.send({ 'status': 'successful' })
	} else {
		res.send({ 'status': 'unsuccessful' })
	}
})

app.get('/judging2018', function (req, res) {
	var content = JSON.parse(fs.readFileSync('site.json'))
	var hoco = JSON.parse(fs.readFileSync('hoco.json'))
	hoco.judges.forEach((e, i) => {
		hoco.judges[i].password = 0
	})
	hoco.string = JSON.stringify(hoco)
	res.render('hoco', { site: content, hoco: hoco })
})

app.get('/hoco2018', function (req, res) {
	var content = JSON.parse(fs.readFileSync('site.json'))
	res.render('hoco', { site: content })
})

app.get('/edit', function (req, res) {
	var content = JSON.parse(fs.readFileSync('site.json'))
	res.render('edit', { officers: JSON.stringify(content.officers), committee: JSON.stringify(content.committee), council: JSON.stringify(content.council), news: JSON.stringify(content.news) })
})

app.post('/edit', function (req, res) {
	var data = JSON.parse(req.body.data)
	if (data.password === EDITINGPASSWORD) {
		var content = JSON.parse(fs.readFileSync('site.json'))
		content.officers = data.officers
		content.committee = data.committee
		content.council = data.council
		content.news = data.news
		fs.writeFileSync('site.json', JSON.stringify(content))
		res.send({ status: 'editsSaved' })
	} else {
		res.send({ status: 'incorrectPassword' })
	}
})

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

app.get('/projects', function (req, res) {
	var content = JSON.parse(fs.readFileSync('site.json'))
	res.render('projects', { site: content })
})

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