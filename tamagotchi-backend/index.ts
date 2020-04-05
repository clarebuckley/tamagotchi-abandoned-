const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());


app.listen(3000, () => {
  console.log('Server started!')
})

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/tamagotchi', (req,res) => {
    console.log('sending tamagotchi stuff')
    res.send({
      age: 100,
      happiness: 100,
	  hunger: 100
  })
})

/**app.route('/api/tamagotchi').put((req, res) => {
  res.send(200, req.body)
})*/

/**app.route('/api/food').get((req, res) => {
  res.send({
    food: [{ name: 'apple' }, { name: 'pear' }],   //get stuff from the db
  })
})*/

/**app.route('/api/food/:name').get((req, res) => {
  const requestedFoodName = req.params['name'];
  res.send({ name: requestedFoodName });
})*/
