import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'

const app = express()
app.use(bodyParser.json)


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
  res.send({ name: requestedFoodName });
})

app.route('/api/tamagotchi').get((req,res) => {
  res.send({
    tamagotchi: {
      name: 'Dan',
      age: 0,
      happiness: 50
    }
  })
})

app.route('/api/tamagotchi').put((req, res) => {
  res.send(200, req.body)
})
