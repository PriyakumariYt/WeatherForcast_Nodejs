const express = require('express');
const app = express();
exports.app = app;
const path = require('path');
const port = process.env.Port || 8000;
const hbs = require('hbs');
//public static path
const templatePath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');
const static_path = path.join(__dirname,"../public")
app.use(express.static(static_path));

app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialPath);


app.get("/",(req,res)=>{
res.render('index')
})
app.get("/about",(req,res)=>{
    res.render('about')
    })
    app.get("/weather",(req,res)=>{
        res.render('weather')
        })
        app.get("*",(req,res)=>{
            res.render('error',{
                errorMsg: "Opps page not found",
            })
            })
app.listen(port,()=>{
    console.log(`listening the port at ${port} `)
})