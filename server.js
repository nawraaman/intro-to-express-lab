const express = require('express')

const app = express()
const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
]
const shoes = [
  { name: 'Birkenstocks', price: 50, type: 'sandal' },
  { name: 'Air Jordans', price: 500, type: 'sneaker' },
  { name: 'Air Mahomeses', price: 501, type: 'sneaker' },
  { name: 'Utility Boots', price: 20, type: 'boot' },
  { name: 'Velcro Sandals', price: 15, type: 'sandal' },
  { name: 'Jet Boots', price: 1000, type: 'boot' },
  { name: 'Fifty-Inch Heels', price: 175, type: 'heel' }
]

//Exercise1
app.get('/greetings/:name', (req, res) => {
  const userName = req.params.name
  res.send(`Hello there, ${userName}!`)
})
//Exercise2
app.get('/roll/:number', (req, res) => {
  const number = req.params.number
  if (!isNaN(number)) {
    const range = parseInt(number)
    const roll = Math.floor(Math.random() * (range + 1))
    res.send(`You rolled a ${roll}!`)
  } else {
    res.send('You must specify a number.')
  }
})
//Exercise3
app.get('/collectibles/:index', (req, res) => {
  const index = parseInt(req.params.index)
  if (index < 0 || index >= collectibles.length) {
    return res.send('This item is not yet in stock. Check back soon!')
  }
  const item = collectibles[index]
  res.send(`so, you want the ${item.name}? For ${item.price}, it can be yours!`)
})
//Exercise4
app.get('/shoes', (req, res) => {
  let ListofShoes = shoes
  const minPrice = req.query.minPrice
  const maxPrice = req.query.maxPrice
  const type = req.query.type
  if (minPrice) {
    ListofShoes = ListofShoes.filter((shoe) => shoe.price >= Number(minPrice))
  }
  if (maxPrice) {
    ListofShoes = ListofShoes.filter((shoe) => shoe.price <= Number(maxPrice))
  }
  if (type) {
    ListofShoes = ListofShoes.filter((shoe) => shoe.type === type)
  }
  res.json(ListofShoes)
})

app.listen(5000, () => {
  console.log('listening on port 5000')
})
