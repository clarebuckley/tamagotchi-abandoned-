import * as express from 'express'
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json)

const cors = require('cors')
var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions))

app.listen(8000, () => {
  console.log('Server started!')
})



//ROUTES

app.route('/api/food').get((req, res) => {
  res.send({
    food: [{ name: 'apple' }, { name: 'pear' }],   //get stuff from the db
  })
})

app.route('/api/food/:name').get((req, res) => {
  const requestedFoodName = req.params['name'];
  res.send({ name: requestedCatName });
})


//app.route('/api/something').post((req, res) => {
 // res.send(201, req.body)
//})

//app.route('/api/cats/:something').delete((req, res) => {
//  res.sendStatus(204)
//})
