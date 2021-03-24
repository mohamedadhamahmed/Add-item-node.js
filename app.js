const express=require("express");
const app=express();

const mongoose=require('mongoose');
var bodyParser = require('body-parser');
const cors=require('cors');
var port=process.env.PORT ||8080;
const productRoute=require('./route/products');
mongoose.connect('mongodb+srv://mohamed:adhammedo3334444@cluster0.hbypk.mongodb.net/mohamed?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const connection=mongoose.connection;

connection.on('connected',()=>{console.log('connected with server')});
connection.on('error',()=>{console.log('error with server')});

app.use([bodyParser.urlencoded({extended:true})
    ,express.json()])
app.use(cors());
  app.use('/products',productRoute);
// app.post('/products',function (req, res) {
//     var url = req.body;
//     console.log(url)
// });

app.listen(port,()=>{
    console.log("server sarted");
})
module.exports=app
