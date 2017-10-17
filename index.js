var express = require('express')
var expressMongoRest = require('express-mongo-rest')
var app = express()
app.use('/api/v1', expressMongoRest(process.env.MONGODB_URI))
var server = app.listen(process.env.PORT, function () {
    console.log('Listening on Port', server.address().port)
})


// add annotation:
// POST http://localhost:8080/api/v1/annotation/

// get annotation
// http://localhost:8080/api/v1/annotation?ytid=whatever&sort=-_id&limit=1