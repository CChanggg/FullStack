var express = require('express')
var app = express()
var router = express.Router();
router.get('/', function(req, res) {
    res.send('<h1>Hello World</h1>');
})
app.use('/home', router)
console.log(process.env.PORT)
var port = process.env.PORT || 8080
app.listen(port)