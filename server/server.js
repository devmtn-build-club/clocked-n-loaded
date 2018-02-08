//---------NPM Package Imports-----------------------
const express = require('express')
    , massive = require('massive')

//---------JS Imports-----------------------
const config = require('./config')
    , PORT = config.port
// adminCtrl.js


//---------Setup-----------------------
const app = express()

app.use(express.json())

massive(config.db_uri).then(dbInstance=>{
    app.set('db', dbInstance)
    console.log('DB Connected')
}).catch(console.log)

//---------Endpoints-----------------
app.get('/test', (req, res)=>{
    console.log('testing')
    res.status(200).send('test successful')
})


//---------Listen-----------------
app.listen(PORT, ()=>console.log(`${new Date()}→ Listening on port: ${PORT}`))