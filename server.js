//Express
let express = require("express");
let app = express();

/*
const path = require("path");
-->

//Static Folder
app.use(express.static(__dirname + '/public/dist'));

//Body Parser
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Morgan
let morgan = require("morgan");
app.use(morgan('dev'));

//Mongo Database
let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/usersSchema');
let FormSchema = new mongoose.Schema({
    title: { type:String, require:true},
    editable: { type:Boolean, required:true, default:false}
})

//Routes
app.all("*", (req,res,next) => {
    res.sendfile(path.resolve("./public/dist/index.html"))
})

app.get("/forms/", (req, res, next) => {
    console.log("Server > GET '/forms'")
    res.json([]);
}
)

app.post("/forms/", (req, res, next) => {
    console.log("Server > POST '/forms' > forms", req.body);
    
    res.json([]);
}
)*/

//server listening @ 1337

//Morgan
let morgan = require("morgan");
app.use(morgan('dev'));

//Mongo Database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/invoicereport');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB Connected')
});

var invoiceSchema = mongoose.Schema({name: String});
var Kitten = mongoose.model('kittens', invoiceSchema);

//Static Folder
app.use(express.static(__dirname + '/public/dist'));

app.get('/api/forms/', function (req, res, next) {
    Kitten.find((err,docs)=>{
        res.json(docs);
    })
})

app.post("/forms/:name", (req, res, next) => {
    console.log("Server > POST '/forms' > forms", req.body);
})

//app.get('/users/:userId-:bookId', (req, res, next) => {
 //res.send(req.params);
 //next()},(res,req) => {res.send('praveen')}
 //res.send('praveen');
 //res.sendfile(path.resolve("./public/dist/assets/images/icon_n.jpg"));
 //res.send(req.body);
//)

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.listen(3000, () => console.log("Server runnnig @ 1337 Praveen"));