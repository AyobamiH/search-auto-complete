const express = require('express')
const app = express()
const cors = require('cors')
const {MongoClient, ObjectId} = require('mongodb')
const { response } = require('express')
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

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get('/search', async (req, res) => {
    try{
        let result = await  collection.aggregate([
            {
                "$Search" : {
                    "autocomplete":{
                        "query" : `${request.query.query}`,
                        "path" : "title",
                        "fuzzy" : {
                            "maxEdits": 2,
                            "prefixLength" : 3
                        }
                            
    
                    }
                }
            }
        ]).toArray()
        res.send(result)

    }catch{
        response.status(500).send({message: error.message})

    }
})

app.listen(PORT, () =>{
    console.log('SERVER IS RUNNING')
})