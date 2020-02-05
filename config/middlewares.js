const bodyParser = require('body-parser')

module.exports = app => {
    app.set('port', 8080)
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
}