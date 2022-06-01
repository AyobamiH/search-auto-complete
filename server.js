const express = require('express')
const app = express()
const cors = require('cors')
const {MongoClient, ObjectId} = require('mongodb')
require('dotenv').config()
const PORT = process.env.PORT || 3000
let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'sample_mflix',
    collection


MongoClient.connect(dbConnectionStr)
    .then(client => {
        console.log('CONNECTED TO DATABASE')
        db = client.db(dbName)
        collection = db.collection('movies')
    })



app.listen(PORT, () =>{
    console.log('SERVER IS RUNNING')
})