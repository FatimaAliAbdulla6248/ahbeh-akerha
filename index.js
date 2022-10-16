const express = require('express')
const app = express()
const PORT =3000
const ejsLayouts = require('express-ejs-layouts');
// midleware
app.set('view engine', 'ejs');
app.use(ejsLayouts);
//routes
//home
app.get('/',(req,res)=>{
    res.render('home.ejs')
})


// favorite animals
app.get('/animals', (req, res)=>{
    const faveAnimals = ['sand crab', 'corny joke dog', 'benedict the sea cucumber']
    res.render('animals.ejs', {animals: faveAnimals})
})

// favorite food
app.get('/food', (req, res)=>{
    const favefood = ['Salmon','Avocado','sushi']
    res.render('food.ejs', {food: favefood})
})

// favorite movies
app.get('/movies', (req, res)=>{
    const favemovies = ['action','drama']
    res.render('movies.ejs', {movies: favemovies})
})


// favorite products
app.get('/products', (req, res)=>{
    const faveproducts = ['skin care','organic food']
    res.render('products.ejs', {products: faveproducts})
     
})

app.listen(PORT,()=>{
    console.log(`You are running !`)
})
