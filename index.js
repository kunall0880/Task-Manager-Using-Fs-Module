const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    fs.readdir(`./files`,(error,files)=>{
        res.render('index',{files : files});
    })
})

app.get('/file/:filename',(req,res)=>{
    fs.readFile(`./files/${req.params.filename}`,'utf-8',(error,data)=>{
        res.render('show',{data : data,
            fileName:req.params.filename
        })
    })
})

app.get('/edit/:filename',(req,res)=>{
    res.render('edit',{fileName:req.params.filename})
})
app.post('/edit',(req,res)=>{
    //res.render('edit',{fileName:req.params.filename})
    fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}`,(error)=>{
        res.redirect('/');
    })
})

app.post('/create',(req,res)=>{
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,(error)=>{
        res.redirect("/");
        console.log(req.body);
    });
})

app.listen(3000,(req,res)=>{
    console.log("server chal gaya h");
})