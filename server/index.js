const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')


const app = express()
app.use(cors())
app.use(express.json()) //this for whenever we pass data from frontend to backend so it will force that to the json format if we don't try this so it will give us any error

mongoose.connect("mongodb://localhost:27017/crud")

app.delete('/deleteUser/:id', (req, res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id : id})
    .then(res => res.json(res))
    .catch(err=>res.json(err))
})

app.post("/createUser",(req,res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put("/UpdateUser/:id",(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id : id}, {
        name:req.body.name,
        email:req.body.email,
        age:req.body.age
    })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})  
app.get("/",(req,res)=>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err =>res.json(err))
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
        .then(users => res.json(users))
    .catch(err =>res.json(err))
})

app.listen(3001, () => {
    console.log('Server is running')
})

