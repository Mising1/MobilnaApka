const express = require('express')
const mongoose = require('mongoose')

const app = express()
var cors = require('cors')
app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/MobileApp')

const UserSchema = mongoose.Schema({
    email: String,
    password: String
})

const UserModel = mongoose.model('users', UserSchema)

const ProductSchema = mongoose.Schema({
    email: String,
    password: String
})

const ProductModel = mongoose.model('products', ProductSchema)

app.get('/getProducts', (req, res) => {
    ProductModel.find({}).then(function(product){
        res.json(product)
    }).catch(function(err){
        console.log(err);
    })
})


app.get('/getUsers', (req, res) => {
    UserModel.find({}).then(function(users){
        res.json(users)
    }).catch(function(err){
        console.log(err);
    })
})

app.listen(3001, () => {
    console.log("Server running");
})