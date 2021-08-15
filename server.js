const express = require("express");
const bodyParser = require("body-parser");
const _ = require('lodash');
const mongoose = require("mongoose");
const { functionsIn } = require("lodash");
require('dotenv').config();


// mongoose.connect('mongodb://localhost:27017/IndependenceDay', { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-8iknu.mongodb.net/IndependenceDay?retryWrites=true&w=majority`, { useUnifiedTopology: true, useNewUrlParser: true });


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.urlencoded({
     extended: true
   }))
 
const festSchema = new mongoose.Schema({
     name: String,
     student_id: String,
     year: String,
     email: String,
     event:String
});
   

const Fest = new mongoose.model("Fest", festSchema)


app.get('/', function (req, res) {
     // res
     // res.send('hello world')
     // res.sendFile('index.html');
     res.sendFile('index.html', { root: __dirname });
     console.log(req.params.name);

})




app.get("/responses",(req,res)=>{

     let html=`
     <html lang="en">
<head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>RESPONSES</title>
</head>
<body>
<h2>
<a href="/responses/fest">Fest</a>
</h2>
<h2>
<a href="/responses/fest">Fest</a>
</h2>
<h2>
<a href="/responses/fest">Fest</a>
</h2>
</br>
</body>
</html>
    
     `
     res.write(html)
     res.send();
})


var MongoClient = require('mongodb').MongoClient;

app.get("/responses",function (req,res) {

var mongoose = require('mongoose')

Fest.find({}, function(err, users) {
     var userMap = {};
 
     users.forEach(function(user) {
       userMap[user._id] = user;
     });
 
     // res.write("<h1>FEST</h1>");
     res.send(userMap);  
   });

mongoose.connection.on('error', function(error){
throw new Error(error);
});
   

})

       
   

     
app.get('/codex', function (req, res) {
          const id = req.params.id;
          console.log(req.params.id);
     // res
     // res.send('hello world')

     res.sendFile('public/codex.html', { root: __dirname });

})





///DANZA///

     
app.get('/danza', function (req, res) {
     const id = req.params.id;
     console.log(req.params.id);
// res
// res.send('hello world')

res.sendFile('public/danza.html', { root: __dirname });

})




///SMC///

 
app.get('/smc', function (req, res) {
     const id = req.params.id;
     console.log(req.params.id);
// res
// res.send('hello world')

res.sendFile('public/smc.html', { root: __dirname });

})







///sristhi ///


 
app.get('/sristhi', function (req, res) {
     const id = req.params.id;
     console.log(req.params.id);
// res
// res.send('hello world')

res.sendFile('public/sristhi.html', { root: __dirname });

})







///sristhi ///


 
app.get('/sristhi', function (req, res) {
     const id = req.params.id;
     console.log(req.params.id);
// res
// res.send('hello world')

res.sendFile('public/sristhi.html', { root: __dirname });

})



     

///codex ///

app.get('/codex', function (req, res) {
     const id = req.params.id;
     console.log(req.params.id);
// res
// res.send('hello world')

res.sendFile('public/codex.html', { root: __dirname });

})

///SPC ///

app.get('/spc', function (req, res) {
     const id = req.params.id;
     console.log(req.params.id);
// res
// res.send('hello world')

res.sendFile('public/spc.html', { root: __dirname });

})
///O danza ///

app.get('/odanza', function (req, res) {
     const id = req.params.id;
     console.log(req.params.id);
// res
// res.send('hello world')

res.sendFile('public/odanza.html', { root: __dirname });

})

app.post("/post",(req,res)=>{
     res.redirect("/");
})
app.get("/post",(req,res)=>{
     res.redirect("/");
})


// app.post("/post", (req,res)=> {     
//      // res.redirect("fest");
     
//      const fest = new Fest({
//           name: req.body.name,
//           student_id: req.body.student_id,
//           year: req.body.year,
//           email:req.body.email,
//           event:req.body.event
          
//      })
//      res.sendFile('public/response.html', { root: __dirname });
//      fest.save(function (err, post) {
//           if (err) {
//             console.log("err: " + err);
//             res.redirect("/");
//           }
//           else {
//           // res.redirect("fest");
//           res.sendFile('public/response.html', { root: __dirname });
//           }
//         })
//      })



let port = process.env.PORT;
if (port == null || port == "") {
  port = 5505;
}


app.listen(port, function () {
  console.log("Server has started Successfully. on port "+port);
});

