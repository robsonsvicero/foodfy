const express = require('express')
const routes = express.Router()
const recipes = require('./controllers/admin')

routes.get('/', function(req, res) {
  return res.redirect('/admin/recipes')
})
routes.get('/admin/recipes', recipes.index)
routes.get('/admin/create', recipes.create)
routes.get('/admin/recipes/:id', recipes.show)
routes.get('/admin/edit/:id', recipes.edit)
routes.post('/admin/recipes', recipes.post)        //create
routes.put('/admin/recipes', recipes.put)         //update
routes.delete('/admin/recipes', recipes.delete)  //delete

module.exports = routes