const fs = require("fs")
const data = require("../data.json")
// const Intl = require('intl')

exports.index = function(req, res) {
  return res.render('recipes/index', { items: data.recipes })
}

//CREATE
exports.create = (req, res) => {
  return res.render('recipes/create')
}

//POST
exports.post = function(req, res) {
  const keys = Object.keys(req.body)
  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("Please, fill all fields!")
    }
  }

  let id = 1
  const lastRecipe = data.recipes[data.recipes.length - 1]

  if (lastRecipe) {
    id = lastRecipe.id + 1
  }

  data.recipes.push({
    id,
    ... req.body
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write file error!")

    return res.redirect("/recipes")
  })
}

//SHOW
exports.show = function(req, res) {
  const { id } = req.params
  const foundRecipe = data.recipes.find(function(recipe) {
    return id == recipe.id
  })

  if (!foundRecipe) return res.send("Recipe not found!")

  const items = {
    ...foundRecipe,
  }
  return res.render("recipes/show", { items })
}

//EDIT
exports.edit = function(req, res) {
  const { id } = req.params

  const foundRecipe = data.recipes.find(function(recipe) {
    return id == recipe.id
  })

  if (!foundRecipe) return res.send("Recipe not found!")

  const item = {
    ...foundRecipe
  }
  return res.render('recipes/edit', { item })
}

//PUT
exports.put = function(req, res) {
  const { id } = req.body
  let index = 0

  const foundRecipe = data.recipes.find(function(recipe, foundIndex) {
    if (id == recipe.id) {
      index = foundIndex
      return true
    }
  })

  if (!foundRecipe) return res.send("Recipe not found!")

  const recipe = {
    ...foundRecipe,
    ...req.body,
    id: Number(req.body.id)
  }

  data.recipes[index] = recipe

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write file error!")
    return res.redirect(`/recipes/${id}`)
  })

}

//DELETE

exports.delete = function(req, res) {
  const { id } = req.body
    const filteredRecipes = data.recipes.filter(function(recipe) {
      return recipe.id != id
    })

    data.recipes = filteredRecipes
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
      if(err) return res.send("Write file error!")

      return res.redirect('/recipes')
    })

}