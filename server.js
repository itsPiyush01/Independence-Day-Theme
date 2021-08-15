const express = require("express");
const bodyParser = require("body-parser");
const _ = require('lodash');
const mongoose = require("mongoose");
const { functionsIn } = require("lodash");
require('dotenv').config();


mongoose.connect('mongodb://localhost:27017/IndependenceDay', { useUnifiedTopology: true, useNewUrlParser: true });
// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-8iknu.mongodb.net/IndependenceDay?retryWrites=true&w=majority`, { useUnifiedTopology: true, useNewUrlParser: true });


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
     email: String
});
   

const Fest = new mongoose.model("Fest", festSchema)


app.get('/', function (req, res) {
     // res
     // res.send('hello world')
     // res.sendFile('index.html');
     res.sendFile('index.html', { root: __dirname });
     console.log(req.params.name);

})



     
app.get('/fest', function (req, res) {
          const id = req.params.id;
          console.log(req.params.id);
     // res
     // res.send('hello world')

     res.sendFile('public/fest.html', { root: __dirname });

})


app.post("/fest", (req,res)=> {
     const name= req.body.name;
     const student_id= req.body.student_id;
     const year=req.body.year;

     
     console.log(student_id);
     console.log(year);
     // res.redirect("fest");


     
     const fest = new Fest({
          name: req.body.name,
          student_id: req.body.student_id,
          year: req.body.year,
          email:"test@dkn.com"
     })
     res.sendFile('public/response.html', { root: __dirname });
     fest.save(function (err, post) {
          if (err) {
            console.log("err: " + err);
            res.redirect("/fest");
          }
          else {
          // res.redirect("fest");
          res.sendFile('public/response.html', { root: __dirname });
          }
        })
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 5505;
}


app.listen(port, function () {
  console.log("Server has started Successfully. on port "+port);
});

