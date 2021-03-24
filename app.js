const express=require("express");
const app=express();

const mongoose=require('mongoose');
var bodyParser = require('body-parser');
 //const cors=require('cors');
const productRoute=require('./route/products');
mongoose.connect('mongodb+srv://mohamed:adhammedo3334444@cluster0.hbypk.mongodb.net/mohamed?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const connection=mongoose.connection;
console.log("Database_URL", process.env.DATABASE_URL);

connection.on('connected',()=>{console.log('connected with server')});
connection.on('error',()=>{console.log('error with server')});

app.use([bodyParser.urlencoded({extended:true})
    ,express.json()])
//app.use(cors());
  app.use('/products',productRoute);
// app.post('/products',function (req, res) {
//     var url = req.body;
//     console.log(url)
// });
const PORT=process.env.PORT ||8080;

app.listen(PORT,()=>{
    console.log("server sarted"+PORT);
})
module.exports=app
