//definir rutas

//configurar rutas
const { Router } = require('express')
const app = Router()
const Lists = require('../controllers/lists/lists')
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/lists', Lists.index)
app.get('/lists/:id', Lists.find)
app.post('/lists', Lists.create)
app.put('/lists/:id', Lists.update)
app.delete('/lists/:id', Lists.delete)
app.get('/lists/:id/cards', Lists.cards)

module.exports = app;
